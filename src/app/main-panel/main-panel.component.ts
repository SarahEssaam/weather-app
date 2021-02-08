import { Component, Input, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { WeatherData } from '../models/weather-data.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-main-panel',
  templateUrl: './main-panel.component.html',
  styleUrls: ['./main-panel.component.css']
})
export class MainPanelComponent implements OnInit {
  @Input() weatherData: WeatherData;
  
  constructor(private data: DataService, private appComponent: AppComponent) {}

  ngOnInit(): void {
    console.log("in general, in init, subscribing to data");
    this.data.weatherData.subscribe((newWeatherData) => {
      this.weatherData = newWeatherData;
      console.log("new data subscribed in general");
      console.log(this.weatherData);
    });
  }
  showCurrentLocation (){
    this.appComponent.initialize();
    this.data.weatherData.subscribe((newWeatherData) => {
      this.weatherData = newWeatherData;
      console.log("new data subscribed in general");
      console.log(this.weatherData);
    });
    // this.data.weatherData.next(this.weatherData);
  }

}
