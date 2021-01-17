import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],


})
export class MainAreaComponent implements OnInit{
  @Input() weatherData: WeatherData;
  
  constructor() {}
  ngOnInit (){
    console.log("in main");
    console.log(this.weatherData);
  }
  
}

