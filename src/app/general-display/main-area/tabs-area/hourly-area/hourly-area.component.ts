import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hourly-area',
  templateUrl: './hourly-area.component.html',
  styleUrls: ['./hourly-area.component.css']
})
export class HourlyAreaComponent implements OnInit {
  @Input() weatherData: WeatherData;

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in StaticGraphsComponent, subscribed to new value");
      this.weatherData = newWeatherData;
    });
    console.log("In hourly tab");
    console.log(this.weatherData);

  }

}
