import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';
import { D3ChartComponent } from '../d3-chart/d3-chart.component';
import { Titles } from '../title.model';

@Component({
  selector: 'app-dynamic-graphs',
  templateUrl: './dynamic-graphs.component.html',
  styleUrls: ['./dynamic-graphs.component.css']
})
export class DynamicGraphsComponent implements OnInit {
  @Input() weatherData: WeatherData;
  @ViewChild(D3ChartComponent) d3ChartComp: D3ChartComponent;
  activeChart: string;
  readonly defaultKey: string = 'avgMaxTemp';
  allGraphKeys = ['avgMaxTemp', 'avgTemp', 'absMinTemp', 'avgMinTemp', 'absMaxTemp', 'avgDryDays', 'avgSnowDays', 'avgThunderDays', 'avgFogDays', 'avgRainDays']
  public get Titles(): typeof Titles {
    return Titles; 
  }
  constructor(public data: DataService) { }

  ngOnInit(): void {
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in DynamicGraphsComponent, subscribed to new value");
      this.weatherData = newWeatherData;
    });
    this.activeChart = this.defaultKey;
  }
  onSelectOption(event:Event, key:string){
    this.activeChart = key;
    this.d3ChartComp.redrawGraph(key);
  }
  
}
