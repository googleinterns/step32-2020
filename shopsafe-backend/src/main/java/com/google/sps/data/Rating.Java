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

import java.util.ArrayList;
import java.util.Date;

import com.google.sps.data.StoreDatastoreHandler;
import com.google.appengine.api.datastore.Entity;

/** Class wrapper for holding Rating*/
public final class Rating {

    // Check in stat properties.
    private double busy = 0.0;
    private double line = 0.0;
    private double hygiene = 0.0;
    private double masks = 0.0;
    private Date dateCreated;

    public Rating(double busy, double line, double hygiene, double masks, Date dateCreated) {
        this.busy = busy;
        this.line = line;
        this.hygiene = hygiene;
        this.masks = masks;
        this.dateCreated = this.dateCreated;
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

    // static public Rating extractDsRating (Entity ratingEntity) {

    // }
}