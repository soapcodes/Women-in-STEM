var width = 400, height = 350;
var margin = {top: 90, right: 20, bottom: 30, left: 80};

//data
var data = [ {"month":"JAN","patients":120}, {"month":"FEB","patients":50}, {"month":"MAR","patients":80}, {"month":"APR","patients":20}, {"month":"MAY","patients":100}, {"month":"JUN","patients":350}];

//x and y Scales
var xScale = d3.scale.ordinal()
.rangeRoundBands([0, width], .1);

var yScale = d3.scale.linear()
.range([height, 0]);

xScale.domain(data.map(function(d) { return d.month; }));
yScale.domain([0, d3.max(data, function(d) { return d.patients; })]);

//x and y Axes
var xAxis = d3.svg.axis()
.scale(xScale)
.orient("bottom")
.outerTickSize(0);

var yAxis = d3.svg.axis()
.scale(yScale)
.orient("left");


//create svg container
var svg = d3.select('#barGraph4')
.append("svg")
.attr("width", width + margin.left + margin.right)
.attr("height", height + margin.top + margin.bottom)
.append("g")
.attr("transform", "translate(" + margin.left + "," + margin.top + ")");        

// Horizontal grid
svg.append("g")         
  .call(d3.svg.axis().scale(yScale)
        .orient("left")
        .tickSize(-(height + margin.top + margin.bottom - 70), 0, 0)
        .tickFormat("")
       );

//create bars
var bars = svg.selectAll(".bar")
.data(data)
.enter()
.append("g");

bars.append("rect")
  .attr("x", function(d) { return xScale(d.month); })
  .attr("width", xScale.rangeBand())
  .attr("y", function(d) { return yScale(d.patients); })
  .attr("height", function(d) { return height - yScale(d.patients); })
  .on("click", function(d) {
		var txt = d3.select(this.nextSibling);
    
		if(txt.attr('opacity') === '0') {
      txt.attr('opacity', '1');
    } else {
    	txt.attr('opacity', '0');
    }
	});
  
bars.append("text")
  .attr("x", function(d) { return xScale(d.month); })
  .attr("y", function(d) { return yScale(d.patients) + 2 ; })
  .attr("dy", "1em")
  .attr("text-anchor", "middle")
  .attr("font-size", "16px")
  .attr("fill", "orange")
  .attr("opacity", '0')
  .attr("transform", function(d) { return "translate(20, -20)"; })
  .text(function(d) { return "hi"; });



//drawing the x axis on svg
svg.append("g")
  .attr("transform", "translate(0," + height + ")")
  .call(xAxis);

//drawing the y axis on svg
svg.append("g")
  .call(yAxis)
  .append("text")
  .attr("transform", "rotate(-90)")
  .attr("y", 6)
  .attr("dy", ".71em")
  .style("text-anchor", "end");

svg.selectAll(".tick")
  .filter(function (d) { return d === 0;     
                       }).remove();

    
    