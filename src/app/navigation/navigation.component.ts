import { Component, Input, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Router } from '@angular/router';
import { WeatherData } from '../models/weather-data.model';
import { homedir } from 'os';
export enum Tabs {home, statistics, about};
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  @Input() weatherData: WeatherData;
  dataToggle: boolean = false;
  public get Tabs(): typeof Tabs {
    return Tabs; 
  }  
  activeTab: Tabs = Tabs[this.router.url.substring(1)];
  
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
    // this.data.weatherData.next(this.weatherData);
    this.router.navigateByUrl(path);
    }
}
