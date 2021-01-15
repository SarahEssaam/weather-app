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
    // constructor (currentCondition: Array<any>){
    //     this.temp_C = currentCondition[0].temp_C;
    //     this.temp_F = currentCondition[0].temp_F;
    //     this.weatherIconUrl = currentCondition[0].weatherIconUrl[0].value;
    //     this.weatherDesc = currentCondition[0].weatherDesc[0].value;
    //     this.windSpeedMi = currentCondition[0].windspeedMiles;
    //     this.windSpeedKm = currentCondition[0].windspeedKmph;
    //     this.humidity = currentCondition[0].humidity;
    //     this.visibility = currentCondition[0].visibility;
    //     this.cloudCover = currentCondition[0].cloudcover;
    //     this.feelsLikeC = currentCondition[0].FeelsLikeC;
    //     this.feelsLikeF = currentCondition[0].FeelsLikeF;
    // }

}