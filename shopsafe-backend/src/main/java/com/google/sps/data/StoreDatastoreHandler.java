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
    public static Entity createRatingsEntity(Map<String, String[]> ratingsMap) {
        Entity ratingEntity = new Entity("Rating");
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

        //Create new Store and Rating Entities
        Entity storeEntity = new Entity("Store", id);
        Entity ratingEntity = createRatingsEntity(ratingsMap);
        datastore.put(ratingEntity);

        //Embed Rating into store by storing an array of Rating Ids in 
        //Store entry
        Long ratingEntityIdName = ratingEntity.getKey().getId();
        ArrayList<Long> storeRatingIds = new ArrayList();
        storeRatingIds.add(ratingEntityIdName);
        storeEntity.setProperty("ratings", storeRatingIds);

        //Place store entity into datastore
        datastore.put(storeEntity);
    }

    /*
     * Updates existing store with new rating
     */
    private void updateStore(Entity storeEntity, Map<String, String[]> ratingsMap) {
        //Create new Rating Entity
        Entity ratingEntity = createRatingsEntity(ratingsMap);
        datastore.put(ratingEntity);
        
        //Retreive exisiting list of Rating Ids already withing store
        //and add new rating
        @SuppressWarnings("unchecked")
        ArrayList<Long> previousRatingIds = (ArrayList<Long>) storeEntity
            .getProperty("ratings");
        Long ratingEntityIdName = ratingEntity.getKey().getId();
        previousRatingIds.add(ratingEntityIdName);
        storeEntity.setProperty("ratings", previousRatingIds);

        datastore.put(storeEntity);
    }

    /*
     * Returns the Rating Entitys embedded in the Store entry in datastore
     */
    public ArrayList<Entity> getRatings() {
        return this.compileRatings(this.getRatingIds());
    }

    /*
     * The ratings associated with a store are stored in datastore as an array of longs,
     * this function retrieves that array. On error returns an empty array.
     */
    private ArrayList<Long> getRatingIds() {
        try {
            Entity storeEntity = datastore.get(this.key);
            @SuppressWarnings("unchecked")
            ArrayList<Long> previousRatingIds = (ArrayList<Long>) storeEntity
                .getProperty("ratings");
            return previousRatingIds;
        } catch(Exception EntityNotFoundException) {
            System.out.println("DataStore: id <" + this.key.getId() + "> not found!");
            return new ArrayList();
        }
    }

    /*
     * Given a list of ids referencing Rating entries in datastore, this function retrieves
     * the Rating entities associated with the ids, on error returns an empty array.
     */
    private ArrayList<Entity> compileRatings(ArrayList<Long> ratingIds) {
        try {
            ArrayList<Entity> entityList = new ArrayList();
            for (Long id: ratingIds) {
                Key ratingKey = new Builder("Rating", id).getKey();
                Entity ratingEntity = datastore.get(ratingKey);
                entityList.add(ratingEntity);
            }
            return entityList;
        } catch(Exception EntityNotFoundException) {
            System.out.println("Rating entity not found: " + ratingIds);
            return new ArrayList();
        }
    }

    /* Tools For Debugging and Development */

    /*
     * Deletes store and its ratings from Datastore
     */
    public void deleteStoreAndRatings() {
        ArrayList<Long> ratingIds = this.getRatingIds();
        for (long id: ratingIds) {
            Key ratingKey =  new Builder("Rating", id).getKey();
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

