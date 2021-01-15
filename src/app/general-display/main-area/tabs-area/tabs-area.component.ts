import { Component, Input, OnInit } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';

@Component({
  selector: 'app-tabs-area',
  templateUrl: './tabs-area.component.html',
  styleUrls: ['./tabs-area.component.css']
})

export class TabsAreaComponent implements OnInit {
  @Input() weatherData: WeatherData;
  activeTab: string = 'Now';

  constructor() { }

  ngOnInit(): void {
    console.log(this.weatherData)
  }
  changeTab(tab: string){
    console.log("changeing tab to");
    console.log(tab);
    this.activeTab = tab;
  }
}
