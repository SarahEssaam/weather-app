import { Component, Input, OnInit } from '@angular/core';
import * as d3 from 'd3';
import { ClimateAverage } from 'src/app/models/climate-average.model';

@Component({
  selector: 'app-d3-chart',
  templateUrl: './d3-chart.component.html',
  styleUrls: ['./d3-chart.component.css']
})
export class D3ChartComponent implements OnInit {
  @Input() climateAverages: Array<ClimateAverage>;
  @Input() param: any;
  private svg;
  private margin = 50;
  private width = 750 - (this.margin * 2);
  private height = 400 - (this.margin * 2);
  @Input() id: string;
  constructor() { }


  ngOnInit(): void {
    console.log(this.climateAverages);
    console.log(this.param);
    this.createSvg();
    this.drawPlot();
  }
  private createSvg(): void {
    this.svg = d3.select("#"+this.id)
    .append("svg")
    .attr("width", this.width + (this.margin * 2))
    .attr("height", this.height + (this.margin * 2))
    .append("g")
    .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }
  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([0,12])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 100])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

    // Add dots
    const dots = this.svg.append('g');
    dots.selectAll("dot")
    .data(this.climateAverages)
    .enter()
    .append("circle")
    .attr("cx", d => x(d.index))
    .attr("cy", d => y(d.avgTemp))
    .attr("r", 7)
    .style("opacity", .5)
    .style("fill", "#69b3a2");

    // Add labels
    dots.selectAll("text")
    .data(this.climateAverages)
    .enter()
    .append("text")
    .text(d => d.Framework)
    .attr("x", d => x(d.index))
    .attr("y", d => y(d.avgTemp))
  }
}
