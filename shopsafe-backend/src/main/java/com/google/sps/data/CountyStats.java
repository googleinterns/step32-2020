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

import com.google.sps.data.County;
import com.google.sps.QueryNYT;

/** Class contains the name, state, population and covid cases and deaths of a county. */
public final class CountyStats {

    // County properties
    private final String countyName;
    private final String stateName;
    private final long cases;
    private final long deaths;
    private final long population;

    public CountyStats(County county) {
        this.countyName = county.getCountyName();
        this.stateName = county.getStateName();

        //Query NYT dataset for covid cases and deaths
        QueryNYT queryResults = QueryNYT.exampleQuery(countyName, stateName);
        this.cases = queryResults.getCases();
        this.deaths = queryResults.getDeaths();


        //TODO: need to get actuall population of count
        this.population = 8080;
    }

    public String getCountyName() {
        return countyName;
    }

    public String getStateName() {
        return stateName;
    }

    public long getCases() {
        return cases;
    }

    public long getDeaths() {
        return deaths;
    }
    
    public long getPopulation() {
        return population;
    }
}