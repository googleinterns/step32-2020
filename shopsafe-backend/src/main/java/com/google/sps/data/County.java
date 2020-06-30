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

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Class contains the name, state, and fips of a county. */
public final class County {

    // FCC api url for county information
    public static final String FCC_BASE_URL = "https://geo.fcc.gov/api/census/area?lat=";
    public static final String FCC_END_URL = "&format=json";

    // County properties
    private final String countyName;
    private final String stateName;
    private final String countyFips;

    public County(String countyName, String stateName, String countyFips) {
        this.countyName = countyName;
        this.stateName = stateName;
        this.countyFips = countyFips;
    }

    public String getCountyName() {
        return countyName;
    }

    public String getStateName() {
        return stateName;
    }

    public String getCountyFips() {
        return countyFips;
    }

    /**
     * Returns the county name based on a LatLng, or empty county if error.
     */
    public static County GetCounty(LatLng location) {
        try {

            // Read response of call to FCC API given lat and lng.
            URL fccUrl = new URL(FCC_BASE_URL + location.getLatitude() + "&lon=" + location.getLongitude() + FCC_END_URL);
            BufferedReader reader = new BufferedReader(new InputStreamReader(fccUrl.openStream()));
            
            // Store response in json, by reading each line.
            StringBuffer json = new StringBuffer();
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
            reader.close();

            // Convert json to json object with just the first result.
            JSONObject result = new JSONObject(new String(json)).getJSONArray("results").getJSONObject(0);

            // Return county using strings from the results.
            return new County(result.getString("county_name"), result.getString("state_name"), result.getString("county_fips"));
        } 

        // If error, print error, and return empty county object
        catch (Exception e) {
            e.printStackTrace();
            return new County("", "", "");
        }
    }
}