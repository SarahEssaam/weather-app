import { Injectable } from "@angular/core";
import { ClimateAverage } from "../models/climate-average.model";

export class DataProvider {
      climateAverages: Array<ClimateAverage>;
     public constructor() {}
}