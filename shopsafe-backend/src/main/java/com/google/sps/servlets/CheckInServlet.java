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

package com.google.sps.servlets;

import java.io.IOException;

import java.util.Map;

import com.google.sps.data.StoreDatastoreHandler;

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;

import com.google.appengine.api.datastore.KeyFactory.Builder;


/** Servlet that handles user's rating of a store*/
//TODO: determine url
@WebServlet("/checkin")
public class CheckInServlet extends HttpServlet {

    /*
     * Request:
     *    StoreId - valid Places API ID
     *    RatingField1 - RatingValue1
     *    RatingField2 - RatingValue2
     *    .....
     *    *TODO: Solidify rating fields and values*
     *
     * Updates datastore to reflect new rating
     */
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException { 

        //Using places API ID of a store determin
        String placesID = request.getParameter("StoreId");
        StoreDatastoreHandler store = new StoreDatastoreHandler(placesID);
        
        Map<String, String[]> ratingsMap =  request.getParameterMap();
        //leave just the ratings
        ratingsMap.remove("StoreId");

        store.placeStore(ratingsMap);

    }
}
