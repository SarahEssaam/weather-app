import { Component, Input, OnInit } from '@angular/core';
import { CurrentWeather } from 'src/app/models/current-weather.model';

@Component({
  selector: 'app-now-area',
  templateUrl: './now-area.component.html',
  styleUrls: ['./now-area.component.css']
})
export class NowAreaComponent implements OnInit {
  @Input() currentWeather: CurrentWeather;
  constructor() { }

  ngOnInit(): void {
    console.log(this.currentWeather);
  }

}
