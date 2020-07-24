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

import com.google.sps.data.CheckInStats;
import com.google.sps.data.County;
import com.google.sps.data.CountyPercentile;
import com.google.sps.data.LatLng;
import com.google.sps.data.StoresResult;
import com.google.sps.data.Store;
import com.google.sps.data.StoreStats;

import com.google.gson.Gson;

import com.google.appengine.api.ThreadManager;

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
import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.ConcurrentLinkedQueue;
import java.util.concurrent.ScheduledThreadPoolExecutor;
import java.util.concurrent.ThreadFactory;

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

    public static final String PLACE_URL = "https://maps.googleapis.com/maps/api/place/textsearch/json?query=grocery+store&location=";
    public static final String PLACE_RANK = "&radius=10&rankby=prominence";
    public static final String GEOCODE_URL = "https://maps.googleapis.com/maps/api/geocode/json?address=";
    private String PLACE_KEY;
    private String PLACE_KEY_LOCATION = "WEB-INF/classes/key.txt";

    /**
     * For a get request, return all nearby stores.
     */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {
        
        // Gets API key for places from shopsafe-backend.
        try {
            File myObj = new File(PLACE_KEY_LOCATION);
            Scanner myReader = new Scanner(myObj);
            PLACE_KEY = "&key=" + myReader.nextLine();
            myReader.close();
        }

        // If error, print error, and set status to bad reuqest and send error response.
        catch (FileNotFoundException e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("text/html;");
            response.getWriter().println("Failed to get api key.");
            return;
        }

        // Update CountyPercentile, if necessary.
        CountyPercentile.Update();

        // Get the address input from the param.
        String address = request.getParameter("location"); 
        
        // If the word count is 0, set status to bad reuqest and send error response. 
        if (address == null) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("text/html;");
            response.getWriter().println("Failed to get the location parameter from the request.");
            return;
        }
 
        // If the word count is 0, set status to bad reuqest and send error response. 
        if (address.trim().isEmpty()) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("text/html;");
            response.getWriter().println("Failed to get location, an address must be submitted.");
            return;
        }

        // Get a string array for all the words in the request and get its length.
        String[] addressArray = address.trim().split("\\s+");
        int addressWordCount = addressArray.length;

        // Add all words to the string builder with '+' in between each word.
        StringBuilder addressStringBuilder = new StringBuilder();
        addressStringBuilder.append(addressArray[0]);
        int index = 1;
        while (index < addressWordCount) {
            addressStringBuilder.append("+" + addressArray[index]);
            index += 1;
        }

        // Define the address and initialize the location.
        address = new String(addressStringBuilder);
        LatLng location;

        // Get LatLng location based on address.
        try {

            // Read response of call to FCC API given lat and lng.
            URL url = new URL(GEOCODE_URL + address + PLACE_KEY);
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            
            // Store response in json, by reading each line.
            StringBuilder json = new StringBuilder();
            String line;
            while ((line = reader.readLine()) != null) {
                json.append(line);
            }
            reader.close();

            // Convert json to json object with just the json location, then convert to LatLng.
            JSONObject jsonLocation = new JSONObject(new String(json)).getJSONArray("results").getJSONObject(0).getJSONObject("geometry").getJSONObject("location");
            location = new LatLng(jsonLocation.getDouble("lat"), jsonLocation.getDouble("lng"));
        } 

        // If error, print error, and return.
        catch (Exception e) {
            e.printStackTrace();
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("text/html;");
            response.getWriter().println("Failed to find any stores near the address: " + address);
            return;
        }

        // Get all grocery stores based on LatLng and migrate to the Store class.
        List<Store> stores = getStores(location);

        ConcurrentHashMap<String, Double> countyScores = new ConcurrentHashMap();

        // Add fake score values to the stores.
        ConcurrentLinkedQueue<StoreStats> storeStats = new ConcurrentLinkedQueue();

        // For every store, get reviews and county data and add scores to the store.
        int count = stores.size(); 

        //Create Thread Factory Scoped to request
        ThreadFactory factory = ThreadManager.currentRequestThreadFactory();
        ScheduledThreadPoolExecutor pool = new ScheduledThreadPoolExecutor(count, factory);
        for (int i=0 ; i< count; i++) {
            Store store = stores.get(i);
          
            //Run thread for each store
            pool.execute(()->addStore(store, countyScores, storeStats, location));

        }
        pool.shutdown();
        while (!pool.isTerminated());

        // If there are no valid stores found, set status to bad reuqest and send error response.
        if (storeStats.size() == 0) {
            response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
            response.setContentType("text/html;");
            response.getWriter().println("Failed to find any valid stores near the address: " + address);
            return;
        }

        // Todo: Return stores with scores and county info as json as StoresResult.
        Gson gson = new Gson();
        response.setContentType("application/json;");
        response.getWriter().println(gson.toJson(new StoresResult(new ArrayList(storeStats), location)));
    }



    /*
     * Populate StoreStats object and add to list
     */
    private void addStore(Store store, ConcurrentHashMap<String, Double> countyScores, ConcurrentLinkedQueue<StoreStats> storeStats, LatLng userLocation) {

        // Get county based on location of the store
        County county = County.GetCounty(store);
      
        // If the county was not found, log error message and don't add the store.
        if (county.getCountyName() == "") {
            System.out.println("Failed to get county information for store id: " + store.getId());
            return;
        }

        // If county not in hashmap, add to hashmap and counties list.
        if (!countyScores.containsKey(county.getCountyFips())) {

            // Calculate and store the score for county and add the county stats to the list.
            countyScores.put(county.getCountyFips(), county.getCountyScore());;
        }

        // Todo: Get reviews for a store.

        CheckInStats checkInStats = new CheckInStats(store.getId());

        // Add score and review stats to the store.
        storeStats.add(new StoreStats(
            store,
            countyScores.get(county.getCountyFips()),
            checkInStats,
            userLocation));
    }

    /**
     * Returns a list of Stores without scores.
     */
    public List<Store> getStores(LatLng location) {

        // List of stores that will be returned, it will be empty if there is an exception.
        List<Store> stores = new ArrayList<>();
        try {

            // Read response of call to FCC API given lat and lng.
            URL url = new URL(PLACE_URL + location.getLatitude() + "," + location.getLongitude() + PLACE_RANK + PLACE_KEY);
            BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));
            
            // Store response in json, by reading each line.
            StringBuilder json = new StringBuilder();
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
                
                stores.add(new Store(
                    store.getString("place_id"),
                    store.getString("name"),
                    store.getString("formatted_address"),
                    (store.has("opening_hours") && store.getJSONObject("opening_hours").has("open_now")) ? store.getJSONObject("opening_hours").getBoolean("open_now") : null,
                    new LatLng(storeLocation.getDouble("lat"), storeLocation.getDouble("lng")),
                    store.has("rating") ? store.getDouble("rating"): 0));
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
