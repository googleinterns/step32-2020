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

  constructor(
    private router: Router,
    public zone: NgZone
  ) { }

  ngOnInit(): void {
  }

  getNearbyStores(): void {
    this.router.navigate(['/result', this.location]);
    console.log("CLIENT: redirecting to results");
  }

  /**
   * Fetches address from search bar autocomplete by parsing returned 
   * place array for 'formatted_address' value
   * @param place array emitted from setAddress event from search bar component
   */
  getAddress(place: object): void {
    this.zone.run(() => this.location = place['formatted_address']);
    this.getNearbyStores();
  }

  geoSuccess(position: Position): void {
    console.log(position);
    this.location = position.coords.latitude.toString() + ',' + position.coords.longitude.toString();
    console.log(this.location);
    // this.location = positi
    // document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    // document.getElementById('startLon').innerHTML = startPos.coords.longitude;
  };
  
  geoError(positionError: PositionError): void {
    console.log(positionError);
  };

  /**
   * Fetches address from geolocation 
   */
  getUserLatLng(): void {
    console.log("getting user location");
    navigator.geolocation.getCurrentPosition(this.geoSuccess, this.geoError);
  }

}
