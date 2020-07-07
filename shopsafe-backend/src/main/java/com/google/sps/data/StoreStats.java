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

import com.google.sps.data.Store;
import com.google.sps.data.CheckInStats;

/** Class contains all the information for a store. */
public final class StoreStats {

    // Store stat properties.
    private final String id;
    private final String name;
    private final String address;
    private final Boolean open;
    private final double latitude;
    private final double longitude;
    private final double score;
    private final double busy;
    private final double line;
    private final double hygiene;
    private final double masks;
    private final long checkInCount;

    // Static final weights for calculating score.
    static private final double COUNTY_WEIGHT = 0.5;
    static private final double CHECK_IN_WEIGHT = 0.5;

    public StoreStats(Store store, double countyScore, CheckInStats stats) {
        this.id = store.getId();
        this.name = store.getName();
        this.address = store.getAddress();
        this.open = store.getOpen();
        this.latitude = store.getLatitude();
        this.longitude = store.getLongitude();
        this.score = countyScore * COUNTY_WEIGHT + stats.getCheckInScore() * CHECK_IN_WEIGHT;
        this.busy = stats.getBusy();
        this.line = stats.getLine();
        this.hygiene = stats.getHygiene();
        this.masks = stats.getMasks();
        this.checkInCount = stats.getCheckInCount();
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

    public double getScore() {
        return score;
    }

    public double getBusy() {
        return busy;
    }

    public double getLine() {
        return line;
    }

    public double getHygiene() {
        return hygiene;
    }

    public double getMasks() {
        return masks;
    }

    public long getCheckInCount() {
        return checkInCount;
    }
}