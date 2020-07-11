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

package com.google.sps;

import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;
import static org.mockito.Mockito.when;

import com.google.gson.Gson;
import com.google.sps.servlets.StoreServlet;
import com.google.appengine.tools.development.testing.LocalDatastoreServiceTestConfig;
import com.google.appengine.tools.development.testing.LocalServiceTestHelper;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.StringWriter;
import java.util.Collection;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;
import org.junit.After;
import org.junit.Before;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.junit.runners.JUnit4;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.MockitoAnnotations;

/** Class that tests the store servlet. */
@RunWith(JUnit4.class)
public class StoreServletTest {

    private final LocalServiceTestHelper helper =
        new LocalServiceTestHelper(new LocalDatastoreServiceTestConfig());

    @Before
    public void setUp() {
    helper.setUp();
    }

    @After
    public void tearDown() {
    helper.tearDown();
    }


    /*
     * Check if correct error message is sent for null case.
     */
    @Test
    public void checkNullId() throws IOException, ServletException {

        //Initialize variables
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
    
        StoreServlet storeServlet = new StoreServlet();
        storeServlet.init();

        when(request.getParameter("id")).thenReturn(null);
        
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);

        storeServlet.doGet(request, response);

        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to get the id parameter from the request.");
    }

    /*
     * Check if correct error message is sent for empty id.
     */
    @Test
    public void checkEmptyId() throws IOException, ServletException {

        //Initialize variables
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
    
        StoreServlet storeServlet = new StoreServlet();
        storeServlet.init();

        when(request.getParameter("id")).thenReturn("");
        
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);

        storeServlet.doGet(request, response);

        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to get store information for the id:");
    }

    /*
     * Check if correct error message is sent for invalid id.
     */
    @Test
    public void checkInvalidId() throws IOException, ServletException {

        //Initialize variables
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
    
        StoreServlet storeServlet = new StoreServlet();
        storeServlet.init();

        when(request.getParameter("id")).thenReturn("12");
        
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);

        storeServlet.doGet(request, response);

        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to get store information for the id: 12");
    }

    /*
     * Check the formatting for a correct id.
     */
    @Test
    public void checkValidId() throws IOException, ServletException {

        //Initialize variables
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
    
        StoreServlet storeServlet = new StoreServlet();
        storeServlet.init();

        String id = "ChIJbb7uBJ0ixokRyAM8CKkgxfs";
        when(request.getParameter("id")).thenReturn(id);
        
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);

        storeServlet.doGet(request, response);

        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        // Test json result to see if certain properties exist.
        try {
            JSONObject resultJson = new JSONObject(result);
            
            JSONObject store = resultJson.getJSONObject("store");
            String storeId = store.getString("id");
            
            JSONObject countyStats = resultJson.getJSONObject("countyStats");
            JSONArray countyData = countyStats.getJSONArray("covidData");

            JSONArray maskData = resultJson.getJSONArray("maskData");
        }

        // If error, print error, assert False, and return.
        catch (Exception e) {
            e.printStackTrace();
            Assert.assertTrue(false);
            return;
        }

        // If all the fields exist, return true.
        Assert.assertTrue(true);
    }
}