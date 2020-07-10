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

/* For Data*/
public final class DataPoint {

    private double value = 0.0;
    private Date date;

    public DataPoint(double value, Date date) {
        this.value = value;
        this.date = date;
    }

    public double getValue() {
        return value;
    }

    public Date getDate() {
        return date;
    }
}