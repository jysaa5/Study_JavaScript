import * as d3 from "https://unpkg.com/d3?module";

const data = [100, 63, 75, 22, 10, 95];

const svg = d3.select("svg").attr("width", 500).attr("height", 300).append("g").attr("transform", `translate(0,0)`);

const xScale = d3
  .scaleLinear()
  .range([20, 480])
  .domain(d3.extent(data, (d, i) => i));

const yScale = d3.scaleLinear().range([280, 20]).domain([0, 100]);

const line = d3
  .line()
  .x((d, i) => xScale(i))
  .y((d) => yScale(d));

console.log(line(data));

svg.append("path").datum(data).attr("fill", "none").attr("stroke", "#76BF8A").attr("stroke-width", 3).attr("d", line);
