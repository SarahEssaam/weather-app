import { HourlyWeather } from "./hourly-weather.model"

export interface Weather {
    date: string;
    maxtempC: number;
    mintempC: number;
    maxtempF: number;
    mintempF: number;
    avgTempC: number;
    avgTempF: number;
    hourly: Array<HourlyWeather>;
}