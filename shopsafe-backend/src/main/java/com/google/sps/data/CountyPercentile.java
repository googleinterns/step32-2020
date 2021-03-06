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
import com.opencsv.CSVReader;
import java.io.FileReader;
import java.io.FileWriter;
import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

/** Class handles updating the couny percentiles. */
public class CountyPercentile implements Comparable<CountyPercentile> {

  // Constants used for finding length and reading and writing files.
  private static final int COUNTY_COUNT = 3142;
  private static final String PERCENTILE_LOCATION = "WEB-INF/classes/county_percentile_updated.csv";
  private static final String POPULATION_LOCATION = "WEB-INF/classes/county_population.csv";

  // Static date used to check if county percentile needs to be updated.
  private static String date = LocalDate.of(2020, 7, 22).toString();

  // CountyPercentile properties
  private String countyFips;
  private double activeCasesPerCapita;

  /** Constructor for county percentile class. */
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

  /** Special comparison for county percentile. */
  @Override
  public int compareTo(CountyPercentile countyPerentile) {
    if (getActiveCasesPerCapita() == null || countyPerentile.getActiveCasesPerCapita() == null) {
      return 0;
    }
    return getActiveCasesPerCapita().compareTo(countyPerentile.getActiveCasesPerCapita());
  }

  /** Update the county percentile csv file. */
  public static void updatePercentileFile() {

    // If the date is currently correct return it, otherwise update to today.
    if (date.equals(LocalDate.now().toString())) {
      return;
    }
    CountyPercentile.date = LocalDate.now().toString();
    System.out.println("Updating County Percentile csv file to: " + date);

    // Get the population of all counties.
    List<String[]> populations = readPopulationCsv();

    // If not all county populations are read, log error and return.
    if (populations.size() < COUNTY_COUNT) {
      System.out.println("Failed to read all populations, the previous stats are being used.");
      return;
    }

    // Get all the active cases per capita, value used for percentiles.
    List<CountyPercentile> countyPercentiles = getCountyPercentiles(populations);

    // If there are no counties to be updated from bigquery, log error and return.
    if (countyPercentiles.size() == 0) {
      System.out.println(
          "Failed to update any county percentiles, the previous stats are being used.");
      return;
    }

    // Sort countyPercentile using special comparison.
    Collections.sort(countyPercentiles);

    // Rewrite the percentile csv file.
    writePercentileCsv(countyPercentiles);
  }

  /** Read the county population csv file. */
  public static List<String[]> readPopulationCsv() {

    // Add all the populations with fips code from the population file.
    List<String[]> populations = new ArrayList<String[]>();
    try {
      CSVReader reader = new CSVReader(new FileReader(POPULATION_LOCATION));
      String[] nextLine = reader.readNext();
      while ((nextLine = reader.readNext()) != null) {
        if (Integer.parseInt(nextLine[3]) % 1000 > 0) {
          String[] array = {nextLine[3], nextLine[2]};
          populations.add(array);
        }
      }
    } catch (Exception e) {

      // If there is an error, report it and print error.
      e.printStackTrace();
      System.out.println("An error occured while reading the county populations.");
    }

    // Return the populations.
    return populations;
  }

  /** Get the cases per capita for each county, which will be used for percentiles. */
  public static List<CountyPercentile> getCountyPercentiles(List<String[]> populations) {

    // Create list of CountyPercentiles to add to.
    List<CountyPercentile> countyPercentiles = new ArrayList<CountyPercentile>();

    // Set up BigQuery service.
    BigQuery bigquery =
        BigQueryOptions.newBuilder().setProjectId("shopsafe-step-2020").build().getService();

    // Prepare SQL query for getting projected recovered cases Forecasts.
    QueryJobConfiguration queryConfigForecast =
        QueryJobConfiguration.newBuilder(
                "SELECT county_fips_code, cumulative_confirmed, cumulative_deaths, recovered "
                    + "FROM `bigquery-public-data.covid19_public_forecasts.county_14d` "
                    + "WHERE prediction_date = '"
                    + date.toString()
                    + "' AND county_fips_code IS NOT NULL ORDER BY county_fips_code")
            .setUseLegacySql(false)
            .build();

    // Create unique job id and job for the call to Forecasts.
    JobId jobIdForecast = JobId.of(UUID.randomUUID().toString());
    Job queryJobForecast =
        bigquery.create(JobInfo.newBuilder(queryConfigForecast).setJobId(jobIdForecast).build());

    // Try to query forecast.
    try {
      queryJobForecast = queryJobForecast.waitFor();

      // Check for and throw errors.
      if (queryJobForecast == null) {
        throw new RuntimeException("Job no longer exists.");
      } else if (queryJobForecast.getStatus().getError() != null) {
        throw new RuntimeException(queryJobForecast.getStatus().getError().toString());
      }

      // Add county percentile for each county in the query results and populations.
      int index = 0;
      for (FieldValueList row : queryJobForecast.getQueryResults().iterateAll()) {
        while (Integer.parseInt(populations.get(index)[0])
            != Integer.parseInt(row.get("county_fips_code").getStringValue())) {
          index += 1;
        }
        countyPercentiles.add(
            new CountyPercentile(
                row.get("county_fips_code").getStringValue(),
                (row.get("cumulative_confirmed").getDoubleValue()
                        - row.get("cumulative_deaths").getDoubleValue()
                        - row.get("recovered").getDoubleValue())
                    / Double.parseDouble(populations.get(index)[1])));
        index += 1;
      }

      // Return the county percentiles.
      return countyPercentiles;
    } catch (Exception e) {

      // If there is an error, report it, print error, and return an empty list.
      e.printStackTrace();
      System.out.println("An error occured while getting projections from BigQuery.");
      return new ArrayList<CountyPercentile>();
    }
  }

  /** Rewrite the percentile csv file using newer statistics. */
  public static void writePercentileCsv(List<CountyPercentile> countyPercentiles) {

    // Try to rewrite the county percentile file.
    try {

      FileWriter csvWriter = new FileWriter(PERCENTILE_LOCATION);
      csvWriter.append("county_fips_code");
      csvWriter.append(",");
      csvWriter.append("percentile_rank");
      csvWriter.append("\n");

      // Loop through all county percentiles, stepping down for each new value.
      double latestValue = 0.0;
      double latestPercentile = 1.0;
      int index = 0;
      while (index < countyPercentiles.size()) {

        // Check if there is a need to update the latest value and percentile.
        if (latestValue != countyPercentiles.get(index).getActiveCasesPerCapita()) {
          latestPercentile = 1.0 - (Double.valueOf(index) / countyPercentiles.size());
          latestValue = countyPercentiles.get(index).getActiveCasesPerCapita();
        }

        // Write the new percentile value for each fips.
        csvWriter.append(
            countyPercentiles.get(index).getCountyFips() + "," + Double.toString(latestPercentile));
        csvWriter.append("\n");

        index += 1;
      }

      // Close the writer and log success.
      csvWriter.flush();
      csvWriter.close();
      System.out.println("Updated: " + PERCENTILE_LOCATION);
    } catch (Exception e) {

      // If there is an error, report it and print error.
      e.printStackTrace();
      System.out.println("Failed to update: " + PERCENTILE_LOCATION);
    }
  }
}
