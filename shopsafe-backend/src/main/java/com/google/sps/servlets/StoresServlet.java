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

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

/** Servlet that returns nearby store information. */
@WebServlet("/stores")
public class StoresServlet extends HttpServlet {

    public static final String PLACE_URL = "https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=";
    public static final String PLACE_TYPE = "&radius=12000&type=grocery_or_supermarket";
    private String PLACE_KEY;

    /**
     * For a get request, return all nearby stores world.
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Gets API key for places from shopsafe-backend
        try {
            File myObj = new File("../../key.txt");
            Scanner myReader = new Scanner(myObj);
            PLACE_KEY = "&key=" + myReader.nextLine();
            myReader.close();
        }
        
        catch (FileNotFoundException e) {
            e.printStackTrace();
            response.setContentType("text/html;");
            response.getWriter().println("Could not get api key."));
            return;
        }

        // Todo: Get address from response
        
        // Todo: Check address and get LatLon
        LatLng location = new LatLng(40.163249, -76.395991);

        // Get all grocery stores based on LatLon and migrate to StoreNoScore class.
        List<StoreNoScore> storesNoScores = getStores(location);

        // Add fake score values to the stores.
        List<Store> stores = new ArrayList<>();
        int count = storesNoScores.size(); 
        for (int i=0 ; i< count; i++) {
            StoreNoScore storeNoScore = storesNoScores.get(i);
            
            stores.add(new Store(
                storeNoScore,
                9.53,
                new StoreStats(2.5, 2.5, 2.5, 2.5),
                12));
        }

        // Get county based on LatLon - for each store
        County county = County.GetCounty(location);

        // Todo: Get Covid stats based on county - for each store

        // Todo: Get reviews for a store

        // Todo: Get score of each store

        // Todo: Return stores with scores
        Gson gson = new Gson();
        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(new Result(stores)));
    }

    /**
     * Returns a list of Stores without scores.
     */
    public List<StoreNoScore> getStores(LatLng location) {

        // List of stores that will be returned, it will be empty if there is an exception.
        List<StoreNoScore> stores = new ArrayList<>();
        
        try {

            // Read response of call to FCC API given lat and lng.
            URL url = new URL(PLACE_URL + location.getLatitude() + "," + location.getLongitude()+ PLACE_TYPE + PLACE_KEY);
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            
            // Store response in json, by reading each line.
            StringBuffer json = new StringBuffer();
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
            reader.close();

            // Convert json to json object with just the first result.
            JSONArray results = new JSONObject(new String(json)).getJSONArray("results");

            // For every result, add store to the store list.
            int count = results.length(); 
            for(int i=0 ; i< count; i++){  
                
                JSONObject store = results.getJSONObject(i);
                JSONObject storeLocation = store.getJSONObject("geometry").getJSONObject("location");
                
                stores.add(new StoreNoScore(
                    store.getString("id"),
                    store.getString("name"),
                    store.getString("vicinity"),
                    store.getJSONObject("opening_hours").getBoolean("open_now"),
                    new LatLng(storeLocation.getDouble("lat"), storeLocation.getDouble("lng"))));
            }

            // Return county using strings from the results.
            return stores;
        } 

        // If error, print error, and return empty county object
        catch (Exception e) {
            e.printStackTrace();
            return stores;
        }
    }
}
