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
import java.util.List;
import java.util.Map;
import java.util.Date;

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
 * Class that communicates with datastore to get, create, update, and delete 
 * Store and Ratings Entries in datastore. 
 */
public class StoreDatastoreHandler {
    
    private String id;
    private Key key;
    private DatastoreService datastore = DatastoreServiceFactory.getDatastoreService();

    public StoreDatastoreHandler(String id) {
        this.id = id;
        this.key = new Builder("Store", id).getKey();
    }

    /*
     * Wrapper that handles cases where store is in datastore or not
     */
    public void placeStore(Map<String, String[]> ratingsMap) {
        //Create Rating entity, set store as parent
        Entity ratingEntity = createRatingsEntity(ratingsMap);
        datastore.put(ratingEntity);
        try {
            //Found store in datastore
            Entity existingStoreEntity = datastore.get(key);
        } catch (Exception EntityNotFoundException) {
            //Store not in datastore
            Entity storeEntity = new Entity("Store", id);
            datastore.put(storeEntity);
        }
    }

    /*
     * Creates Rating Entity, does not put in datastore
     */
    private Entity createRatingsEntity(Map<String, String[]> ratingsMap) {
        //Set store as parent entity
        Entity ratingEntity = new Entity("Rating", this.key);

        //Insert ratings
        ratingsMap.forEach((String ratingField, String[] ratingValue) -> {
            /* http request getParamMap method formats in array instead of
             * single value.
             */
            ratingEntity.setProperty(ratingField, Double.parseDouble(ratingValue[0]));
        });

        //Add date when created
        Date date = new Date();
        ratingEntity.setProperty("Date", date);
        return ratingEntity;
    }


    /*
     * Returns the children Rating Entities associated with the Store,
     * sorted by date.
     */
    public List<Entity> getRatings() {
        Query query = new Query("Rating", this.key)
            .setAncestor(this.key)
            .addSort("Date", Query.SortDirection.ASCENDING);
        return datastore.prepare(query).asList(FetchOptions.Builder.withDefaults());
    }


    /* Tools For Debugging and Development */

    /*
     * Deletes store and its ratings from Datastore
     */
    public void deleteStoreAndRatings() {
        List<Entity> ratingEntities = this.getRatings();
        for (Entity ratingEntity: ratingEntities) {
            Key ratingKey =  ratingEntity.getKey();
            datastore.delete(ratingKey);
        }
        datastore.delete(this.key);
    }

    /*
     * Deletes all entries in Datastore, 
     */
    public void deleteData() {
        deleteQuery(new Query("Store"));
        deleteQuery(new Query("Rating"));
    }

    /*
     * Deletes all entries in query
     */
    private void deleteQuery(Query query) {
        PreparedQuery queryResults = datastore.prepare(query);
        for (Entity entry: queryResults.asIterable()) {
            datastore.delete(entry.getKey());
        }
    }

}

