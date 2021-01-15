export interface Location {
    areaName: Array<{value: string, name:string}>;
    country: Array<{value: string, name:string}>;
    region: Array<{value: string, name:string}>;
    latitude: number;
    longitude: number;
    population: number;
}