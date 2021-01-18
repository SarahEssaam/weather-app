import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WeatherData } from '../models/weather-data.model';

@Component({
  selector: 'app-general-display',
  templateUrl: './general-display.component.html',
  styleUrls: ['./general-display.component.css']
})
export class GeneralDisplayComponent implements OnInit {
  @Input() weatherData: WeatherData;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    console.log("in general, in init, subscribing to data");
    this.data.weatherData.subscribe((newWeatherData) => {
      this.weatherData = newWeatherData;
      console.log("new data subscribed in general");
      console.log(this.weatherData);
    });
  }
}
