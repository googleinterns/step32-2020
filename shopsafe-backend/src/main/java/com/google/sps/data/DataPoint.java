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
public final class DataPoint {

    // Check in stat properties.
    private double rating = 0.0;
    private Date date;

    public DataPoint(double rating, Date date) {
        this.rating = rating;
        this.date = date;
    }

    public double getRating() {
        return rating;
    }

    public Date getDate() {
        return date;
    }
}