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

/** Class contains the name, state, and fips of a county. */
public final class CountyStats {

    // County properties
    private final String countyName;
    private final String stateName;
    private final int cases;
    private final int deaths;
    private final int population;

    public CountyStats(County county, int cases, int deaths, int population) {
        this.countyName = county.getCountyName();
        this.stateName = county.getStateName();
        this.cases = cases;
        this.deaths = deaths;
        this.population = population;
    }

    public String getCountyName() {
        return countyName;
    }

    public String getStateName() {
        return stateName;
    }

    public int getCases() {
        return cases;
    }

    public int getDeaths() {
        return deaths;
    }
    
    public int getPopulation() {
        return population;
    }
}