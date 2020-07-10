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

package com.google.sps;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import com.google.gson.Gson;



import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import com.google.appengine.tools.development.testing.LocalDatastoreServiceTestConfig;
import com.google.appengine.tools.development.testing.LocalServiceTestHelper;
import org.junit.After;
import org.junit.Before;
import org.junit.Test;


import com.google.sps.data.StoreDatastoreHandler;
import com.google.sps.data.CheckInStats;
import com.google.sps.data.DataPoint;
import com.google.appengine.api.datastore.Entity;


@RunWith(JUnit4.class)
public final class DatastoreTest {

    private final LocalServiceTestHelper helper =
        new LocalServiceTestHelper(new LocalDatastoreServiceTestConfig());

    @Before
    public void setUp() {
    helper.setUp();
    }

    @After
    public void tearDown() {
    helper.tearDown();
    }

    /*
     * Newly created Store with no inserted reviews should return no reviews
     */
    @Test
    public void simpleCase() {
        String sampleplacesID = "sample1";

        //Insert store and Rating into DataStore
        StoreDatastoreHandler store = new StoreDatastoreHandler(sampleplacesID);

        //Retrieve rating through StoreDatastoreHandler Object
        List<Entity> storeRatings = store.getRatings();
        List<Entity> expectedRatings = new ArrayList ();
    
        Assert.assertEquals(expectedRatings, storeRatings);
    }

    /*
     * Newly created Store with review should return review which was inserted
     */
    @Test
    public void addRating() {
        String sampleplacesID = "sample1";
        HashMap<String, String[]> sampleHttpRequestParam = new HashMap();
        sampleHttpRequestParam.put("Rating1", new String[] {"9.0"});

        //Insert store and Rating into DataStore
        StoreDatastoreHandler store = new StoreDatastoreHandler(sampleplacesID);
        store.placeStore(sampleHttpRequestParam);

        //Retrieve rating through StoreDatastoreHandler Object
        List<Entity> storeRatings = store.getRatings();
        Entity insertedRating = storeRatings.get(0);

        Double expectedRating = 9.0;
        Double actualRating = (Double) insertedRating.getProperty("Rating1");
    
        Assert.assertEquals(expectedRating, actualRating);
        store.deleteStoreAndRatings();
    }

    /*
     * Inserting review in previously created Store with review should 
     * return the old and new Review
     */
    @Test
    public void addSecondRating() {
        String sampleplacesID = "sample1";
        HashMap<String, String[]> sampleHttpRequestParam = new HashMap();
        sampleHttpRequestParam.put("Rating1", new String[] {"9.0"});

        //Insert store and Rating into DataStore
        StoreDatastoreHandler store = new StoreDatastoreHandler(sampleplacesID);
        store.placeStore(sampleHttpRequestParam);

        //Place another rating in store following flow of servlet
        StoreDatastoreHandler storeSometimeLater = new StoreDatastoreHandler(sampleplacesID);
        HashMap<String, String[]> sampleHttpRequestParam2 = new HashMap();
        sampleHttpRequestParam2.put("Rating1", new String[] {"5.0"});
        storeSometimeLater.placeStore(sampleHttpRequestParam2);

        //Retrieve second ratings
        List<Entity> storeRatings = storeSometimeLater.getRatings();
        Entity insertedRating2 = storeRatings.get(1);

        Double expectedRating = 5.0;
        Double actualRating = (Double) insertedRating2.getProperty("Rating1");
    
        Assert.assertEquals(expectedRating, actualRating);
        store.deleteStoreAndRatings();
    }

    /*
     * Having created two objects which reference the same datastore entry, and deleting
     * one of those object's datastore reference should delete the others reference as wel
     */
    @Test
    public void twoReferenceOneDataStoreEntry() {
        String sampleplacesID = "sample1";
        HashMap<String, String[]> sampleHttpRequestParam = new HashMap();
        sampleHttpRequestParam.put("Rating1", new String[] {"9.0"});

        //Insert store and Rating into DataStore
        StoreDatastoreHandler store = new StoreDatastoreHandler(sampleplacesID);
        store.placeStore(sampleHttpRequestParam);

        //Place another rating in store following flow of servlet
        StoreDatastoreHandler storeSometimeLater = new StoreDatastoreHandler(sampleplacesID);
        HashMap<String, String[]> sampleHttpRequestParam2 = new HashMap();
        sampleHttpRequestParam2.put("Rating1", new String[] {"5.0"});
        storeSometimeLater.placeStore(sampleHttpRequestParam2);

        storeSometimeLater.deleteStoreAndRatings();

        Assert.assertEquals(new ArrayList(), store.getRatings());
    }

    /*
     * Simple test for compiling ratings overtime
     */
    @Test
    public void compileRatingsForDataVisualization() {
        String sampleplacesID = "sample1";
        HashMap<String, String[]> sampleHttpRequestParam = new HashMap();
        sampleHttpRequestParam.put("busy", new String[] {"9.0"});
        sampleHttpRequestParam.put("line", new String[] {"6.0"});
        sampleHttpRequestParam.put("hygiene", new String[] {"6.0"});
        sampleHttpRequestParam.put("mask", new String[] {"7.0"});

        //Insert store and Rating into DataStore
        StoreDatastoreHandler store = new StoreDatastoreHandler(sampleplacesID);
        store.placeStore(sampleHttpRequestParam);

        //Place another rating in store following flow of servlet
        StoreDatastoreHandler storeSometimeLater = new StoreDatastoreHandler(sampleplacesID);
        HashMap<String, String[]> sampleHttpRequestParam2 = new HashMap();
        sampleHttpRequestParam2.put("busy", new String[] {"5.0"});
        sampleHttpRequestParam2.put("line", new String[] {"8.0"});
        sampleHttpRequestParam2.put("hygiene", new String[] {"10.0"});
        sampleHttpRequestParam2.put("mask", new String[] {"1.0"});

        storeSometimeLater.placeStore(sampleHttpRequestParam2);

        //Populate CheckinStats Class
        CheckInStats storeStats = new CheckInStats(sampleplacesID);

        HashMap<String, ArrayList<DataPoint>> compiledRatings = storeStats.compileRatingDays();

        //Both reviews are on the same day so there should only be one rating
        Assert.assertEquals(compiledRatings.get("mask").size(), 1);
        Assert.assertEquals(compiledRatings.get("hygiene").size(), 1);
        Assert.assertEquals(compiledRatings.get("line").size(), 1);
        Assert.assertEquals(compiledRatings.get("busy").size(), 1);

        //compiled rating should be average of two reviews
        Assert.assertEquals((int) compiledRatings.get("mask").get(0).getValue(), 4);
        Assert.assertEquals((int) compiledRatings.get("hygiene").get(0).getValue(), 8);
        Assert.assertEquals((int) compiledRatings.get("line").get(0).getValue(), 7);
        Assert.assertEquals((int) compiledRatings.get("busy").get(0).getValue(), 7);
    }

}