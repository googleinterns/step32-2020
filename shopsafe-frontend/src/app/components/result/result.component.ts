import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Store } from '../../classes/store/store';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  stores: Store[] = [];
  location: "";

  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit(): void {
    // Fetches all nearby stores on component load
    // this.getNearbyStores(this.location)
    //     .subscribe((stores) => {
    //       this.stores = stores;
    //     })
    this.initStores();
  }

  // FIXME: make this as function in landing/search
  getNearbyStores(location: string) : Observable<Store[]> {
    return this.apiService.getNearbyStores(location);
  }

  // TODO: dynamic URL rendering based on each unique store
  // TODO: implement search bar
  // TODO: render all results

  // testing dummy method
  initStores() : void {
    this.stores.push(new Store({
      id: 'temp',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      checkedIn: 10,
      status: true,
      latLng: [0, 0],
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    }));

    this.stores.push(new Store({
      id: 'temp',
      name: 'test',
      address: '1234 Test St.',
      score: 10,
      checkedIn: 10,
      status: true,
      latLng: [0, 0],
      busy: 1,
      line: 1,
      hygiene: 1,
      masks: 1
    }));
  }

}
