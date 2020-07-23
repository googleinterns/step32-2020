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

import com.google.sps.data.LatLng;

/** Class contains all the information for a store without the scores. */
public class Store {

    protected String id;
    protected String name;
    protected String address;
    protected Boolean open;
    protected double latitude;
    protected double longitude;
    protected double distance;

    public Store(String id, String name, String address, Boolean open, LatLng location) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.open = open;
        this.latitude = location.getLatitude();
        this.longitude = location.getLongitude();
        this.distance = 0; // default value
    }

    /**
     * Overloaded constructor to include userLocation to calculate distance between user and store
     */
    public Store(String id, String name, String address, Boolean open, LatLng location, LatLng userLocation) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.open = open;
        this.latitude = location.getLatitude();
        this.longitude = location.getLongitude();
        this.distance = getDistance(userLocation);
    }

    public String getName() {
        return name;
    }

    public String getAddress() {
        return address;
    }

    public String getId() {
        return id;
    }

    public Boolean getOpen() {
        return open;
    }

    public double getLatitude() {
        return latitude;
    }

    public double getLongitude() {
        return longitude;
    }

    public double getDistance() {
        return distance;
    }
    
    /**
     * Returns the distance in miles from the user to the store location.
     * @param userLocation LatLng of user
     * @param storeLocation LatLng of store to calculate distance from user
     * @return distance between the two LatLngs
     */
    private double getDistance(LatLng userLocation) {
      double earthRadius = 3956; // Radius of earth in miles.
      double distance = 0;

      // Convert latLngs to radians.
      double userLon = Math.toRadians(userLocation.getLongitude());
      double userLat = Math.toRadians(userLocation.getLatitude());
      double storeLon = Math.toRadians(getLongitude());
      double storeLat = Math.toRadians(getLatitude());

      double deltaLon = userLon - storeLon;
      double deltaLat = userLat - storeLat;

      // Calculating the distance using the Haversine formula
      double a = Math.pow(Math.sin(deltaLat / 2), 2) 
               + Math.cos(userLat) 
               * Math.cos(storeLat) 
               * Math.pow(Math.sin(deltaLon / 2), 2);

      double c = 2 * Math.asin(Math.sqrt(a));

      distance = c * earthRadius;
      return distance;

      // TODO: add error handling
    }
}