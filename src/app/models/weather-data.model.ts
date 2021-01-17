// declare var require: NodeRequire;

import { ClimateAverage } from "./climate-average.model";
import { CurrentWeather } from "./current-weather.model";
import { TimeZone } from "./timezone.model";
import { Weather } from "./weather.model";
import { Location } from "./location.model";


export class WeatherData {
    timeZone: TimeZone;
    currentWeather: CurrentWeather;
    weatherArr: Array<Weather>;
    climateAverages: Array<ClimateAverage>;
    query: string;
    currentLocation: Location;
    
    constructor (data: any, location?: Location){
        this.currentWeather = data.current_condition[0];
        console.log(data);
        // this.weather = data.weather;
        this.query = data.request[0].query;
        this.timeZone = data.time_zone[0];
        this.weatherArr = data.weather;
        this.climateAverages = data.ClimateAverages[0].month;
        
        this.currentLocation = location;
        
        // console.log(`this is weather ${this.weatherArr}`);
    }
    getCurrentTime(){
        // console.log(this.timeZone);
        return `${this.timeZone.localtime} (GMT+${this.timeZone.utcOffset})`;
    }
    getLocation() {
        if (this.query.includes("Lat")){
            let latitude, longitude: string;
            latitude = this.query.split(" ")[1];
            longitude = this.query.split(" ")[4];
            console.log(latitude);
            console.log(longitude);
            // var NodeGeocoder = require('node-geocoder');
            // var options = {
            // provider: 'google',
            // httpAdapter: 'https', // Default
            // apiKey: ' ', 
            // formatter: 'json' 
            // };
            // var geocoder = NodeGeocoder(options);
            // geocoder.reverse({lat:latitude, lon:longitude}, function(err, res) {
            // console.log(res);
            // });
            return "Cairo, Egypt";
        } else {
            return this.query;
        }
    }
}