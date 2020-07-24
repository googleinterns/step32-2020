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
    protected double rating;

    public Store(String id, String name, String address, Boolean open, LatLng location, double rating) {
        this.id = id;
        this.name = name;
        this.address = address;
        this.open = open;
        this.latitude = location.getLatitude();
        this.longitude = location.getLongitude();
        this.rating = rating;
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
  
    public double getRating() {
        return rating;
    }
}