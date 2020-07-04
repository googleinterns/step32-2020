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

package com.google.sps.servlets;

import com.google.sps.data.County;
import com.google.sps.data.CountyStats;
import com.google.sps.data.LatLng;
import com.google.sps.data.Result;
import com.google.sps.data.Store;
import com.google.sps.data.StoreNoScore;
import com.google.sps.data.StoreStats;

import com.google.gson.Gson;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException; 
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;
import java.util.*;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Servlet that returns nearby store information. */
@WebServlet("/store")
public class StoreServlet extends HttpServlet {

    public static final String PLACE_URL = "https://maps.googleapis.com/maps/api/place/details/json?place_id=";
    public static final String PLACE_FIELDS = "&fields=name,vicinity,opening_hours,geometry";
    private String PLACE_KEY;

    /**
     * For a get request, return all nearby stores.
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Gets API key for places from shopsafe-backend.
        try {
            File myObj = new File("../../key.txt");
            Scanner myReader = new Scanner(myObj);
            PLACE_KEY = "&key=" + myReader.nextLine();
            myReader.close();
        }
        
        // If error, print error, and return.
        catch (FileNotFoundException e) {
            e.printStackTrace();
            response.setContentType("text/html;");
            response.getWriter().println("Could not get api key.");
            return;
        }

        // Todo: Get address from response
        String id = "ChIJbb7uBJ0ixokRyAM8CKkgxfs";

        // Get store based on id in form of StoreNoScore class.
        StoreNoScore storeNoScore;
        try {

            // Read response of call to FCC API given lat and lng.
            URL url = new URL(PLACE_URL + id + PLACE_FIELDS + PLACE_KEY);
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            
            // Store response in json, by reading each line.
            StringBuilder json = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
            reader.close();

            // Convert json to json object with just the first result.
            JSONObject result = new JSONObject(new String(json)).getJSONObject("result");
            JSONObject storeLocation = result.getJSONObject("geometry").getJSONObject("location");
            
            storeNoScore = new StoreNoScore(
                id,
                result.getString("name"),
                result.getString("vicinity"),
                (result.has("opening_hours")) ? result.getJSONObject("opening_hours").getBoolean("open_now") : null,
                new LatLng(storeLocation.getDouble("lat"), storeLocation.getDouble("lng")));
        }

        // If error, print error, and return empty county object
        catch (Exception e) {
            e.printStackTrace();
            response.setContentType("text/html;");
            response.getWriter().println("Failed to get store information.");
            return;
        }
        
        // Get county based on location of the store
        County county = County.GetCounty(storeNoScore.getLocation());

        // Get Covid stats based on county.
        CountyStats countyStats = new CountyStats(county, 1000, 50, 25000);

        // Get score based on county stats.
        double countyScore = 3.2;

        // Get reviews for a store.
        StoreStats storeStats = new StoreStats(2.5, 2.5, 2.5, 2.5);
        int storeReviewCount = 12;

        // Todo: Get real score of each store.
        double storeScore = countyScore;

        // Add score and review stats to the store.
        Store store = new Store(
            storeNoScore,
            storeScore,
            storeStats,
            storeReviewCount);

        // Return stores with scores and county info as json as result.
        Gson gson = new Gson();
        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(store));
    }
}
