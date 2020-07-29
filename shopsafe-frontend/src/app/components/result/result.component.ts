import { Component, OnInit, ViewChild, OnChanges } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Result } from '../../classes/result/result';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap, MapMarker, MapInfoWindow } from '@angular/google-maps';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {
  result: Result;
  location: string;
  isLoaded: boolean;
  httpError: boolean;
  httpErrorMessage: string;

  sortingMethods: string[];

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap; // In-template Google Map.
  @ViewChild(MapInfoWindow, { static: false }) infoWindow: MapInfoWindow; // In-template Map info window.
  infoWindowOptions: google.maps.InfoWindowOptions = {}; // Options for Info Window.
  markers = []; // Array of store markers rendered in Google Map.
  center: google.maps.LatLngLiteral; // Current center of Google Map.
  zoom: number; //zoom level of map
  styles: google.maps.MapTypeStyle[] = [
    {
      featureType: "administrative",
      elementType: "geometry",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "poi",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "road",
      elementType: "labels.icon",
      stylers: [
        {
          visibility: "off"
        }
      ]
    },
    {
      featureType: "transit",
      stylers: [
        {
          visibility: "off"
        }
      ]
    }
  ]; // Custom map styling.
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    styles: this.styles,
  }; // Options for Google Map rendered in template.

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { 
    this.sortingMethods = ['Sort by ShopSafe Score', 
                           'Sort by Google Review',
                           'Sort by Distance']; // Init sorting methods.
  }

  ngOnInit(): void {
    this.isLoaded = false; // Defaults to API not called yet
    this.httpError = false; // Defaults to no HTTP error
    this.location = this.route.snapshot.paramMap.get('location').toString();
    this.getResult('Sort by ShopSafe Score');
  }

  /**
   * Calls API to get result and subscribes local variables using data returned
   * in the Observable from the HTTP response.
   */
  getResult(method: string): void {
    console.log('CLIENT: results api call at ' + this.location);
    this.apiService.getNearbyStores(this.location)
      .subscribe(data => 
        this.result = {
          stores: (data as any).stores,
          latLng: (data as any).latLng
        },
        err => {
          console.log(err),
          this.httpError = true,
          this.httpErrorMessage = err
        },
        () => {
          this.sortResults(method);
          this.initTemplate()
        }
      );
  }

  /**
   * Initializes component by using data returned from API call.
   * Sets isLoaded boolean to true, as the function can only be called when there
   * is a successful response.
   */
  initTemplate(): void {
    // Sets loaded state to true
    this.isLoaded = true;
    console.log("CLIENT: API call finished");

    // Add all map markers
    this.addMarkers();
    console.log("CLIENT: added markers");

    // Set center of map to latLng of user location
    this.center = {
      lat: this.result.latLng.latitude,
      lng: this.result.latLng.longitude
    };

    // Set zoom level of map
    this.zoomMap();
  }

  /**
   * Populates map with markers indicating score range based on latLng geolocation
   * of each rendered grocery store.
   * 
   * Red markers: [0, 3.3], yellow markers: (3.3, 6.6], greeen markers: (6.6, 10]
   */
  addMarkers(): void {
    var safeIcon = "http://maps.google.com/mapfiles/ms/icons/green.png";
    var cautionIcon = "http://maps.google.com/mapfiles/ms/icons/yellow.png";
    var unsafeIcon = "http://maps.google.com/mapfiles/ms/icons/red.png";
    var currIcon = '';

    var userIcon = "https://img.icons8.com/material-two-tone/24/000000/street-view.png";

    // Adds current user query location to markers.
    this.markers.push({
      position: {
        lat: this.result.latLng.latitude,
        lng: this.result.latLng.longitude
      },
      title: "Your location!",
      options: {
        icon: { url: userIcon }
      }
    })

    // Adds each stores as marker.
    for (let store of this.result.stores) {
      // Set icon according to colour.
      if (store.score <= 3.3) {
        currIcon = unsafeIcon;
      } else if (store.score <= 6.6) {
        currIcon = cautionIcon;
      } else {
        currIcon = safeIcon;
      }

      this.markers.push({
        position: {
          lat: store.latitude,
          lng: store.longitude
        },
        title: store.name,
        info: store.score,
        options: {  
          icon: { url: currIcon } 
        }
      })
    }
  }

  /**
   * Calculates and sets zoom level based on maximum distance of a store
   * from the user latLng.
   */
  zoomMap(): void {
    console.log("CLIENT: map resized");
    //Maximum distance from user latlng
    const maxDistance = Math.max.apply(null, this.result.stores.map(store => store.distance));

    this.zoom = Math.round(14-Math.log(maxDistance)/Math.LN2);
  }

  /**
   * Recenters map based on latLng
   * @param lat latitude to be recentered to
   * @param lng longitude to be recentered to
   */
  recenterMap(lat: number, lng: number): void {
    this.center = {
      lat: lat,
      lng: lng
    };

    // Scroll to map.
    const mapElement = document.getElementById("map");
    mapElement.scrollIntoView({behavior: 'smooth'});
  }

  /**
   * Sorts results in descending order with the selected method through 
   * the dropdown in the results page. Method gets called when the selector is changed.
   * @param method The method from the dropdown selector.
   */
  sortResults(method: string): void {
    // Sort by ShopSafe Score in descending order.
    if (method == "Sort by ShopSafe Score") {
      console.log("CLIENT: sorting by ShopSafe Score");
      this.result.stores.sort((n1, n2) => {
        return n2.rating - n1.rating;
      });
    // Sort by Google Review in descending order.
    } else if (method == "Sort by Google Review") {
      console.log("CLIENT: sorting by Google Review");
      this.result.stores.sort((n1, n2) => {
        return n2.rating - n1.rating;
      });
    // Sort by distance in ascending order. 
    } else {
      this.result.stores.sort((n1, n2) => {
        console.log("CLIENT: sorting by distance");
        return n1.distance - n2.distance;
      });
    }
  }

  /**
   * Opens info window on map anchored to given marker.
   * @param markerPosition Marker coordinates that the window is anchored to.
   * @param store The name of the store for the given marker.
   * @param storeScore The score of the specified store.
   */
  openInfo(markerPosition, store, storeScore): void {
    this.infoWindowOptions = { 
      content: store + ": " + Math.round(storeScore * 100) / 100 + "/10",
      position: markerPosition
    };
    
    this.infoWindow.open();
  }
}