import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ClimateAverage } from 'src/app/models/climate-average.model';
import { WeatherData } from 'src/app/models/weather-data.model';


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
  @Input() id: string;
  constructor() { }


  ngOnInit(): void {
    // console.log(this.climateAverages);
    console.log(this.param);
    this.createSvg();
    this.climateAverages = this.weatherData.climateAverages;
    console.log(this.climateAverages);
    this.drawPlot(this.param);  
  }
  private createSvg(): void {
    this.svg = d3.select("#"+this.id)   
    .append("svg")
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
