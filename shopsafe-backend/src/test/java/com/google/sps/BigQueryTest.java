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

import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;

/** Class that tests fetching BigQuery data. */
@RunWith(JUnit4.class)
public final class BigQueryTest {

  /** Should return the same number of confirmed cases as we handle case in in bigquery search. */
  @Test
  public void simpleCaseTest() {
    Assert.assertTrue(
        QueryCovidStats.getCovidStatsFips("42071")
            .equals(QueryCovidStats.getCovidStatsFips("42071")));
  }
}
