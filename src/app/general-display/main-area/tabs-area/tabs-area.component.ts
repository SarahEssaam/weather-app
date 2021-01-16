import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
export enum Tab {
  Now,
  Hourly,
  Weekly
}
@Component({
  selector: 'app-tabs-area',
  templateUrl: './tabs-area.component.html',
  styleUrls: ['./tabs-area.component.css']
})

export class TabsAreaComponent implements OnInit {
  @Input() weatherData: WeatherData;
  public get Tab(): typeof Tab {
    return Tab; 
  }
  activeTab: Tab = Tab.Now;

  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherData)
  }
  changeTab(tab: Tab){
    console.log("changeing tab to");
    console.log(tab);
    this.activeTab = tab;
  }
}
