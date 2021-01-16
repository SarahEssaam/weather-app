import { Component, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],


})
export class MainAreaComponent {
  @Input() weatherData: WeatherData;
  
  constructor() {}
  
  
}

