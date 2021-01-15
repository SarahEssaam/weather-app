export interface TimeZone {
    localtime: string;
    utcOffset: string;
    zone: string;
    // constructor(timeZone: Array<any>){
    //     this.localtime = timeZone[0].localtime;
    //     this.utcoffset = timeZone[0].utcOffset;
    //     console.log(this.utcoffset);
    //     this.zone = timeZone[0].zone;
    // }
}