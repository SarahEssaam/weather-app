import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { WeatherData } from "../models/weather-data.model";

@Injectable({providedIn: 'root'})
export class DataService {
    weatherData: BehaviorSubject<WeatherData> = new BehaviorSubject(undefined);
    public get subjectValue() {
        return this.weatherData.value;
      }
}