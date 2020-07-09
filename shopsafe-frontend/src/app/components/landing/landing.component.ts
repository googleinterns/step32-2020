import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  location = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  getNearbyStores(): void {
    this.router.navigate(['/result', this.location]);
    console.log("CLIENT: redirecting to results");
  }

}
