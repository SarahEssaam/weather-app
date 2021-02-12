import { Component, OnInit, Input } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-weekly-area',
  templateUrl: './weekly-area.component.html',
  styleUrls: ['./weekly-area.component.css']
})
export class WeeklyAreaComponent implements OnInit {
  @Input() weatherData: WeatherData;
  param: string = 'avge'
  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in weekly");
      this.weatherData = newWeatherData;
      console.log(this.weatherData);
    });
    
  }

}
