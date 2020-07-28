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

import com.google.sps.data.County;
import com.google.sps.data.CountyStats;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/** Class that tests fetching stats for Counties */
@RunWith(JUnit4.class)
public final class CountyStatsTest {

  /*
   * Fake county should return 0 for all stats
   */
  @Test
  public void fakeCounty() {
    County county = new County("Fake", "Place", "00000");
    CountyStats countyStats = new CountyStats(county);

    Assert.assertEquals(countyStats.getCases(), 0);
    Assert.assertEquals(countyStats.getDeaths(), 0);
    Assert.assertEquals(countyStats.getPopulation(), 0);
  }

  /*
   * Valid County Should return valid Result, testing manhattan
   */
  @Test
  public void simpleCase() {
    County county = new County("Lancaster", "PA", "42071");
    CountyStats countyStats = new CountyStats(county);

    Assert.assertTrue(countyStats.getCases() > 0);
    Assert.assertTrue(countyStats.getDeaths() > 0);
    Assert.assertTrue(countyStats.getPopulation() > 0);
  }
}
