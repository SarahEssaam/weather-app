import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import * as d3 from 'd3';
import { ClimateAverage } from 'src/app/models/climate-average.model';
import { WeatherData } from 'src/app/models/weather-data.model';
import { DataService } from 'src/app/services/data.service';


@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {
  @Input() weatherData: WeatherData;
  climateAverages: Array<ClimateAverage>;
  @Input() param: string;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  private x;
  private y;
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
    
  }
  private ngAfterViewInit() {
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
  
  private drawPlot(param: string){
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
  
    console.log("drawing 1");
    this.svg.append("path")
    .datum(this.climateAverages)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("d", d3.line()
      .x(function(d: any) { return x(d.name) })
      .y(function(d: any) { return y(d[param]) })
      )
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

    // Add labels
    dots.selectAll("text")
    .data(this.climateAverages)
    .enter()
    .append("text")
    .text(d => d.Framework)
    .attr("x", d => x(d.name))
    .attr("y", d => y(d[param]))    
  }
}