import { Component, OnInit, Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Result } from '../../classes/result/result';
import { ActivatedRoute } from '@angular/router';

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
  }
}