import { Injectable } from '@angular/core';
import { Result } from './result';
import { Store } from '../store/store';

@Injectable({
  providedIn: 'root'
})
export class ResultDataService {

  constructor() { }

  // mostly getter methods to return result variables
  // TODO: rename and recomment method heads when connecting with api
  // GET /results 
  getResult(): Result {
    return;
    // TODO: implement based on how results are served
  }

  // GET /nearby-stores 
  getStores(result: Result): Store[] {
    return result.nearbyStores;
  }
}
