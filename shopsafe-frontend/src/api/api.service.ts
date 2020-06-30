import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';

// Provides HTTP client used to make HTTP requests within the Angular application
// Returns Observables (can be synchronous), not Promises (always asynchronous)
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }


  /**
   * Handles error when calling API
   * @param error Response that returns an error
   * @returns Observable that throws the error
   */
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }


  /**
   * Creates new check-in for specific store ID
   * @param storeId ID of the store that the check-in occurs for
   * @returns Observable 
   */
  public createCheckIn(storeId : string): Observable<Object> {
    return this.http
      .post(API_URL + '/checkin', storeId)
      .pipe(
        catchError(this.handleError)
      );
  }
}
