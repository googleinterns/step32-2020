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
import java.util.HashMap;

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
     *    storeId - valid Places API ID
     *    userId
     *    RatingField1 - RatingValue1
     *    RatingField2 - RatingValue2
     *    .....
     *    *TODO: Solidify rating fields and values*
     *
     * Updates datastore to reflect new rating
     */
    @Override
    public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException { 

        String placesID = request.getParameter("storeId");
        if (placesID == null) {
            response.sendError(400, "Provided no store ID");
        }

        //null case handled in StoreDatastoreHandler
        String userID = request.getParameter("userId");

        StoreDatastoreHandler store = new StoreDatastoreHandler(placesID);

        //Create mutable hashmap from params to values and only keep ratings
        HashMap<String, String[]> ratingsMap =  new HashMap(request.getParameterMap());
        ratingsMap.remove("storeId");
        ratingsMap.remove("userId");

        //Update Datastore
        store.placeStore(ratingsMap);

    }
}
