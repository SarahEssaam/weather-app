import { CurrentWeather } from "./current-weather.model"
import { WeatherData } from "./weather-data.model"

export interface Weather {
    date: Date;
    maxtempC: number;
    mintempC: number;
    maxtempF: number;
    mintempF: number;
    avgTempC: number;
    avgTempF: number;
    hourlyWeather: Array<CurrentWeather>;
}