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
import com.google.sps.servlets.StoresServlet;
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

/** Class that tests the stores servlet. */
@RunWith(JUnit4.class)
public class StoresServletTest {

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
    public void checkNullLocation() throws IOException, ServletException {

        //Initialize request, response, and servlet.
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StoresServlet storesServlet = new StoresServlet();
        storesServlet.init();

        // Mock call for location.
        when(request.getParameter("location")).thenReturn(null);
        
        // Read response and save to result.
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);
        storesServlet.doGet(request, response);
        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to get the location parameter from the request.");
    }

    /*
     * Check if correct error message is sent for empty location.
     */
    @Test
    public void checkEmptyLocation() throws IOException, ServletException {

        //Initialize request, response, and servlet.
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StoresServlet storesServlet = new StoresServlet();
        storesServlet.init();

        // Mock call for location.
        when(request.getParameter("location")).thenReturn("  ");
        
        // Read response and save to result.
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);
        storesServlet.doGet(request, response);
        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to get location, an address must be submitted.");
    }

    /*
     * Check if correct error message is sent for invalid location.
     */
    @Test
    public void checkNonsenseLocation() throws IOException, ServletException {

        //Initialize request, response, and servlet.
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StoresServlet storesServlet = new StoresServlet();
        storesServlet.init();

        // Mock call for location.
        when(request.getParameter("location")).thenReturn("asdflkasdvojabdskjvaewfnaeskcasdcn");
        
        // Read response and save to result.
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);
        storesServlet.doGet(request, response);
        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to find any stores near the address: asdflkasdvojabdskjvaewfnaeskcasdcn");
    }

    /*
     * Check if correct error message is sent for invalid location.
     */
    @Test
    public void checkLocationOutsideUs() throws IOException, ServletException {

        //Initialize request, response, and servlet.
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StoresServlet storesServlet = new StoresServlet();
        storesServlet.init();

        // Mock call for location.
        when(request.getParameter("location")).thenReturn("Toronto");
        
        // Read response and save to result.
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);
        storesServlet.doGet(request, response);
        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        Assert.assertEquals(result, "Failed to find any valid stores near the address: Toronto");
    }

    /*
     * Check the formatting for a correct location.
     */
    @Test
    public void checkValidLocation() throws IOException, ServletException {

        //Initialize request, response, and servlet.
        HttpServletRequest request = Mockito.mock(HttpServletRequest.class); 
        HttpServletResponse response = Mockito.mock(HttpServletResponse.class);
        StoresServlet storesServlet = new StoresServlet();
        storesServlet.init();

        // Mock call for location.
        when(request.getParameter("location")).thenReturn("Philadelphia");
        
        // Read response and save to result.
        StringWriter stringWriter = new StringWriter();
        PrintWriter printWriter = new PrintWriter(stringWriter);
        when(response.getWriter()).thenReturn(printWriter);
        storesServlet.doGet(request, response);
        String result = stringWriter.getBuffer().toString().trim();
        printWriter.flush();

        // Test json result to see if certain properties exist.
        try {
            JSONObject resultJson = new JSONObject(result);
            
            JSONArray stores = resultJson.getJSONArray("stores");
            JSONObject firstStore = stores.getJSONObject(0);
            String storeId = firstStore.getString("id");
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