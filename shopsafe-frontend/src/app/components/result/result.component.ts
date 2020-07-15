import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Result } from '../../classes/result/result';
import { ActivatedRoute } from '@angular/router';
import { MapMarker } from '@angular/google-maps'

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

@Injectable({
  providedIn: 'root',
})

export class ResultComponent implements OnInit {
  result: Result;
  location: string;
  isLoaded: boolean;
  httpError: boolean;
  httpErrorMessage: string;
  markers = [];
  center: google.maps.LatLngLiteral;
  options: google.maps.MapOptions = {
    styles: [
      {
        featureType: "poi",
        elementType: "labels",
        stylers: [
          { visibility: "off" }
        ]
      }
    ]
  }

  constructor(
    private apiService: ApiService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    // Defaults to API not called yet
    this.isLoaded = false;
    // Defaults to no HTTP error
    this.httpError = false;
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
          countyStats: (data as any).countyStats
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

    // Set center of map to first result of store 
    // FIXME: return latlng of location?
    this.center = {
      lat: this.result.stores[0].latitude,
      lng: this.result.stores[0].longitude
    };
    console.log("CLIENT" + this.center);
  }

  addMarkers(): void {
    for (let store of this.result.stores) {
      this.markers.push({
        position: {
          lat: store.latitude,
          lng: store.longitude
        },
        label: {
          color: 'red',
          text: store.name
        },
        title: store.name,
        options: { animation: google.maps.Animation.BOUNCE }
      })
    }
  }
}