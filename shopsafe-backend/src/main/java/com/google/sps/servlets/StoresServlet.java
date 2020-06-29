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

import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.ServletException;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;

/** Servlet that returns nearby store information. */
@WebServlet("/stores")
public class StoresServlet extends HttpServlet {

    /**
    * For a get request, return all nearby stores world.
    */
    @Override
    public void doGet(HttpServletRequest request, HttpServletResponse response) throws IOException {

        // Todo: Get address from response

        // Todo: Check address and get LatLon

        // Todo: Get all grocery stores based on LatLon

        // Todo: Migrate stores to internal classes

        // Todo: Get county based on LatLon

        // Todo: Get Covid stats based on county

        // Todo: Get reviews for a store

        // Todo: Get score of each store

        // Todo: Return results

        response.setContentType("text/html");
        response.getWriter().println("Hello World");
    }
}
