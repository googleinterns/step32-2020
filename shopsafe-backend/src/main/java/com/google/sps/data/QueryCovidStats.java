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


/*
 * Similar to Query CovidStats but keep list of reported cases over 7
 * day period
 */
public class QueryCovidStats {
    
    private long cases;
    private long deaths;
    private long activeCases;
    private boolean failedQuery;
    private ArrayList<DataPoint> covidData; 

    private QueryCovidStats(long cases, long deaths, long activeCases,
        boolean failedQuery, ArrayList<DataPoint> covidData) {
        this.cases = cases;
        this.deaths = deaths;
        this.activeCases = activeCases;
        this.failedQuery = failedQuery;
        this.covidData = covidData;
    }

    public long getCases() {
        return cases;
    }

    public long getDeaths() {
        return deaths;
    }

    public long getActiveCases() {
        return activeCases;
    }

    public boolean failedQuery() {
        return failedQuery;
    }

    public ArrayList<DataPoint> getCovidData () {
        return covidData; 
    }

    @Override
    public boolean equals(Object o) {
        // If the object is compared with itself then return true   
        if (o == this) { 
            return true; 
        } 
  
        /* Check if o is an instance of QueryUSA or not 
          "null instanceof [type]" also returns false */
        if (!(o instanceof QueryCovidStats)) { 
            return false; 
        } 
          
        // Typecast o to QueryUSA so that we can compare data members  
        QueryCovidStats other = (QueryCovidStats) o; 

        return (this.cases == other.cases &&
            this.deaths == other.deaths &&
            this.activeCases == other.activeCases &&
            this.failedQuery == other.failedQuery
            );
    }
    
    /*
     * Return instance of QueryOverTime if possible, otherwise, return failure.
     */

    public static QueryCovidStats getCovidStatsFips(String fips) {

        // Set up BigQuery service.
        BigQuery bigquery = BigQueryOptions
            .newBuilder().setProjectId("shopsafe-step-2020").build().getService();

        // Prepare SQL query for getting cases and deaths from C.
        QueryJobConfiguration queryConfigUSA = QueryJobConfiguration.newBuilder(
            "SELECT confirmed_cases, deaths, date FROM `bigquery-public-data.covid19_usafacts.summary` WHERE county_fips_code = '" +
            fips +
            "' ORDER BY date DESC LIMIT 7"
            ).setUseLegacySql(false).build();

        // Create unique job id and job for call to USA.
        JobId jobIdUSA = JobId.of(UUID.randomUUID().toString());
        Job queryJobUSA = bigquery.create(JobInfo.newBuilder(queryConfigUSA).setJobId(jobIdUSA).build());
        
        // Store the stats
        long cases = -1;
        long deaths = -1;
        long recovered = -1;
        String date = "";
        ArrayList<DataPoint> covidData = new ArrayList(); 

        try {

            // Query USA.
            queryJobUSA = queryJobUSA.waitFor();

            // Check for and throw errors.
            if (queryJobUSA == null) {
                throw new RuntimeException("Job no longer exists.");
            } else if (queryJobUSA.getStatus().getError() != null) {
                throw new RuntimeException(queryJobUSA.getStatus().getError().toString());
            }

            // Get most recent case and death values, there should only be one result.
            for (FieldValueList row : queryJobUSA.getQueryResults().iterateAll()) {
                
                //assign most recent case but insert previous data
                if (cases == -1) {
                    cases = row.get("confirmed_cases").getLongValue();
                    deaths = row.get("deaths").getLongValue();
                    date = row.get("date").getStringValue();
                }
                double casesNum = row.get("confirmed_cases").getDoubleValue();
                String dateString = row.get("date").getStringValue();
                Date dateObj = new SimpleDateFormat("yyyy-MM-dd").parse(dateString);
                //Insert at beginning so order increases by date
                DataPoint data = new DataPoint(casesNum, dateObj);
                covidData.add(0, data);
            }
        } 
        
        // Set failedQuery to true and log error if query fails.
        catch (InterruptedException exception) {
            System.out.println("Error: Big Query Failure!");
            return new QueryCovidStats(0, 0, 0, true, covidData);
        }
        catch (ParseException e) {
            System.out.println("Unable to parse date");
            return new QueryCovidStats(0, 0, 0, true, covidData);
        }

        // If there are null values, set failedQuery to true and log error.
        if (cases == -1 || deaths == -1 || date == "") {
            System.out.println("Error: Failed to obtain values for fips: " + fips);
            return new QueryCovidStats(0, 0, 0, true, covidData);
        }
        //bigquery-public-data.covid19_public_forecasts.county_14d
        // Prepare SQL query for getting projected recovered cases Forecasts.
        QueryJobConfiguration queryConfigForecast = QueryJobConfiguration.newBuilder(
            "SELECT recovered FROM `bigquery-public-data.covid19_public_forecasts.county_14d` WHERE county_fips_code = '" +
            fips +
            "' AND prediction_date = '" +
            date +
            "' ORDER BY prediction_date DESC LIMIT 1"
            ).setUseLegacySql(false).build();

        // Create unique job id and job for call to Forecasts.
        JobId jobIdForecast = JobId.of(UUID.randomUUID().toString());
        Job queryJobForecast = bigquery.create(JobInfo.newBuilder(queryConfigForecast).setJobId(jobIdForecast).build());

        // Try to query forecast.
        try {
            queryJobForecast = queryJobForecast.waitFor();

            // Check for and throw errors.
            if (queryJobForecast == null) {
                throw new RuntimeException("Job no longer exists.");
            } else if (queryJobForecast.getStatus().getError() != null) {
                throw new RuntimeException(queryJobForecast.getStatus().getError().toString());
            }

            // Get most recent recovered values, there should only be one result.
            for (FieldValueList row : queryJobForecast.getQueryResults().iterateAll()) {
                recovered = (long) row.get("recovered").getDoubleValue();
            }
        } 
        
        // Set failedQuery to true and log error if query fails.
        catch (InterruptedException exception) {
            System.out.println("Error: Big Query Failure!");
            return new QueryCovidStats(0, 0, 0, true, covidData);
        }

        // If recovered is -1, set failedQuery to true and log error.
        if (recovered == -1) {
            System.out.println("Error: Failed to obtain values");
            return new QueryCovidStats(0, 0, 0, true, covidData);
        }

        // Return Query Covid-19 stats for a county.
        return new QueryCovidStats(cases, deaths, cases - (deaths + recovered), false, covidData);
    }
}