import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Store } from '../classes/store/store';

// Provides HTTP client used to make HTTP requests within the Angular application
// Returns Observables (can be synchronous), not Promises (always asynchronous)
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  constructor(
    private http: HttpClient
    ) { }

  /**
   * Creates new check-in for specific store ID and sends to API as POST request
   * @param storeId ID of the store that the check-in occurs for
   * @returns Observable 
   */
  public createCheckIn(storeId: string, busy: number, line: number, hygiene: number, mask: number): Observable<Object> {
    let params = new HttpParams();
    params = params
              .set('storeId', storeId.toString())
              .set('busy', busy.toString())
              .set('line', line.toString())
              .set('hygiene', hygiene.toString())
              .set('mask', mask.toString());
    return this.http
      .post(API_URL + '/checkin', params, this.httpOptions)
      .pipe(
        tap(_ => console.log("added new checkin")),
        catchError(error => throwError(error.message || error))
      );
  }

  /**
   * Gets all nearby stores from backend via GET request
   * @param location inputted by user
   * @returns Observable of array of stores
   * FIXME: change return type to general observable and modify such that elements have to be accessed
   */
  public getNearbyStores(location: string): Observable<Store[]> {
    const url = API_URL + '/stores/${location}';
    return this.http
      .get<Store[]>(url)
      .pipe(
        tap(_ => console.log("get nearby stores")),
        catchError(error => throwError(error.message || error))
      );
  }

  /**
   * Gets current store by ID
   * @param id ID of the store to fetch store from
   * @returns store of given ID
   * TODO: implement get servlet
   */
  public getStoreById(id: string) : Observable<Store> {
    const url = API_URL + '/get-store/${id}';
    return this.http
      .get<Store>(url)
      .pipe(
        tap(_ => console.log('fetched store id=${id}')),
        catchError(error => throwError(error.message || error))
      )
  }
}
