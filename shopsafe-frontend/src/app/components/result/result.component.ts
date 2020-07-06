import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Store } from '../../classes/store/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Result } from '../../classes/result/result';
import { Router, ActivatedRoute } from '@angular/router';
import { CountyStats } from 'src/app/classes/county-stats/county-stats';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

@Injectable({
  providedIn: 'root'
})
export class ResultComponent implements OnInit {
  @Input() result: Result;
  stores: Store[] = [];
  location: string;
  proportion: number;

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.init();
    this.stores = this.result.nearbyStores;
    // Round proportion to 2 decimal places
    this.proportion = Math.round((this.result.countyStats.cases / this.result.countyStats.population) * 100) / 100;
  }

  getResult(location: string): void {
    console.log('results api call');
    this.location = location;
    this.apiService.getNearbyStores(location)
      .subscribe(data => this.result = {
        nearbyStores: (data as any).nearbyStores,
        countyStats: (data as any).countyStats
      });
  }

  // dummy method
  init() : void {
    var tempStores = [];
    tempStores.push(new Store({
      id: '2347',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      reviewCount: 10,
      status: true,
      latLng: [0, 0],
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    }));

    tempStores.push(new Store({
      id: '1234',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      reviewCount: 10,
      status: true,
      latLng: [0, 0],
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    }));
    
    this.location = '1234 Test St.';

    this.result = new Result({
      nearbyStores: tempStores,
      countyStats: new CountyStats({
        countyName: 'St. Lawrence',
        stateName: 'New York',
        cases: 234098,
        deaths: 43,
        population: 623408
      })
    })
  }

}
