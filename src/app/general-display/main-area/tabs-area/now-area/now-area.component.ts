import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/current-weather.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-now-area',
  templateUrl: './now-area.component.html',
  styleUrls: ['./now-area.component.css']
})
export class NowAreaComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in StaticGraphsComponent, subscribed to new value");
      this.currentWeather = newWeatherData.currentWeather;
    });
    console.log("init now tab");
    console.log(this.currentWeather);
  }

}
