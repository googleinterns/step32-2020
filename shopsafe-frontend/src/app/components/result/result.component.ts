import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Store } from '../../classes/store/store';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Result } from '../../classes/result/result';
import { Router, ActivatedRoute } from '@angular/router';

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

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    this.initStores();
  }

  getResult(location: string): void {
    console.log('results api call');
    this.location = location;
    this.apiService.getNearbyStores(location)
      .subscribe(data => this.result = {
        nearbyStores: (data as any).nearbyStores,
        countyStats: (data as any).countyStats
      });
    this.stores = this.result.nearbyStores;
  }

  // dummy method
  initStores() : void {
    this.location = '1234 Test St.';
    this.stores.push(new Store({
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

    this.stores.push(new Store({
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
  }

}
