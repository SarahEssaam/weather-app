import { Component, Input, OnInit } from '@angular/core';
import { Weather } from 'src/app/models/weather.model';

@Component({
  selector: 'app-hourly-area',
  templateUrl: './hourly-area.component.html',
  styleUrls: ['./hourly-area.component.css']
})
export class HourlyAreaComponent implements OnInit {
  @Input() weather: Weather;

  constructor() { }

  ngOnInit(): void {
    console.log(this.weather);
  }

}
