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

import com.google.sps.data.StoreDatastoreHandler;
import com.google.appengine.api.datastore.Entity;

/** Class contains all the averaged check in stats for a store. */
public final class CheckInStats {

    private double busy = 0.0;
    private double line = 0.0;
    private double hygiene = 0.0;
    private double masks = 0.0;
    private long checkInCount = 0;

    public CheckInStats(String storeId) {
    
        //Get datastore ratings of a store based on id.
        StoreDatastoreHandler dataStoreService =  new StoreDatastoreHandler(storeId);
        ArrayList<Entity> ratingEntities = dataStoreService.getRatings();
        checkInCount = ratingEntities.size();

        // Sum the values for each category.
        for (Entity ratingEntity: ratingEntities) {
            busy += (double) ratingEntity.getProperty("busy");
            line += (double) ratingEntity.getProperty("line");
            hygiene += (double) ratingEntity.getProperty("hygiene");
            masks += (double) ratingEntity.getProperty("masks");
        }
        
        // Average scores if there is available data.
        if (checkInCount != 0) {
            busy = busy / (1.0 * checkInCount);
            line = line / (1.0 * checkInCount);
            hygiene = hygiene / (1.0 * checkInCount);
            masks = masks / (1.0 * checkInCount);
        }

        // Todo: Create a default score
        else {

        }
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