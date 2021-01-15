import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, catchError, tap } from 'rxjs/operators';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpFetchService {
  constructor(private http: HttpClient) {}
  error = new Subject<string>();
  fetch(api: string='weather.ashx', param?: HttpParams){
    let params = new HttpParams();
    // params = params.append('showmap', 'yes');
    if (param != undefined){
      params = param;
    }    
    return this.http .get<any>(
      `https://api.worldweatheronline.com/premium/v1/${api}`,
        {
          params: params,
          responseType: 'json'
        }
      )
      .pipe(
        map(responseData => {
          return responseData;
        }),
        catchError(errorRes => {
          return throwError(errorRes);
        })
      );
  }
}