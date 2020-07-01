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

  constructor(
    private apiService: ApiService
  ) { }

  ngOnInit(): void {
    // Fetches all nearby stores on component load
    this.getNearbyStores()
        .subscribe((stores) => {
          this.stores = stores;
        })
  }

  getNearbyStores() : Observable<Store[]> {
    return this.apiService.getNearbyStores();
  }

}
