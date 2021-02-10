import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';
import { Titles } from '../title.model';

@Component({
  selector: 'app-static-graphs',
  templateUrl: './static-graphs.component.html',
  styleUrls: ['./static-graphs.component.css']
})
export class StaticGraphsComponent implements OnInit {
  @Input() weatherData: WeatherData;
  mainGraphKeys = ['avgTemp', 'avgRainDays', 'avgFogDays']
  
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
