import { Injectable } from "@angular/core";
import { ClimateAverage } from "../models/climate-average.model";

@Injectable()
export class DataProvider {
      climateAverages: Array<ClimateAverage>;
     public constructor() {}
}