import { Component, OnInit } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { HttpFetchService } from './http-fetch.service';
import { Location } from './models/location.model';
import { DataService } from 'src/app/app-routing/data.service';
import { SearchService } from 'src/app/search.service';
import { WeatherData } from 'src/app/models/weather-data.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  title = 'InstWeather';
  weatherData: WeatherData;

  constructor(private searchAPI: SearchService, public data: DataService, private httpFetch: HttpFetchService) {}
  ngOnInit(): void {
    // a guard due to routing sometimes re-initializes app component
    if (this.weatherData == undefined) {
        this.initialize();   
    }
  }

  initialize(){
    this.searchAPI.getCurrentLocation((loc: Array<Location>) => {  
    this.setGlobalData(loc[0]);
    });
  }
  setGlobalData (location: Location){
    this.httpFetch.fetch('weather.ashx' ,(new HttpParams()).append('showlocaltime','yes').append('q',`${location.latitude},${location.longitude}`))
    .subscribe(
      response => {
        console.log("Response recieved:");
        this.weatherData = new WeatherData(response.data, location);
        console.log(this.weatherData);
        console.log("Adding data ...");
        this.data.weatherData.next(this.weatherData);
      });
      console.log("set global data done");
  }
  
  onOutletLoaded(component) {
    console.log("outlet loaded, passing data to general");
    console.log(this.weatherData);
    // this.data.weatherData.subscribe((newWeatherData)=>{
    //   console.log("in oulet loaded, subscribed to value");
    //   this.weatherData = newWeatherData;
    //   console.log(this.weatherData);
    // });
    console.log(component);
    // this.data.weatherData.next(this.weatherData);
    component.node = this.weatherData;
    console.log(this.weatherData);
  }   
}
