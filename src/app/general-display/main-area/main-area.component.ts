import { Component, ErrorHandler, OnDestroy, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { SearchService } from 'src/app/search.service';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpFetchService } from '../../http-fetch.service';
import { Location } from '../../models/location.model';
import { DataProvider } from 'src/app/app-routing/data.provider';
import { Router } from '@angular/router';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],


})
export class MainAreaComponent implements OnInit {
  weatherData: WeatherData;
  currentLocation: Location;
  statsPath: string;
  constructor(private router: Router, private searchAPI: SearchService, public data: DataProvider, private http: HttpClient, private httpFetch: HttpFetchService, error: ErrorHandler) {}
  

  ngOnInit(): void {
    this.searchAPI.getCurrentLocation((loc: Array<Location>) => {
    // console.log(`${this.latitude},${this.longitude}`);
    // this.location = {long:30,lat:30};
    this.currentLocation = loc[0];
    this.updateView(this.currentLocation);
  });
}
   updateView(newLocation: Location){
    this.currentLocation = newLocation;
    this.httpFetch.fetch('weather.ashx' ,(new HttpParams()).append('showlocaltime','yes').append('q',`${this.currentLocation.latitude},${this.currentLocation.longitude}`))
    .subscribe(
      response => {
        console.log(response.data);
        this.weatherData = new WeatherData(response.data);
        console.log(this.weatherData);
        //return response.data;
      });
    }   
    onShowStats(){
      this.data.climateAverages = this.weatherData.climateAverages;
      console.log(this.data.climateAverages);
      // return window.location.origin+'/statistics/';
      this.router.navigateByUrl('/statistics');
    }
  
}

