// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

package com.google.sps.data;

import com.opencsv.*;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.TableResult;

import java.text.SimpleDateFormat;
import java.text.ParseException;
import java.util.UUID;
import java.lang.Long;
import java.util.ArrayList;
import java.util.Date;

/** Class contains the name, state, and fips of a county. */
public class CountyPercentile implements Comparable<CountyPercentile> {

    // FCC api url for county information
    public static final String FCC_BASE_URL = "https://geo.fcc.gov/api/census/area?lat=";
    public static final String FCC_END_URL = "&format=json";

    // County properties
    protected String countyFips;
    protected double activeCasesPerCapita;

    public CountyPercentile(String countyFips, double activeCasesPerCapita) {
        this.countyFips = countyFips;
        this.activeCasesPerCapita = activeCasesPerCapita;
    }

    public String getCountyFips() {
        return countyFips;
    }

    public Double getActiveCasesPerCapita() {
        return activeCasesPerCapita;
    }

    @Override
    public int compareTo(CountyPercentile countyPerentile) {
        if (getActiveCasesPerCapita() == null || countyPerentile.getActiveCasesPerCapita() == null) {
            return 0;
        }
        return getActiveCasesPerCapita().compareTo(countyPerentile.getActiveCasesPerCapita());
    }

    /*
     * Get a county score based on the county percentile csv file.
     */
    public static void Update() {

        List<String[]> populations = new ArrayList<String[]>();  

        try {

            // See if fips in the csv file, if so, return the population.
            CSVReader reader = new CSVReader(new FileReader("WEB-INF/classes/county_population.csv"));
            String[] nextLine = reader.readNext();
            while ((nextLine = reader.readNext()) != null) {
                if (Integer.parseInt(nextLine[3]) % 1000 > 0) {
                    String[] array =  {nextLine[3], nextLine[2]};
                    populations.add(array);
                }
            }

            // Otherwise, log failure and return 0.
            System.out.println(Integer.toString(populations.size()) + " counties in county_population.csv");
        } 
        
        // If there is an exception, send error message and return 0.
        catch (Exception e) {
            e.printStackTrace();
            System.out.println("An error occured while getting the populations from in county_population.csv");
            return;
        }
        
        List<CountyPercentile> countyPercentiles = new ArrayList<CountyPercentile>(); 

        String date = "2020-07-22";

        // Set up BigQuery service.
        BigQuery bigquery = BigQueryOptions
            .newBuilder().setProjectId("shopsafe-step-2020").build().getService();

        // Prepare SQL query for getting projected recovered cases Forecasts.
        QueryJobConfiguration queryConfigForecast = QueryJobConfiguration.newBuilder(
            "SELECT county_fips_code, cumulative_confirmed, cumulative_deaths, recovered FROM `bigquery-public-data.covid19_public_forecasts.county_14d` WHERE prediction_date = '" +
            date +
            "' AND county_fips_code IS NOT NULL ORDER BY county_fips_code"
            ).setUseLegacySql(false).build();

        // Create unique job id and job for call to Forecasts.
        JobId jobIdForecast = JobId.of(UUID.randomUUID().toString());
        Job queryJobForecast = bigquery.create(JobInfo.newBuilder(queryConfigForecast).setJobId(jobIdForecast).build());

        System.out.println("Here1");
        
        // Try to query forecast.
        try {
            queryJobForecast = queryJobForecast.waitFor();

            // Check for and throw errors.
            if (queryJobForecast == null) {
                throw new RuntimeException("Job no longer exists.");
            } else if (queryJobForecast.getStatus().getError() != null) {
                throw new RuntimeException(queryJobForecast.getStatus().getError().toString());
            }

            System.out.println("Here2");

            // Get most recent recovered values, there should only be one result.
            int index = 0;
            for (FieldValueList row : queryJobForecast.getQueryResults().iterateAll()) {
                if (Integer.parseInt(populations.get(index)[0]) == Integer.parseInt(row.get("county_fips_code").getStringValue())) {
                    countyPercentiles.add(new CountyPercentile(row.get("county_fips_code").getStringValue(),
                        (row.get("cumulative_confirmed").getDoubleValue() 
                        - row.get("cumulative_deaths").getDoubleValue()
                        - row.get("recovered").getDoubleValue())
                        / Double.parseDouble(populations.get(index)[1])
                    ));
                }
                
                index += 1;
            }
        } 
        
        // Set failedQuery to true and log error if query fails.
        catch (Exception e) {
            e.printStackTrace();
            System.out.println("Error: Big Query Failure!");
            return;
        }

        // County , log failure and return 0.
        System.out.println(Integer.toString(countyPercentiles.size()) + " elements in countyPercentiles");
        Collections.sort(countyPercentiles);

        try {
            FileWriter csvWriter = new FileWriter("WEB-INF/classes/county_percentile.csv");
            csvWriter.append("county_fips_code");
            csvWriter.append(",");
            csvWriter.append("percentile_rank");
            csvWriter.append("\n");

            double latestValue = 0.0;
            double latestPercentile = 1.0;

            int index = 0;
            while(index < countyPercentiles.size()) {

                if (latestValue != countyPercentiles.get(index).getActiveCasesPerCapita()) {
                    latestPercentile = 1.0 - (Double.valueOf(index) / countyPercentiles.size());
                    latestValue = countyPercentiles.get(index).getActiveCasesPerCapita();
                }

                csvWriter.append(countyPercentiles.get(index).getCountyFips() + "," + Double.toString(latestPercentile));
                csvWriter.append("\n");

                index += 1;
            }

            csvWriter.flush();
            csvWriter.close();
        }
        
        // Set failedQuery to true and log error if query fails.
        catch (Exception e) {
            e.printStackTrace();
            System.out.println("Failed to write csv file!");
            return;
        }
    }
}