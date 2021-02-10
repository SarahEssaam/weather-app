import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';
import { Titles } from '../title.model';

@Component({
  selector: 'app-dynamic-graphs',
  templateUrl: './dynamic-graphs.component.html',
  styleUrls: ['./dynamic-graphs.component.css']
})
export class DynamicGraphsComponent implements OnInit {
  @Input() weatherData: WeatherData;
  
  otherGraphKeys = ['avgTemp', 'avgMaxTemp', 'absMinTemp', 'avgMinTemp', 'absMaxTemp', 'avgDryDays', 'avgSnowDays', 'avgThunderDays', 'avgFogDays', 'avgRainDays']
  public get Titles(): typeof Titles {
    return Titles; 
  }
  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in StaticGraphsComponent, subscribed to new value");
      this.weatherData = newWeatherData;
    });
  }

}
