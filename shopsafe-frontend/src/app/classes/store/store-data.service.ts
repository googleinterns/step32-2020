import { Injectable } from '@angular/core';
import { ApiService } from '../../api/api.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StoreDataService {

  constructor(
    private api: ApiService
  ) { }

  createCheckIn(id: string): Observable<Object> {
    return this.api.createCheckIn(id);
  }
}
