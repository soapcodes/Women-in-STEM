var WIDTH = 800
var HEIGHT = 450
var TOP = 20
var RIGHT = 90
var BOTTOM = 180
var LEFT = 100
var PADDING = 130

var colorsFM = ['#8889AF', '#88AF9B']

function eraseSVG(graphNum){
    
    switch (graphNum){
        case 1:
            d3.select("#barGraph").select("svg").remove();
            break;
        case 2:
            d3.select("#barGraph2").select("svg").remove();
            break;
        case 3:
            d3.select("#barGraph3").select("svg").remove();
            break;
        case 4:
            d3.select("#barGraph4").select("svg").remove();
            break;
    }

}

function loadVis1(xVal, yVal) {
    
    eraseSVG(1);
    
    // set the dimensions and margins of the graph
var margin = {top: TOP, right: RIGHT, bottom: BOTTOM, left: LEFT},
    width = WIDTH - margin.left - margin.right,
    height = HEIGHT - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barGraph")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var data_names = ["data/province.csv", "data/education.csv", "data/age.csv"]
    
    var data_name = data_names[xVal-1]
    

    // Parse the Data
    d3.csv(data_name, function(data) {

        // format the data
      data.forEach(function(d) { 
        d.total = +d.total;
        d.science = +d.science;
        d.eng = +d.eng;
        d.math = +d.math;
      });

      // List of subgroups = header of the csv files
      var total_grad = [data.columns[8], data.columns[4]]
      var science_grad = [data.columns[5], data.columns[1]]
      var eng_grad = [data.columns[6], data.columns[2]]
      var math_grad = [data.columns[7], data.columns[3]]
      
      var values = total_grad

      // List of groups = species here = value of the first column called group -> I show them on the X axis
      var groups = d3.map(data, function(d){return(d.key)}).keys()

      // Add X axis
      var x = d3.scaleBand()
          .domain(groups)
          .range([0, width])
          .padding([0.2])
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")  
            .style("text-anchor", "end")
            .style("font", "0.9em 'Work Sans'")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-35)"); 
        switch(yVal) {
          case 2:
            values = science_grad
            break;
          case 3:
            values = eng_grad
            break;
          case 4:
            values = math_grad
            break;
          default:
            values = total_grad;
        }
        
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, d3.max(data, function(d) {
            switch(yVal) {
          case 2:
            return d.science
            break;
          case 3:
            return d.eng
            break;
          case 4:
            return d.math
            break;
          default:
            return d.total
        }
        })])
        .range([ height, 0 ]).nice();
      svg.append("g")
        .call(d3.axisLeft(y));
        
        // Add titles to axes
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (-PADDING/2) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Graduates");
        
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Most basic stacked barplot in d3.js
*    Author: Holtz Yan
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://www.d3-graph-gallery.com/graph/barplot_stacked_basicWide.html
*
***************************************************************************************/
        
        var color = d3.scaleOrdinal()
            .domain(values)
            .range(colorsFM)

        //Stack per subgroup
        var stackedData = d3.stack()
        .keys(values)
        (data)
        
      // Show the bars
      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
          .attr("fill", function(d) { return color(d.key); })
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(function(d) { return d; })
          .enter().append("rect")
            .attr("x", function(d) { return x(d.data.key); })
            .attr("y", function(d) { return y(0); })
            .attr("height", function(d) { return y(d[0]) - y(0); })
            .attr("width",x.bandwidth())

/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Basic animation on barplot in d3.js
*    Author: Holtz Yan
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://www.d3-graph-gallery.com/graph/barplot_stacked_basicWide.html
*
***************************************************************************************/
        
        // Animation
        svg.selectAll("rect")
          .transition()
          .duration(800)
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .delay(function(d,i){console.log(i) ; return(i*100)})
        
                var colorLgnd = colorsFM;
    
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Stacked bar chart with tooltips
*    Author: Michael Stanaland
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: http://bl.ocks.org/mstanaland/6100713
*
***************************************************************************************/
        
        // Draw legend
        var legend = svg.selectAll(".legend")
          .data(colorLgnd)
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });

        legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", function(d, i) {return colorLgnd.slice().reverse()[i];});

        legend.append("text")
          .attr("x", width + 5)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "start")
          .text(function(d, i) { 
            switch (i) {
              case 0: return "Female";
              case 1: return "Male";
            }
          });
    })

}

function loadVis2(xVal, yVal) {
    
    eraseSVG(2);
    
    // set the dimensions and margins of the graph
var margin = {top: TOP, right: RIGHT, bottom: BOTTOM, left: LEFT},
    width = WIDTH - margin.left - margin.right,
    height = HEIGHT - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barGraph2")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var data_names = ["data/province.csv", "data/education.csv", "data/age.csv"]
    
    var data_name = data_names[xVal-1]
    

    // Parse the Data
    d3.csv(data_name, function(data) {

        // format the data
      data.forEach(function(d) { 
      });

      // List of subgroups = header of the csv files
      var total_grad = [data.columns[20], data.columns[16]]
      var science_grad = [data.columns[17], data.columns[13]]
      var eng_grad = [data.columns[18], data.columns[14]]
      var math_grad = [data.columns[19], data.columns[15]]
      var deet_grad = data.columns.slice(21, 27).reverse();
      
      var values = total_grad

      // List of groups = species here = value of the first column called group -> I show them on the X axis
      var groups = d3.map(data, function(d){return(d.key)}).keys()

      // Add X axis
      var x = d3.scaleBand()
          .domain(groups)
          .range([0, width])
          .padding([0.2])
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")  
            .style("text-anchor", "end")
            .style("font", "0.9em 'Work Sans'")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-35)");     
    
        switch(yVal) {
          case 2:
            values = science_grad
            break;
          case 3:
            values = eng_grad
            break;
          case 4:
            values = math_grad
            break;
          case 5:
            values = deet_grad;
            break;          
          default:
            values = total_grad;
        }
        
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 1])
        .range([ height, 0 ]).nice();
      svg.append("g")
        .call(d3.axisLeft(y));
  
        // now add titles to the axes
        svg.append("text")
            .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
            .attr("transform", "translate("+ (-PADDING/2) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
            .text("Graduation Rate");
        
        var colorRange
        
        if(values == deet_grad){
            colorRange = ['#8889AF','#8889AF', '#8889AF', '#88AF9B', '#88AF9B', '#88AF9B']
        }
        else{
            colorRange = colorsFM
        }
        var color = d3.scaleOrdinal()
            .domain(values)
            .range(colorRange)

/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Most basic stacked barplot in d3.js
*    Author: Holtz Yan
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://www.d3-graph-gallery.com/graph/barplot_stacked_basicWide.html
*
***************************************************************************************/     
        
        // Stack data per subgroup
        var stackedData = d3.stack()
        .keys(values)
        (data)
        
      // Show the bars
      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
          .attr("fill", function(d) { return color(d.key); })
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(function(d) { return d; })
          .enter().append("rect")
            .attr("x", function(d) { return x(d.data.key); })
            .attr("y", function(d) { return y(0); })
            .attr("height", function(d) { return y(d[0]) - y(0); })
            .attr("width",x.bandwidth())
            .attr("style", "outline: 0.09em solid white;")
        
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Basic animation on barplot in d3.js
*    Author: Holtz Yan
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://www.d3-graph-gallery.com/graph/barplot_stacked_basicWide.html
*
***************************************************************************************/
        
        // Animation
        svg.selectAll("rect")
          .transition()
          .duration(800)
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .delay(function(d,i){console.log(i) ; return(i*100)})

        var colorLgnd = colorsFM
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Stacked bar chart with tooltips
*    Author: Michael Stanaland
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: http://bl.ocks.org/mstanaland/6100713
*
***************************************************************************************/
        
        // Draw legend
        var legend = svg.selectAll(".legend")
          .data(colorLgnd)
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });

        legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", function(d, i) {return colorLgnd.slice().reverse()[i];});

        legend.append("text")
          .attr("x", width + 5)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "start")
          .text(function(d, i) { 
            switch (i) {
              case 0: return "Female";
              case 1: return "Male";
            }
          });
          
    })

}

function loadVis3(xVal, yVal) {
    
    eraseSVG(3);
    
    // set the dimensions and margins of the graph
var margin = {top: TOP, right: RIGHT, bottom: BOTTOM, left: LEFT},
    width = WIDTH - margin.left - margin.right,
    height = HEIGHT - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barGraph3")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var data_names = ["data/province.csv", "data/education.csv", "data/age.csv"]
    
    var data_name = data_names[xVal-1]
    
    // Parse the Data
    d3.csv(data_name, function(data) {
        
    // format the data
      data.forEach(function(d) { 
        d.fshare_total = +d.fshare_total;
        d.fshare_science = +d.fshare_science;
        d.fshare_eng = +d.fshare_eng;
        d.fshare_eng = +d.fshare_math;
      });

    // X axis
    var x = d3.scaleBand()
      .range([ 0, width ])
      .domain(data.map(function(d) { return d.key; }))
      .padding(0.2);
    svg.append("g")
      .attr("transform", "translate(0," + height + ")")
      .call(d3.axisBottom(x))
      .selectAll("text")
        .attr("transform", "translate(-10,0)rotate(-35)")
        .style("text-anchor", "end")
        .style("font", "0.9em 'Work Sans'");

    // Add Y axis
    var y = d3.scaleLinear()
      .domain([0, 1])
      .range([ height, 0]).nice()
    svg.append("g")
      .call(d3.axisLeft(y));
        
    // Add axes titles
    svg.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ (-PADDING/2) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
        .text("% Female Share");

    // Bars
    svg.selectAll("mybar")
      .data(data)
      .enter()
      .append("rect")
        .attr("x", function(d) { return x(d.key); })
        .attr("width", x.bandwidth())
        // no bar at the beginning thus:
        .attr("height", function(d) { return height - y(0); }) // always equal to 0
        .attr("y", function(d) { return y(0); })
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Basic animation on barplot in d3.js
*    Author: Holtz Yan
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://www.d3-graph-gallery.com/graph/barplot_stacked_basicWide.html
*
***************************************************************************************/
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Line Chart on Bar Chart (D3.js V4)
*    Author: Hitoshi Takeuchi
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: https://bl.ocks.org/htakeuchi/a60c0ecb55713c06c054c26c6dbed57a
*
***************************************************************************************/    // Animation
    svg.selectAll("rect")
      .transition()
      .duration(800)
      .attr("y", function(d) {
          switch(yVal) {
          case 2:
            return y(d.fshare_science)
            break;
          case 3:
            return y(d.fshare_eng)
            break;
          case 4:
            return y(d.fshare_math)
            break;
          default:
            return y(d.fshare_total)
        }
    })
      .attr("class", function(d) {
          var s = "bar ";
          var classSize = 0.1;

          switch(yVal) {
          case 2:
            if (d.fshare_science < classSize) {
            return s + "bar1";
          } else if (d.fshare_science < classSize * 2) {
            return s + "bar2";
          } else if (d.fshare_science < classSize * 3) {
            return s + "bar3";
          } else if (d.fshare_science < classSize * 4) {
            return s + "bar4";
          } else if (d.fshare_science < classSize * 5) {
            return s + "bar5";
          } else {
            return s + "bar6";
          }
            break;
          case 3:
            if (d.fshare_eng < classSize) {
            return s + "bar1";
          } else if (d.fshare_eng < classSize * 2) {
            return s + "bar2";
          } else if (d.fshare_eng < classSize * 3) {
            return s + "bar3";
          } else if (d.fshare_eng < classSize * 4) {
            return s + "bar4";
          } else if (d.fshare_eng < classSize * 5) {
            return s + "bar5";
          } else {
            return s + "bar6";
          }
            break;
          case 4:
            if (d.fshare_math < classSize) {
            return s + "bar1";
          } else if (d.fshare_math < classSize * 2) {
            return s + "bar2";
          } else if (d.fshare_math < classSize * 3) {
            return s + "bar3";
          } else if (d.fshare_math < classSize * 4) {
            return s + "bar4";
          } else if (d.fshare_math < classSize * 5) {
            return s + "bar5";
          } else {
            return s + "bar6";
          }
            break;
          default:
            if (d.fshare_total < classSize) {
            return s + "bar1";
          } else if (d.fshare_total < classSize * 2) {
            return s + "bar2";
          } else if (d.fshare_total < classSize * 3) {
            return s + "bar3";
          } else if (d.fshare_total < classSize * 4) {
            return s + "bar4";
          } else if (d.fshare_total < classSize * 5) {
            return s + "bar5";
          } else {
            return s + "bar6";
          }
        }
        
        })
      .attr("height", function(d) {
        switch(yVal) {
          case 2:
            return height - y(d.fshare_science)
            break;
          case 3:
            return height - y(d.fshare_eng)
            return height - y(d.fshare_eng)
            return height - y(d.fshare_eng)
            break;
          case 4:
            return height - y(d.fshare_math)
            break;
          default:
            return height - y(d.fshare_total)
        }
    })
      .delay(function(d,i){console.log(i) ; return(i*100)})
        
        var colorLgnd = ['#ebefe7', '#d7dfcf', '#c3cfb7', '#afbf9f', '#9caf88']
/***************************************************************************************
*   This program contains a code snippet from: 
*
*    Title: Stacked bar chart with tooltips
*    Author: Michael Stanaland
*    Date: 03/21/2021
*    Code version: 1.0
*    Availability: http://bl.ocks.org/mstanaland/6100713
*
***************************************************************************************/
        // Draw legend
        var legend = svg.selectAll(".legend")
          .data(colorLgnd)
          .enter().append("g")
          .attr("class", "legend")
          .attr("transform", function(d, i) { return "translate(30," + i * 19 + ")"; });

        legend.append("rect")
          .attr("x", width - 18)
          .attr("width", 18)
          .attr("height", 18)
          .style("fill", function(d, i) {return colorLgnd.slice()[i];});
        
        legend.append("text")
          .attr("x", width + 5)
          .attr("y", 9)
          .attr("dy", ".35em")
          .style("text-anchor", "start")
          .text(function(d, i) { 
            switch (i) {
              case 0: return "< 0.1";
              case 1: return "< 0.2";
              case 2: return "< 0.4";
              case 3: return "< 0.5";
              case 4: return "< 0.6";
            }
          });


    })
}
/**
function loadVis4(xVal, yVal) {
    
    eraseSVG(4);
    
    // set the dimensions and margins of the graph
var margin = {top: TOP, right: RIGHT, bottom: BOTTOM, left: LEFT},
    width = WIDTH - margin.left - margin.right,
    height = HEIGHT - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#barGraph4")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");
    
    var data_names = ["data/province.csv", "data/education.csv", "data/age.csv"]
    
    var data_name = data_names[xVal-1]
    

    // Parse the Data
    d3.csv(data_name, function(data) {

        // format the data
      data.forEach(function(d) { 
      });

      // List of subgroups = header of the csv files
      var group_grad = [data.columns[13], data.columns[14], data.columns[15]]
      var total_grad = [data.columns[16]]
      
      var values = total_grad
                        
      if(yVal == 5)
        values = group_grad

      // List of groups = species here = value of the first column called group -> I show them on the X axis
      var groups = d3.map(data, function(d){return(d.key)}).keys()

      // Add X axis
      var x = d3.scaleBand()
          .domain(groups)
          .range([0, width])
          .padding([0.2])
      svg.append("g")
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x).tickSizeOuter(0))
        .selectAll("text")  
            .style("text-anchor", "end")
            .style("font", "0.9em 'Work Sans'")
            .attr("dx", "-.8em")
            .attr("dy", ".15em")
            .attr("transform", "rotate(-35)");     
        
      // Add Y axis
      var y = d3.scaleLinear()
        .domain([0, 1.2])
        .range([ height, 0 ]).nice();
      svg.append("g")
        .call(d3.axisLeft(y));
        
        var color = d3.scaleOrdinal()
            .domain(values)
            .range(['#D9BCFF','#BCFFD9','pink'])

        //stack the data? --> stack per subgroup
        var stackedData = d3.stack()
        .keys(values)
        (data)
        
      // Show the bars
      svg.append("g")
        .selectAll("g")
        // Enter in the stack data = loop key per key = group per group
        .data(stackedData)
        .enter().append("g")
          .attr("fill", function(d) { return color(d.key); })
          .selectAll("rect")
          // enter a second time = loop subgroup per subgroup to add all rectangles
          .data(function(d) { return d; })
          .enter().append("rect")
            .attr("x", function(d) { return x(d.data.key); })
            .attr("y", function(d) { return y(0); })
            .attr("height", function(d) { return y(d[0]) - y(0); })
            .attr("width",x.bandwidth())
        
        // Animation
        svg.selectAll("rect")
          .transition()
          .duration(800)
          .attr("y", function(d) { return y(d[1]); })
          .attr("height", function(d) { return y(d[0]) - y(d[1]); })
          .delay(function(d,i){console.log(i) ; return(i*100)})
    })

}
**/

function checkSelected(graphNum){
    
    var radios;
    var stemGroup = "eng";
    var xValue = 1;
    var yValue = 1;
    
    if (graphNum == 1)
        radios = document.getElementsByName('stemGroup');
    
    else if (graphNum == 2)
        radios = document.getElementsByName('stemGroup2');

    else if (graphNum == 3)
        radios = document.getElementsByName('stemGroup3');
    else
        radios = document.getElementsByName('stemGroup4');
    
    for(var i = 0; i < radios.length; i++)
        if(radios[i].checked)
            stemGroup = radios[i].value
       
    switch(stemGroup) {
          case "total":
            yValue = 1;
            break;
          case "sci":
            yValue = 2;
            break;
          case "eng":
            yValue = 3;
            break;
          case "math":
            yValue = 4;
            break;
           case "deet":
            yValue = 5;
            break;           
    }
    
    var ddl;

    if (graphNum == 1)
        ddl = document.getElementById("subsetButton");
    else if (graphNum == 2)
        ddl = document.getElementById("subsetButton2");
    else if (graphNum == 3)
        ddl = document.getElementById("subsetButton3");
    else
        ddl = document.getElementById("subsetButton4");
    
    var subset = ddl.value;
    
    switch(subset) {
          case "prov":
            xValue = 1;
            break;
          case "edu":
            xValue = 2;
            break;
          case "age":
            xValue = 3;
            break;
    }
    
    switch(graphNum) {
          case 1:
            loadVis1(xValue, yValue)
            break;
          case 2:
            loadVis2(xValue, yValue)
            break;
          case 3:
            loadVis3(xValue, yValue)
            break;
          case 4:
            loadVis4(xValue, yValue)
            break;
    }
    
}

// Display default graph view
loadVis1(1,1);
loadVis2(1,1);
loadVis3(1,1);
//loadVis4(1,1);