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

package com.google.sps;

import com.google.cloud.bigquery.BigQuery;
import com.google.cloud.bigquery.BigQueryOptions;
import com.google.cloud.bigquery.FieldValueList;
import com.google.cloud.bigquery.Job;
import com.google.cloud.bigquery.JobId;
import com.google.cloud.bigquery.JobInfo;
import com.google.cloud.bigquery.QueryJobConfiguration;
import com.google.cloud.bigquery.TableResult;
import java.util.UUID;
import java.lang.Long;


/*
 *Class for using BigQuery to query New York Times dataset
 */
public class QueryNYT {

    private long cases;
    private long deaths;
    private boolean failedQuery;

    private QueryNYT(long cases, long deaths, boolean failedQuery) {
        this.cases = cases;
        this.deaths = deaths;
        this.failedQuery = failedQuery;
    }

    public long getCases() {
        return cases;
    }

    public long getDeaths() {
        return deaths;
    }

    public boolean failedQuery() {
        return failedQuery;
    }

    @Override
    public boolean equals(Object o) {
        // If the object is compared with itself then return true   
        if (o == this) { 
            return true; 
        } 
  
        /* Check if o is an instance of QueryNYT or not 
          "null instanceof [type]" also returns false */
        if (!(o instanceof QueryNYT)) { 
            return false; 
        } 
          
        // typecast o to QueryNYT so that we can compare data members  
        QueryNYT other = (QueryNYT) o; 

        return (this.cases == other.cases &&
            this.deaths == other.deaths &&
            this.failedQuery == other.failedQuery
            );
    }
    

    /*
     * On success, returns number of reported covid-19 cases for county. On error,
     * returns 0.
     */
    public static QueryNYT exampleQuery(String state, String county) {

        //BigQuery Service
        BigQuery bigquery = BigQueryOptions
              .newBuilder().setProjectId("shopsafe-step-2020").build()
                .getService();

        //Prepare SQL query for BigQuery
        QueryJobConfiguration queryConfig = QueryJobConfiguration.newBuilder(
                "SELECT confirmed_cases, deaths FROM `bigquery-public-data.covid19_nyt.us_counties` " +
                        "WHERE lower(state_name) = \"" + state.toLowerCase() + "\"" +
                        "AND lower(county) = \"" + county.toLowerCase() + "\"" +
                        "ORDER BY date DESC"
        ).setUseLegacySql(false).build();

        //Set unique Job ID
        JobId jobId = JobId.of(UUID.randomUUID().toString());
        Job queryJob = bigquery.create(JobInfo.newBuilder(queryConfig).setJobId(jobId).build());

        try {
            queryJob = queryJob.waitFor();

            // Check for errors
            if (queryJob == null) {
                throw new RuntimeException("Job no longer exists");
            } else if (queryJob.getStatus().getError() != null) {
                // You can also look at queryJob.getStatus().getExecutionErrors() for all
                // errors, not just the latest one.
                throw new RuntimeException(queryJob.getStatus().getError().toString());
            }

            TableResult result = queryJob.getQueryResults();

            for (FieldValueList row : result.iterateAll()) {
                long confirmedCases = row.get("confirmed_cases").getLongValue();
                long deaths = row.get("deaths").getLongValue();
                
                //return latest date
                return new QueryNYT(confirmedCases, deaths, false);
            }
            //Error, did not find any query results
            return new QueryNYT(0, 0, true);
        } catch (InterruptedException exception) {
            System.out.println("Error: Big Query Failure!");
            return new QueryNYT(0, 0, true);
        }
    }
}