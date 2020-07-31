import { Component, OnInit, NgZone } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { Router } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  location: string = '';
  loadingUserLatLng: boolean = false;
  failedGeoLoc = false;
  latlng: boolean = false;

  constructor(
    private router: Router,
    public zone: NgZone,
  ) { }

  ngOnInit(): void {

  }

  getNearbyStores(): void {
    this.router.navigate(['/result', this.location, this.latlng]);
    console.log("CLIENT: redirecting to results");
  }

  /**
   * Fetches address from search bar autocomplete by parsing returned 
   * place array for 'formatted_address' value
   * @param place array emitted from setAddress event from search bar component
   */
  getAddress(place: object): void {
    this.location = place['formatted_address']
    this.latlng = false;
    this.zone.run(() => this.getNearbyStores());
  }


  /**
   * Fetches address from geolocation 
   */
  getUserLatLng(): void {
    console.log("getting user location");
    this.loadingUserLatLng = true;
    navigator.geolocation.getCurrentPosition(
      (position: Position) => {
        const stringLocation:string = position.coords.latitude.toString()+ ',' + position.coords.longitude.toString();
        this.zone.run(() => this.location = stringLocation);
        this.latlng = true;
        this.getNearbyStores();
      }, 
      (positionError: PositionError) => {
        this.loadingUserLatLng = false;
        console.log(positionError);
        setTimeout(()=>
        alert("Failed to get your location, adjust your location settings for our site or insert an address in the search bar"), 100);
      }
    );
  }

}
