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

import java.text.SimpleDateFormat;
import java.util.Date;

/*Class to associate data with a date*/
public final class DataPoint {

  private double value = 0.0;
  private String date;

  public DataPoint(double value, Date date) {
    this.value = value;

    // Format date into standard format
    String pattern = "yyyy-MM-dd";
    SimpleDateFormat simpleDateFormat = new SimpleDateFormat(pattern);
    this.date = simpleDateFormat.format(date) + " 00:00";
  }

  public double getValue() {
    return value;
  }

  public String getDate() {
    return date;
  }

  @Override
  public String toString() {
    return "{value: " + value + ", " + " date: " + date + "}";
  }
}
