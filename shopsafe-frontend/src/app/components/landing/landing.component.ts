import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from '../../api/api.service';
import { Router } from "@angular/router"
import { ResultComponent } from '../result/result.component';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  location = '';

  constructor(
    private apiService: ApiService,
    private router: Router,
    private resultComponent: ResultComponent
  ) { }

  ngOnInit(): void {
  }

  getNearbyStores() : Observable<Object> {
    this.router.navigate(['/result']);
    console.log("redirecting to results");
    return this.resultComponent.getNearbyStores(this.location);
  }

}
