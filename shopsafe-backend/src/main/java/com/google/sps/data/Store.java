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
    private final double latitude;
    private final double longitude;
    private final double score;
    private final double busy;
    private final double line;
    private final double hygiene;
    private final double masks;
    private final int reviewCount;

    public Store(StoreNoScore storeNoScore, double score, StoreStats stats, int reviewCount) {
        this.id = storeNoScore.getId();
        this.name = storeNoScore.getName();
        this.address = storeNoScore.getAddress();
        this.open = storeNoScore.getOpen();
        this.latitude = storeNoScore.getLocation().getLatitude();
        this.longitude = storeNoScore.getLocation().getLongitude();
        this.score = score;
        this.busy = stats.getBusy();
        this.line = stats.getLine();
        this.hygiene = stats.getHygiene();
        this.masks = stats.getMasks();
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

    public double getScore() {
        return score;
    }

    public int getReviewCount() {
        return reviewCount;
    }
}