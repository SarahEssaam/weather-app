
export interface ClimateAverage extends Object{
    index: number;
    name: string; //month name
    avgMinTemp: number;
    avgMinTemp_F: number;
    avgMaxTemp: number;
    avgMaxTemp_F: number;
    absMinTemp: number;
    absMinTemp_F: number;
    absMaxTemp: number;
    absMaxTemp_F: number;
    avgTemp: number;
    avgTemp_F: number;

    avgDryDays: number;
    avgRainDays: number;
    avgSnowDays: number;
    avgThunderDays: number;
    avgFogDays: number;

    avgUVIndex: number;
    avgSunHour: number;

}

