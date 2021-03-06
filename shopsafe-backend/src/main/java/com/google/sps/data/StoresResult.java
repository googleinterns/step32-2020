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

import java.util.List;

/*
 * Class representing the response from /stores contains store information
 * and latititude and longitude of assigned user location.
 */
public final class StoresResult {

  private final List<StoreStats> stores;
  private final LatLng latLng;

  /** StoresResult constructor. */
  public StoresResult(List<StoreStats> stores, LatLng latLng) {
    this.stores = stores;
    this.latLng = latLng;
  }
}
