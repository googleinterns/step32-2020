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

import com.google.sps.data.LatLng;
import com.google.sps.data.Store;
import com.google.sps.data.StoreStats;
import com.google.sps.data.CheckInStats;

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

/** Class that tests getDistance method within stores. */
@RunWith(JUnit4.class)
public final class GetDistanceTest {

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
     * Gets distance between Philadelphia and New York for fake store.
     */
    @Test
    public void getDistanceTest() {
        Store store = new Store("0", "Test", "1234 Test Street", true, 
                          new LatLng(39.952583, -75.165222),
                          5.0);
        CheckInStats stats = new CheckInStats("0");
        StoreStats storeStats = new StoreStats(store, 0.0, stats, new LatLng(40.712776, -74.005974));
        
        Assert.assertEquals(storeStats.getDistance(), 80.48319052067637, 0.01);
    }

    /**
     * Gets distance between two equal points.
     */
    @Test 
    public void getSameDistanceTest() {
        Store store = new Store("0", "Test", "1234 Test Street", true, 
                          new LatLng(39.952583, -75.165222),
                          5.0);
        CheckInStats stats = new CheckInStats("0");
        StoreStats storeStats = new StoreStats(store, 0.0, stats, new LatLng(39.952583, -75.165222));

        Assert.assertEquals(storeStats.getDistance(), 0.0, 0.001);
    }

}
