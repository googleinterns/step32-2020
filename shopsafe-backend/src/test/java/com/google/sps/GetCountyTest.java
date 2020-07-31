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
import com.google.sps.data.LatLng;
import com.google.sps.data.Store;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/** Class that tests the get county function. */
@RunWith(JUnit4.class)
public final class GetCountyTest {

  /** Check if the county name field is correct for Centre County. */
  @Test
  public void checkValidLocation() {
    Store store =
        new Store(
            "1234567889",
            "Walmart",
            "123 Walnut Street",
            true,
            new LatLng(40.803639, -77.862574),
            2.4);
    String actual = County.getCounty(store).getCountyName();
    String expected = "Centre";
    Assert.assertEquals(expected, actual);
  }

  /** Check if the county name field is empty for location outside the United States. */
  @Test
  public void checkLocationOutsideUS() {
    Store store =
        new Store(
            "1234567889",
            "Walmart",
            "123 Walnut Street",
            true,
            new LatLng(43.650300, -79.383785),
            4.6);
    String actual = County.getCounty(store).getCountyName();
    String expected = "";
    Assert.assertEquals(expected, actual);
  }

  /** Check if the county name field is empty for invalid location. */
  @Test
  public void checkInvalidLocation() {
    Store store =
        new Store(
            "1234567889", "Walmart", "123 Walnut Street", true, new LatLng(1000.0, 1000.0), 3.2);
    String actual = County.getCounty(store).getCountyName();
    String expected = "";
    Assert.assertEquals(expected, actual);
  }
}
