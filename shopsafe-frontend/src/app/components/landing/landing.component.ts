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
    private apiService: ApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  getNearbyStores() : Observable<Object> {
    return this.apiService.getNearbyStores(this.location);
  }

  testOutput() {
    console.log(this.location);
    this.router.navigate(['/result'])
  }

}
