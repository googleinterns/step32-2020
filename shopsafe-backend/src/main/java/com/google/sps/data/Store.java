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
import com.google.sps.data.StoreNoScore;
import com.google.sps.data.StoreStats;

/** Class contains all the information for a store. */
public final class Store {

    private final String id;
    private final String name;
    private final String address;
    private final Boolean open;
    private final LatLng location;
    private final double score;
    private final StoreStats stats;
    private final int reviewCount;

    public Store(StoreNoScore storeNoScore, double score, StoreStats stats, int reviewCount) {
        this.id = storeNoScore.getId();
        this.name = storeNoScore.getName();
        this.address = storeNoScore.getAddress();
        this.open = storeNoScore.getOpen();
        this.location = storeNoScore.getLocation();
        this.score = score;
        this.stats = stats;
        this.reviewCount = reviewCount;
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

    public LatLng getLocation() {
        return location;
    }

    public double getScore() {
        return score;
    }

    public StoreStats getStats(){
        return stats;
    }

    public int getReviewCount() {
        return reviewCount;
    }
}