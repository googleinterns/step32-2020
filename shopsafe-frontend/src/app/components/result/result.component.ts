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
    // this.init();
    // this.getResult();
    this.apiService.getNearbyStores(this.location)
      .subscribe(data => this.result = {
        stores: (data as any).stores,
        countyStats: (data as any).countyStats
      });
  }

  getResult(): void {
    console.log('results api call');
    this.apiService.getNearbyStores(this.location)
      .subscribe(data => this.result = {
        stores: (data as any).stores,
        countyStats: (data as any).countyStats
      });

    this.initResult();
  }

  callResult(location: string): void {
    console.log("called on results page at " + location);
    this.location = location;
  }

  initResult(): void {
    this.stores = this.result.stores;
    // Round proportion to 2 decimal places
    this.proportion = Math.round((this.result.countyStats[0].cases / this.result.countyStats[0].population) * 100) / 100;
  }

  // dummy method
  // FIXME: out of date
  init(): void {
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
      countyStats: [].push(new CountyStats({
        countyName: 'St. Lawrence',
        stateName: 'New York',
        cases: 234098,
        deaths: 43,
        population: 623408
      }))
    })
  }

}
