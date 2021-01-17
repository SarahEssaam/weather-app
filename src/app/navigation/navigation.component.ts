import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/app-routing/data.service';
import { Router } from '@angular/router';
import { WeatherData } from '../models/weather-data.model';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() weatherData: WeatherData;
  constructor(private router: Router, public data: DataService) { }
  

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in nav, subscribed to value");
      this.weatherData = newWeatherData;
      console.log(this.weatherData);
    });
  }
  navigating(event: Event, path:string){
    console.log("showing stats");
    console.log(this.weatherData);
    // this.data.weatherData = this.weatherData;
    this.data.weatherData.next(this.weatherData);
    this.router.navigateByUrl(path);
    }
}
