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
import com.google.sps.data.County;
import com.google.sps.data.CountyStats;

import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/** Class that tests getDistance method within stores. */
@RunWith(JUnit4.class)
public final class GetDistanceTest {

    /*
     * Gets distance between Philadelphia and New York for fake store.
     */
    @Test
    public void getDistanceTest() {
        Store store = new Store("0", "Test", "1234 Test Street", true, 
                                new LatLng(39.952583, -75.165222),
                                new LatLng(40.712776, -74.005974));
        
        Assert.assertEquals(store.getDistance(), 80.48319052067637, 0.01);
    }

    /**
     * Gets distance between two equal points.
     */
    @Test 
    public void getSameDistanceTest() {
        Store store = new Store("0", "Test", "1234 Test Street", true, 
                                new LatLng(39.952583, -75.165222),
                                new LatLng(39.952583, -75.165222));

        Assert.assertEquals(store.getDistance(), 0.0, 0.001);
    }

}
