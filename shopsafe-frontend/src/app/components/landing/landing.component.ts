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

  getAddress(place: object) {
    // this.location = place['formatted_address'];
    this.zone.run(() => this.location = place['formatted_address']);
    this.getNearbyStores();
  }

}
