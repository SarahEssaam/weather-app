import { Component, Input, OnInit } from '@angular/core';
import { AppComponent } from 'src/app/app.component';
import { WeatherData } from 'src/app/models/weather-data.model';


@Component({
  selector: 'app-main-area',
  templateUrl: './main-area.component.html',
  styleUrls: ['./main-area.component.css'],


})
export class MainAreaComponent implements OnInit{
  @Input() weatherData: WeatherData;
  
  constructor(public appComponent: AppComponent) {}
  ngOnInit (){
    console.log("in main");
    console.log(this.weatherData);
  }
  
}

