export interface CurrentWeather {
    temp_C: number;
    temp_F: number;
    weatherIconUrl: Array<{value: string}>;
    weatherDesc: Array<{value: string}>;
    windspeedMiles: number;
    windspeedKmph: number;
    humidity:number;
    visibility:number;
    cloudcover: number;
    FeelsLikeC: number;
    FeelsLikeF: number;
  
}