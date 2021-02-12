import { Component, ElementRef, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { ClimateAverage } from 'src/app/models/climate-average.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
// export class D3ChartComponent implements OnInit{
//   @Input() data: Array<any>;
//   @Input() param: {x:string, y:string};
//   @ViewChild('FigureRef') FigureRef: ElementRef;
//   private svg;
//   private margin = 50;
//   private width = 750 - (this.margin * 2);
//   private height = 400 - (this.margin * 2);
//   private marginData = { top: 15, right: 5, bottom: 15, left: 35 };
//   private barHeight = 6;

//   ngOnInit(): void {
    
//   }
//   // initialized: boolean = false;
//   constructor() {}
//   ngOnChanges(changes: SimpleChanges){
//     // if (this.initialized){
//       console.log("in ngOnchanges, weatherdata:");
//       console.log(this.data);
//       console.log(this.param);
//       // this.redrawGraph();
//   }
//   createSvg(){
//     this.svg = d3
//     .select(this.FigureRef.nativeElement)
//     .append("svg")
//     .attr("viewBox", `0 0 ${this.width + (this.margin * 2)} ${this.height + (this.margin * 2)}`)
//     .style(
//       "font",
//       "10px -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif"
//     ).append('g')
//     .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
//   }
//   drawGraph(){
//     const start = d3.min(this.data, d => d[this.param.x]);
//     const end = d3.max(this.data, d => d[this.param.x]);
//     const startY = d3.min(this.data, d => d[this.param.y]);
//     const endY = d3.max(this.data, d => d[this.param.y]);
//     const xScale = d3
//     .scaleTime()
//     .domain([start, end])
//     .range([this.margin, this.width]);
//     const yScale = d3
//     .scaleLinear()
//     .domain([startY, endY])
//     .nice()
//     .range([this.height , this.margin]);

//     const g = this.svg
//     .selectAll("g")
//     .data(this.data)
//     .join("g")
//     // .attr(
//     //   "transform",
//     //   d => `translate(${xScale(d.startTime)}, ${this.height - this.margin})`
//     // );
//     g.append("rect")
//     .attr("width", d => xScale(d[this.param.x]))
//     .attr("height", this.barHeight)
//     .attr("rx", 3)
//     .attr("ry", 3)
//     .attr("fill", "#ccc");
//   }
//   drawPlot(){
//     const param = this.param.y;
//     const paramx = this.param.x;
//     var x = d3.scaleTime()
//     .domain(this.data.map((d)=>{
//       return d[paramx];
//     })).range([ 0, this.width ]);
   
//     this.svg.append("g")
//       .attr("transform", "translate(0," + this.height + ")")
//       .call(d3.axisBottom(x));   
	
//     var y = d3.scaleLinear()
//     .domain([d3.min(this.data, function(d) {console.log(d);console.log(param); return + d[param]; }), d3.max(this.data, function(d) { return + d[param]; })])
//     .range([ this.height, 0]);
//     this.svg.append("g")
//     .call(d3.axisLeft(y));
  
//     console.log("drawing 1");
//     this.svg.append("path")
//     .datum(this.data)
//     .attr("fill", "none")
//     .attr("stroke", "steelblue")
//     .attr("stroke-width", 1.5)
//     .attr("d", d3.line()
//       .x(function(d: any) { console.log(typeof d[paramx]);return x(d[paramx]) })
//       .y(function(d: any) { return y(Math.round(d[param])) })
//       );
//       console.log("drawing 2");
//     // Add dots
//     const dots = this.svg.append('g');

//     dots.selectAll("dot")
//     .data(this.data)
//     .enter()
//     .append("circle")
//     .attr("cx", d => x(d[paramx]))
//     .attr("cy", d => y(d[param]))
//     .attr("r", 7)
//     .style("opacity", .5)
//     .style("fill", "red"); 
//     console.log("drawing 3");
//     // Add labels
//     dots.selectAll("text")
//     .data(this.data)
//     .enter()
//     .append("text")
//     .text(d => d.Framework)
//     .attr("x", d => x(d[paramx]))
//     .attr("y", d => y(d[param]));
//     console.log("drawing 4");
//   }
  
  
//   ngAfterViewInit() {
//     console.log(this.FigureRef);
//     if(this.svg == undefined) {
//       console.log("drawwing graph");
//       console.log(this.param);
//       console.log(this.data[this.param.x])
//       console.log(this.data[this.param.y]);
//       this.createSvg();
//       this.drawPlot();
//     } else {
//       // this.redrawGraph(this.param);
//       console.log("Redrawwing graph");
//     }
//   }

  
// }
export class D3ChartComponent implements OnInit{
  @Input() weatherData: WeatherData;
  climateAverages: Array<ClimateAverage>;
  @Input() param: string;
  private svg;
  private margin = 20;
  private width = 600 - (this.margin * 2);
  private height = 300 - (this.margin * 2);

  initialized: boolean = false;
  // @Input() id: string;
  @ViewChild('FigureRef') FigureRef: ElementRef;
  constructor(public data: DataService) { }


  ngOnInit(): void {
    console.log("id:");
    // console.log(this.id);
    this.data.weatherData.subscribe((newWeatherData)=>{
      console.log("in D3, subscribed to new value");
      this.weatherData = newWeatherData;
      console.log(this.weatherData);
      this.climateAverages = this.weatherData.climateAverages;
      console.log("svg:");
      console.log(this.svg);
      console.log(this.param);
    });
    this.initialized = true;
  }
  ngOnChanges(changes: SimpleChanges){
    if (this.initialized){
      console.log("in ngOnchanges, wethrdata:");
      console.log(this.weatherData);
      this.redrawGraph(this.param);
    }
  }
  ngAfterViewInit() {
    console.log(this.FigureRef);
    if(this.svg == undefined) {
      this.drawGraph();
    } else {
      this.redrawGraph(this.param);
    }
  }
  redrawGraph(param:string){
    console.log("Redrawing");
    // this.svg.remove();
    // d3.select("svg").remove();
    this.svg.selectAll("*").remove();
    // this.createSvg();
    this.param=param;
    this.drawPlot(this.param);
    // this.svg.selectAll("dots").data(this.climateAverages).exit.remove();   
    // console.log(this.svg);
  }
  private drawGraph(){
    console.log("drawing");
    this.createSvg();
    this.drawPlot(this.param);  
  }
  private createSvg(): void {
    console.log(this.FigureRef);
    this.svg = d3.select(this.FigureRef.nativeElement)   
    .append("svg")
    // .attr("viewBox", `0 0 ${this.width + (this.margin * 2)} ${this.height + (this.margin * 2)}`)
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  
  drawPlot(param: string){
    var x = d3.scalePoint()
    .domain(this.climateAverages.map((d)=>{
      return d.name;
    })).range([ 0, this.width ]);
   
    this.svg.append("g")
      .attr("transform", "translate(0," + this.height + ")")
      .call(d3.axisBottom(x));   
		
    var y = d3.scaleLinear()
    .domain([d3.min(this.climateAverages, function(d) { return + d[param]; }), d3.max(this.climateAverages, function(d) { return + d[param]; })])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));
    const month = {
      January:1, February:2, March:3, April:4, May:5,
      June:6, July:7, August:8, September:9, October:10, 
      November:11, December:12};
    
    console.log("drawing 1");
    this.svg.append("path")
    .datum(this.climateAverages)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d: any) { console.log(d.name);return x(d.name) })
      .y(function(d: any) { return y(Math.round(d[param])) })
      );
      console.log("drawing 2");
    // Add dots
    const dots = this.svg.append('g');

    dots.selectAll("dot")
    .data(this.climateAverages)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.name))
    .attr("cy", d => y(d[param]))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "red"); 
    console.log("drawing 3");
    // Add labels
    dots.selectAll("text")
    .data(this.climateAverages)
    .enter()
    .append("text")
    .text(d => d.Framework)
    .attr("x", d => x(d.name))
    .attr("y", d => y(d[param]));
    console.log("drawing 4");
  }
  
}