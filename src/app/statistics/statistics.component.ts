import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../app-routing/data.service';
import { ClimateAverage } from '../models/climate-average.model';
import { WeatherData } from '../models/weather-data.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  @Input() weatherData: WeatherData;
  climateAverages: Array <ClimateAverage>;
  constructor(public data: DataService) { 
  }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      this.climateAverages = newWeatherData.climateAverages;
      this.weatherData = newWeatherData;
      console.log("In stats, subscribing to data");
      console.log(this.climateAverages);
    });
      }

}
