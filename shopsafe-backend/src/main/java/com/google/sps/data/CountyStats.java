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

import com.google.sps.QueryCovidStats;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Class contains the name, state, population and covid cases and deaths of a county. */
public final class CountyStats {

    private final String countyName;
    private final String stateName;
    private final long cases;
    private final long deaths;
    private final long activeCases;
    private final long population;

    public CountyStats(County county) {
        this.countyName = county.getCountyName();
        this.stateName = county.getStateName();

        // Make query for active covid cases and deaths.
        QueryCovidStats queryResults = QueryCovidStats.getCovidStatsFips(county.getCountyFips());
        this.cases = queryResults.getCases();
        this.deaths = queryResults.getDeaths();
        this.activeCases = queryResults.getActiveCases();

        // Find the population of county using Census API
        this.population = getPopulation(county);
    }

    public String getCountyName() {
        return countyName;
    }

    public String getStateName() {
        return stateName;
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
    
    public long getPopulation() {
        return population;
    }

    public double getCountyScore() {
        long populationUS = 331002651;
        long casesUS = 1996000;
        double percentageUS = (double) casesUS / (double) populationUS;
        double percentageCounty = (double) activeCases / (double) population;

        // TODO: Create a better scoring system for counties.
        return (percentageUS - percentageCounty) * 5 + 5;
    }

    /*
     * Given a county, use Census API to find population
     */
    private static long getPopulation (County county) {
        try {
            String results = "";
            String line;

            // Read response of census api call
            URL url = new URL(getAPIUrl(county.getCountyFips()));
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            while ((line = reader.readLine()) != null) {
                    results += line;
            }
            reader.close();

            //Convert to Json and parse for population
            JSONArray jsonResult = new JSONArray(results).getJSONArray(1); //skip schema on first entry
            return jsonResult.getLong(0);

        } catch (Exception e) {
            //Population not found
            System.out.println(
                "Unable to get population for " + county.getCountyName() + ", " + county.getStateName());
            return 0;
        }
    }

    /*
     * Helper Function to format URL call for population API
     */
    private static String getAPIUrl(String stateCountyFips) {
        //Split state and County Fips
        String stateFips = stateCountyFips.substring(0,2);
        String countyFips = stateCountyFips.substring(2, 5);

        String url = "https://api.census.gov/data/2019/pep/population?get=POP&for=COUNTY:"
            + countyFips + "&in=STATE:" + stateFips + "&key=ccca49e2b71e9f3e52453d70bf499baa821b9f77";
        return url;
    }
}