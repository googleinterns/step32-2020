import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Result } from '../../classes/result/result';
import { ActivatedRoute } from '@angular/router';
import { GoogleMap } from '@angular/google-maps';

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

  @ViewChild(GoogleMap, { static: false }) map: GoogleMap; // In-template Google Map
  markers = []; // Array of store markers rendered in Google Map
  center: google.maps.LatLngLiteral; // Current center of Google Map
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
  ]; // Custom map styling
  options: google.maps.MapOptions = {
    disableDefaultUI: true,
    styles: this.styles,
  }; // Options for Google Map rendered in template

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.isLoaded = false; // Defaults to API not called yet
    this.httpError = false; // Defaults to no HTTP error
    this.location = this.route.snapshot.paramMap.get('location').toString();
    this.getResult();
  }

  /**
   * Calls API to get result and subscribes local variables using data returned
   * in the Observable from the HTTP response.
   */
  getResult(): void {
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

    // Adds current user query location to markers
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

    // Adds each stores as marker
    for (let store of this.result.stores) {
      // Set icon according to colour
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
   * Recenters map based on latLng
   * @param lat latitude to be recentered to
   * @param lng longitude to be recentered to
   */
  recenterMap(lat: number, lng: number): void {
    this.center = {
      lat: lat,
      lng: lng
    };
    this.map.center = this.center;

    //scroll to map
    const mapElement = document.getElementById("map");
    mapElement.scrollIntoView({behavior: 'smooth'});
  }
}