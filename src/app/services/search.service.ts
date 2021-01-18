import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpFetchService } from './http-fetch.service';
import { Location } from '../models/location.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
 // locations: Array<Location>;
  constructor(private http: HttpClient, private httpFetch: HttpFetchService) { }
  getCurrentLocation (callback) {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => { 
        // this.latitude =  
        console.log(position.coords.latitude);
        // this.longitude = 
        console.log(position.coords.longitude);
        this.getLocation({latitude: position.coords.latitude, longitude: position.coords.longitude}, callback);
      });
    } 
  }

  getLocation(location: {latitude: number, longitude: number}, callback){
    let q= `${location.latitude},${location.longitude}`;
    this.httpFetch.fetch('search.ashx' ,new HttpParams().append('q',q))
    .subscribe(
      response => {
        console.log(response);
        callback(response.search_api.result);
      });
  }
  getMatchingLocations(searchPattern: string, callback){
    this.httpFetch.fetch('search.ashx' ,new HttpParams().append('q',searchPattern))
    .subscribe(
      response => {
    //    this.locations = response.search_api.result;
        console.log(response);
        callback(response.search_api.result);
      },
    );
  }
}
