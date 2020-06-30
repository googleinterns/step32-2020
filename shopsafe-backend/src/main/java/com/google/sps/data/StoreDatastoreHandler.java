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

import java.io.IOException;
import java.util.ArrayList;
import java.util.Map;

import com.google.appengine.api.datastore.DatastoreService;
import com.google.appengine.api.datastore.DatastoreServiceFactory;
import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.PreparedQuery;
import com.google.appengine.api.datastore.Query;
import com.google.appengine.api.datastore.Query.SortDirection;
import com.google.appengine.api.datastore.FetchOptions;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory.Builder;

/*
 * Class that updates(or creates) Store entries in datastore.
 */
public class StoreDatastoreHandler {
    
    private String id;
    private Key key;
    private DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

    public StoreDatastoreHandler(String id) {
        this.id = id;
        this.key = new Builder("store", id).getKey();
    }

    /*
     * Wrapper that handles cases where store is in datastore or not
     */
    public void placeStore(Map<String, String[]> ratingsMap) {
        try {
            //Found store in datastore
            Entity existingStoreEntity = datastore.get(key);
            this.updateStore(existingStoreEntity, ratingsMap); 
        } catch (Exception EntityNotFoundException) {
            //Store not in datastore, so create entry
            this.newStore(ratingsMap);
        }
    }

    /*
     * Creates Rating Entity, does not put in datastore
     */
    private Entity createRatingsEntity(Map<String, String[]> ratingsMap) {
        Entity ratingEntity = new Entity("rating");
        ratingsMap.forEach((String ratingField, String[] ratingValue) -> {
            
            /* http request getParamMap method formats in array instead of
             * single value.
             */
            ratingEntity.setProperty(ratingField, Double.parseDouble(ratingValue[0]));
        });
        return ratingEntity;
    }

    /*
     * Places new store along with rating
     */
    private void newStore(Map<String, String[]> ratingsMap) {
        
        Entity storeEntity = new Entity("store", id);

        Entity ratingEntity = createRatingsEntity(ratingsMap);

        String ratingEntityIdName = ratingEntity.getKey().getName();
        ArrayList<String> storeRatingIds = new ArrayList();
        storeRatingIds.add(ratingEntityIdName);
        storeEntity.setProperty("ratings", storeRatingIds);
        
        datastore.put(ratingEntity);
        datastore.put(storeEntity);
    }

    /*
     * Updates existing store with new rating
     */
    private void updateStore(Entity storeEntity, Map<String, String[]> ratingsMap) {
        Entity ratingEntity = createRatingsEntity(ratingsMap);
        @SuppressWarnings("unchecked")
            ArrayList<String> previousRatingIds = (ArrayList<String>) storeEntity
                .getProperty("ratings");
            String ratingEntityIdName = ratingEntity.getKey().getName();
            previousRatingIds.add(ratingEntityIdName);
            storeEntity.setProperty("ratings", previousRatingIds);

            datastore.put(ratingEntity);
            datastore.put(storeEntity);
    }

}

