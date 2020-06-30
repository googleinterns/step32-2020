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

/** Class contains all the stats for a store. */
public final class StoreStats {

  private final double busy;
  private final double line;
  private final double hygiene;
  private final double masks;

  public StoreStats(double busy, double line, double hygiene, double masks) {
    this.busy = busy;
    this.line = line;
    this.hygiene = hygiene;
    this.masks = masks;
  }

  public double getBusy() {
    return busy;
  }

  public double getLine() {
    return line;
  }

  public double getHygiene() {
    return hygiene;
  }

  public double getMasks() {
    return masks;
  }
}