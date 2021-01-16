import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { WeatherData } from "../models/weather-data.model";

@Injectable({providedIn: 'root'})
export class DataService {
    weatherData: Subject<WeatherData> = new Subject();
    
}