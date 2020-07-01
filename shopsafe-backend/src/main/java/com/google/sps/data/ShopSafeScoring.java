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

/** Class that calculates the score for a store and a county */
public final class ShopSafeScoring {

    /*Weights for Store Score*/
    // static private final double BUSY_WEIGHT;
    // static private final double LINE_WEIGHT;
    // static private final double HYGIENE_WEIGHT;
    // static private final double MASK_WEIGHT;

    /*Weights for County Score*/
    // static private final double CASES_WEIGHT;
    // static private final double DEATH_WEIGHT;

    static public double storeScore (double busyRating, double lineRating, double hygiengeRating, double maskRating) {
        return 9.0;
        // return busyRating * BUSY_WEIGHT +
        //     lineRating * LINE_WEIGHT +
        //     hygiengeRating * HYGIENE_WEIGHT +
        //     maskRating * MASK_WEIGHT;
    }

    static public double countyScore (long cases, long deaths, long population) {
        //TODO: determine method for countyScore
        return 9.0;
    }
}