import { Time } from "@angular/common";
import { CurrentWeather } from "./current-weather.model";

export interface HourlyWeather extends CurrentWeather{
    time: Time;
}