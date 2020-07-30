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

import com.google.gson.Gson;
import com.google.sps.data.CheckInStats;
import com.google.sps.data.County;
import com.google.sps.data.CountyStats;
import com.google.sps.data.LatLng;
import com.google.sps.data.Store;
import com.google.sps.data.StoreResult;
import com.google.sps.data.StoreStats;
import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.URL;
import java.util.*;
import java.util.Scanner;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.json.JSONObject;

/** Servlet that returns nearby store information. */
@WebServlet("/store")
public class StoreServlet extends HttpServlet {

  public static final String PLACE_URL =
      "https://maps.googleapis.com/maps/api/place/details/json?place_id=";
  public static final String PLACE_FIELDS = "&fields=name,vicinity,opening_hours,geometry,rating";
  private static final String PLACE_KEY_LOCATION = "WEB-INF/classes/key.txt";

  private String placeKey;
  private Store store;

  /** For a get request, return all nearby stores. */
  @Override
  public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

    // Gets API key for places from shopsafe-backend.
    try {
      File myObj = new File(PLACE_KEY_LOCATION);
      Scanner myReader = new Scanner(myObj);
      placeKey = "&key=" + myReader.nextLine();
      myReader.close();
    }

    // If error, print error, set status to bad reuqest and send error response.
    catch (FileNotFoundException e) {
      e.printStackTrace();
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      response.setContentType("text/html;");
      response.getWriter().println("Failed to get api key.");
      return;
    }

    // Get id from request.
    String id = request.getParameter("id");

    // If the id is null, set status to bad reuqest and send error response.
    if (id == null) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      response.setContentType("text/html;");
      response.getWriter().println("Failed to get the id parameter from the request.");
      return;
    }

    // Get store based on id in form of the Store class.
    if (!getStoreFromId(id)) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      response.setContentType("text/html;");
      response.getWriter().println("Failed to get store information for the id: " + id);
      return;
    }

    // Get county based on location of the store.
    County county = County.GetCounty(store);

    // If the county was not found, set status to bad reuqest and send error response.
    if (county.getCountyName() == "") {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      response.setContentType("text/html;");
      response.getWriter().println("Failed to get county information for store id: " + id);
      return;
    }

    // Get Covid stats based on county.
    CountyStats countyStats = new CountyStats(county);

    // If the county stats were not obtained, value set to 0, return error message.
    if (countyStats.getPopulation() == 0) {
      response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
      response.setContentType("text/html;");
      response
          .getWriter()
          .println("Failed to get county stats for FIPS: " + county.getCountyFips());
      return;
    }

    // Get reviews for a store.
    CheckInStats checkInStats = new CheckInStats(id);

    // Add score and review stats to the store.
    StoreStats storeStats = new StoreStats(store, countyStats.getCountyScore(), checkInStats);

    // Return store with stats and the county information.
    Gson gson = new Gson();
    response.setContentType("application/json;");
    response
        .getWriter()
        .println(
            gson.toJson(
                new StoreResult(storeStats, countyStats, checkInStats.compileRatingDays())));
  }

  /** Get store based on the id, return true for success. */
  public boolean getStoreFromId(String id) {

    // Try to get store based on id from Places API.
    try {

      // Read response of call to FCC API given lat and lng.
      URL url = new URL(PLACE_URL + id + PLACE_FIELDS + placeKey);
      BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));

      // Store response in json, by reading each line.
      StringBuilder json = new StringBuilder();
      String line;
      while ((line = reader.readLine()) != null) {
        json.append(line);
      }
      reader.close();

      // Convert json to json object with just the one store.
      JSONObject result = new JSONObject(new String(json)).getJSONObject("result");
      JSONObject storeLocation = result.getJSONObject("geometry").getJSONObject("location");

      store =
          new Store(
              id,
              result.getString("name"),
              result.getString("vicinity"),
              (result.has("opening_hours"))
                  ? result.getJSONObject("opening_hours").getBoolean("open_now")
                  : null,
              new LatLng(storeLocation.getDouble("lat"), storeLocation.getDouble("lng")),
              result.has("rating") ? result.getDouble("rating") : 0);
      return true;
    }

    // If error, print error, log error, and return false.
    catch (Exception e) {
      e.printStackTrace();
      System.out.println("Error in getting store from Places API.");
      return false;
    }
  }
}
