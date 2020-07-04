import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { StoreInterface, ResultInterface } from '../interfaces/interface';

// Provides HTTP client used to make HTTP requests within the Angular application
// Returns Observables (can be synchronous), not Promises (always asynchronous)
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

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
   * @returns result as observable
   */
  public getNearbyStores(location: string): Observable<ResultInterface> {
    const url = API_URL + '/stores/${location}';
    return this.http
      .get<ResultInterface>(url)
      .pipe(
        map(res => res as ResultInterface),
        tap(_ => console.log("get nearby stores")),
        catchError(error => throwError(error.message || error))
      );
  }

  /**
   * Gets current store by ID, requires mapping because JSON doesn't match 
   * interface typing
   * @param id ID of the store to fetch store from
   * @returns store of given ID as observable
   */
  public getStoreById(id: string) : Observable<StoreInterface> {
    const url = API_URL + '/store/${id}';
    return this.http
      .get<StoreInterface>(url)
      .pipe(
        map((res: any) => {
          return <StoreInterface> {
            id: res.id,
            name: res.name,
            address: res.address,
            status: res.open,
            score: res.score,
            reviewCount: res.reviewCount,
            latLng: [res.location.latitude, res.location.longitude],
            busy: res.stats.busy,
            line: res.stats.line,
            hygiene: res.stats.hygiene,
            masks: res.stats.masks
          }
        }),
        tap(_ => console.log('fetched store id=${id}')),
        catchError(error => throwError(error.message || error))
      )
  }
}
