import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { AppComponent } from '../app.component';
import { ClimateAverage } from '../models/climate-average.model';
import { WeatherData } from '../models/weather-data.model';


@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() weatherData: WeatherData;
  // climateAverages: Array <ClimateAverage>;
  
  
  constructor(public data: DataService, private appComponent: AppComponent) { 
    
  }

  ngOnInit(): void {
    console.log("Initializing stat");
    console.log(this.weatherData);
    this.data.weatherData.subscribe((newWeatherData)=>{
      this.weatherData = newWeatherData;
      // this.climateAverages = newWeatherData.climateAverages;
      console.log("In stats, subscribing to data");
      console.log(this.weatherData);
      console.log(this.weatherData.climateAverages);
    });
    if (this.weatherData == undefined){
      this.appComponent.initialize();
      this.data.weatherData.subscribe((newWeatherData)=>{
        console.log("in nav, subscribed to value");
        this.weatherData = newWeatherData;
        // this.climateAverages = this.weatherData.climateAverages;
        console.log(this.weatherData);
      });
    }
    // this.weatherData = this.data.subjectValue;
    // console.log(this.weatherData);
    
    }

}
