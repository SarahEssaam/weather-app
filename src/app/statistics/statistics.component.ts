import { Component, OnInit } from '@angular/core';
import { DataProvider } from '../app-routing/data.provider';
import { ClimateAverage } from '../models/climate-average.model';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.css']
})
export class StatisticsComponent implements OnInit {
  climateAverages: Array <ClimateAverage>;
  constructor(public data: DataProvider) { 
  }

  ngOnInit(): void {
  //   this.activatedroute.data.subscribe(data => {
  //     this.climateAverages = data;
  // })
    this.climateAverages = this.data.climateAverages;
    // console.log("In stats");
    console.log(this.data.climateAverages);
    // console.log(DataProvider.climateAverages);
  }

}
