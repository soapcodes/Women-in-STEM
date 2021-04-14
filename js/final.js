var data;

var data1 = [
    {
        "key": "Nunavut",
        "fshare_science": 0.489795918,
        "fshare_eng": 0.195121951,
        "fshare_math": 0.378378378,
        "fshare_total": 0.359447005,
        "fsect_science": 0.221198157,
        "fsect_eng": 0.073732719,
        "fsect_math": 0.064516129,
        "class": "bar1"
    },
    {
        "key": "Northwest Territories",
        "fshare_science": 0.50310559,
        "fshare_eng": 0.178137652,
        "fshare_math": 0.3875,
        "fshare_total": 0.365177196,
        "fsect_science": 0.249614792,
        "fsect_eng": 0.06779661,
        "fsect_math": 0.047765794,
        "class": "bar2"
    },
    {
        "key": "Yukon",
        "fshare_science": 0.5,
        "fshare_eng": 0.191964286,
        "fshare_math": 0.44,
        "fshare_total": 0.388724036,
        "fsect_science": 0.259643917,
        "fsect_eng": 0.06379822,
        "fsect_math": 0.065281899,
        "class": "bar3"
    },
    {
        "key": "Prince Edward Island",
        "fshare_science": 0.551573427,
        "fshare_eng": 0.133239832,
        "fshare_math": 0.320754717,
        "fshare_total": 0.376606684,
        "fsect_science": 0.270351328,
        "fsect_eng": 0.040702656,
        "fsect_math": 0.065552699,
        "class": "bar4"
    },
    {
        "key": "Newfoundland and Labrador",
        "fshare_science": 0.497136722,
        "fshare_eng": 0.185363505,
        "fshare_math": 0.406662837,
        "fshare_total": 0.329957417,
        "fsect_science": 0.159857291,
        "fsect_eng": 0.088617793,
        "fsect_math": 0.081482334,
        "class": "bar5"
    },
    {
        "key": "New Brunswick",
        "fshare_science": 0.511378499,
        "fshare_eng": 0.125350421,
        "fshare_math": 0.304479879,
        "fshare_total": 0.295432713,
        "fsect_science": 0.170727447,
        "fsect_eng": 0.054667715,
        "fsect_math": 0.070037551,
        "class": "bar6"
    },
    {
        "key": "Saskatchewan",
        "fshare_science": 0.489477041,
        "fshare_eng": 0.155777419,
        "fshare_math": 0.327315279,
        "fshare_total": 0.317904691,
        "fsect_science": 0.190991664,
        "fsect_eng": 0.066007217,
        "fsect_math": 0.060905811,
        "class": "bar1"
    },
    {
        "key": "Nova Scotia",
        "fshare_science": 0.521029927,
        "fshare_eng": 0.127467744,
        "fshare_math": 0.338193911,
        "fshare_total": 0.338231982,
        "fsect_science": 0.217623874,
        "fsect_eng": 0.046171171,
        "fsect_math": 0.074436937,
        "class": "bar2"
    },
    {
        "key": "Manitoba",
        "fshare_science": 0.49925871,
        "fshare_eng": 0.151293314,
        "fshare_math": 0.339824121,
        "fshare_total": 0.32773189,
        "fsect_science": 0.191825691,
        "fsect_eng": 0.058862622,
        "fsect_math": 0.077043577,
        "class": "bar3"
    },
    {
        "key": "Alberta",
        "fshare_science": 0.490432277,
        "fshare_eng": 0.187333474,
        "fshare_math": 0.33596338,
        "fshare_total": 0.312828591,
        "fsect_science": 0.164469615,
        "fsect_eng": 0.094450673,
        "fsect_math": 0.053908304,
        "class": "bar4"
    },
    {
        "key": "British Columbia",
        "fshare_science": 0.478021039,
        "fshare_eng": 0.168202448,
        "fshare_math": 0.313793547,
        "fshare_total": 0.31728649,
        "fsect_science": 0.181453481,
        "fsect_eng": 0.067985991,
        "fsect_math": 0.067847018,
        "class": "bar5"
    },
    {
        "key": "Quebec",
        "fshare_science": 0.468837399,
        "fshare_eng": 0.152299566,
        "fshare_math": 0.278468659,
        "fshare_total": 0.285583913,
        "fsect_science": 0.156086402,
        "fsect_eng": 0.067915128,
        "fsect_math": 0.061582384,
        "class": "bar6"
    },
    {
        "key": "Ontario",
        "fshare_science": 0.521254633,
        "fshare_eng": 0.1691083,
        "fshare_math": 0.331491257,
        "fshare_total": 0.323485745,
        "fsect_science": 0.172530853,
        "fsect_eng": 0.073748515,
        "fsect_math": 0.077206377,
        "class": "bar1"
    },
    {
        "key": "Canada",
        "fshare_science": 0.499376319,
        "fshare_eng": 0.166394521,
        "fshare_math": 0.319567582,
        "fshare_total": 0.31403777,
        "fsect_science": 0.171530037,
        "fsect_eng": 0.073100507,
        "fsect_math": 0.069407227,
        "class": "bar2"
    }
];

var data3 = [
    {
        "key": "55 to 64",
        "fshare_science": 0.419132,
        "fshare_eng": 0.113093716,
        "fshare_math": 0.3652026,
        "fshare_total": 0.260782761,
        "fsect_science": 0.136958387,
        "fsect_eng": 0.054747055,
        "fsect_math": 0.069077319,
        "class": "bar1"
    },
    {
        "key": "45 to 54",
        "fshare_science": 0.473699,
        "fshare_eng": 0.176451399,
        "fshare_math": 0.346502788,
        "fshare_total": 0.301536745,
        "fsect_science": 0.13718527,
        "fsect_eng": 0.084881315,
        "fsect_math": 0.07947016,
        "class": "bar2"
    },
    {
        "key": "25 to 34",
        "fshare_science": 0.572107,
        "fshare_eng": 0.210924145,
        "fshare_math": 0.296094226,
        "fshare_total": 0.36091714,
        "fsect_science": 0.206253127,
        "fsect_eng": 0.085894842,
        "fsect_math": 0.068769171,
        "class": "bar3"
    },
    {
        "key": "35 to 44",
        "fshare_science": 0.555735,
        "fshare_eng": 0.20963203,
        "fshare_math": 0.304146924,
        "fshare_total": 0.346047839,
        "fsect_science": 0.177152801,
        "fsect_eng": 0.084944714,
        "fsect_math": 0.083950324,
        "class": "bar4"
    },
    {
        "key": "25 to 64",
        "fshare_science": 0.516531,
        "fshare_eng": 0.181038892,
        "fshare_math": 0.321641246,
        "fshare_total": 0.322984152,
        "fsect_science": 0.167486688,
        "fsect_eng": 0.079638707,
        "fsect_math": 0.075858757,
        "class": "bar5"
    }
];

var data2 = [
    {
        "key": "Earned doctorate",
        "fshare_science": 0.340446,
        "fshare_eng": 0.148301,
        "fshare_math": 0.227476559,
        "fshare_total": 0.283361027,
        "fsect_science": 0.225183088,
        "fsect_eng": 0.035284223,
        "fsect_math": 0.022893717,
        "class": "bar1"
    },
    {
        "key": "Master's degree",
        "fshare_science": 0.503673,
        "fshare_eng": 0.212045,
        "fshare_math": 0.343230279,
        "fshare_total": 0.350939055,
        "fsect_science": 0.191231974,
        "fsect_eng": 0.086003639,
        "fsect_math": 0.073703442,
        "class": "bar2"
    },
    {
        "key": "College, CEGEP or other non-university certificate or diploma",
        "fshare_science": 0.51852,
        "fshare_eng": 0.114027,
        "fshare_math": 0.3037663,
        "fshare_total": 0.237882625,
        "fsect_science": 0.088587053,
        "fsect_eng": 0.061642965,
        "fsect_math": 0.087652608,
        "class": "bar3"
    },
    {
        "key": "Bachelor's degree",
        "fshare_science": 0.525029,
        "fshare_eng": 0.179946,
        "fshare_math": 0.325210056,
        "fshare_total": 0.337512039,
        "fsect_science": 0.19502124,
        "fsect_eng": 0.076703642,
        "fsect_math": 0.065787156,
        "class": "bar4"
    },
    {
        "key": "University certificate, diploma or degree at bachelor level or above",
        "fshare_science": 0.49765,
        "fshare_eng": 0.186592,
        "fshare_math": 0.32677395,
        "fshare_total": 0.335274134,
        "fsect_science": 0.193725341,
        "fsect_eng": 0.077226804,
        "fsect_math": 0.064321988,
        "class": "bar5"
    }
];

var color = ["#9EE0AF","#E0D09E","#9EAEE0","#E09ECF","#E0AF9E","#AF9EE0"]

var margin = {top: 100, right: 20, bottom: -15, left: 40},
    width = 700 - margin.left - margin.right,
    height = 355 - margin.top - margin.bottom;

var svg = d3.select("#final").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom+90)
    .append("g")
    .attr("transform", "translate(" + 50 + "," + 20 + ")");

var paddingProportion = 0.2;

var y = d3.scaleLinear()
    .range([height, 0])
    .domain([0, 1]);

var g = svg.append("g");

// Add X axis
var x = d3.scaleBand()
    .range([0, width])
    .padding([0.2])

var tooltip = d3.select("#final").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);

function drawChart(xValue, yValue){

    var yMap;

    if(xValue == 1){
        data = data1;
    }
    else if(xValue == 2){
        data = data2;
    }
    else if (xValue == 3){
        data = data3;
    }

    if (yValue == 1) {
        yMap = "fshare_total"
    } else if (yValue == 2) {
        yMap = "fshare_science"
    } else if (yValue == 3) {
        yMap = "fshare_eng"
    } else if (yValue == 4) {
        yMap = "fshare_math"
    }

    data.sort(function(a, b) {
        return d3.ascending(a[yMap], b[yMap])
    })

    x.domain(data.map(function(d) { return d.key; }))

    g
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x))
        .selectAll("text")
        .style("text-anchor", "end")
        .style("font", "1em 'Tw Cen MT'")
        .attr("dx", "-.8em")
        .attr("dy", ".15em")
        .attr("transform", "rotate(-35)");

    // Add titles to axes
    svg.append("text")
        .attr("text-anchor", "middle")  // this makes it easy to centre the text as the transform is applied to the anchor
        .attr("transform", "translate("+ (-35) +","+(height/2)+")rotate(-90)")  // text is drawn off the screen top left, move down and out and rotate
        .text("% Female Graduates")
        .style("font-family", 'Tw Cen MT')
        .style("font-size", '10')

    svg.selectAll(".background-bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "background-bar")
        .attr("x", function(d) { return x(d.key); })
        .attr("width", x.bandwidth())
        .attr("y", 0)
        .attr("height", height)
        .style("fill", "url(#stripe_bg)")
        .attr("rx", 10)
        .attr("ry", 10);

    defs = svg.append('svg:defs');
    defs
        .append('svg:pattern')
        .attr('id', 'stripe_bg')
        .attr('patternUnits', 'userSpaceOnUse')
        .attr('width', '8')
        .attr('height', '8')
        .append('svg:image')
        .attr('xlink:href', './assets/images/grey.png')
        .attr('x', 0)
        .attr('y', 0)
        .attr('width', 8)
        .attr('height', 8);

    //Create Y Axis
    svg.append("g")
        .attr("class", "y axis")
        .call(d3.axisLeft(y).tickFormat(d3.format(".0%")))

    //var total = d3.sum(data, function(d) { return d.donations; })
    var i = 0;

    svg.selectAll(".bar")
        .data(data)
        .enter().append("path")
        .attr("class", function(d) {
            var s = "bar ";

            if (i<6)
                i++;
            else
                i = 1;

            return s + "bar" + i.toString();

        })
        .attr("d", function(d) {
            var barWidth = x.bandwidth();
            var paddingWidth = barWidth*(paddingProportion)/(1-paddingProportion);
            var flareRadius = paddingWidth/2;
            var topRadius = barWidth/2;

            var xPos =  x(d.key);
            var yPos =  y(0);

            return [ "M", [ (xPos - flareRadius), height], //start at bottom left of base
                "Q", [xPos, height],
                [xPos, Math.max((height-flareRadius), yPos)],
                "L", [xPos,  Math.min((yPos + topRadius), height)],
                "Q", [xPos, yPos],
                [(xPos + topRadius), yPos],
                "Q", [(xPos + barWidth), yPos],
                [(xPos + barWidth), Math.min((yPos + topRadius), height)],
                "L", [(xPos + barWidth), Math.max((height-flareRadius), yPos)],
                "Q", [(xPos + barWidth), height],
                [(xPos + barWidth + flareRadius), height],
                "Z"
            ].join(" ");
        })
        .on("mouseover", function(d) {
            line = svg.append('line')
                .attr('id', 'limit')
                .attr('x1', 0)
                .attr('y1', y(d[yMap]))
                .attr('x2', width)
                .attr('y2', y(d[yMap]))

            tooltip.transition().duration(200).style("opacity", .9);
            tooltip.html(parseFloat(d[yMap]*100).toFixed(2)+"%")
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
        })
        .on('mouseenter', function (actual, i) {

            svg.selectAll(".bartext")
                .data(data)
                .enter()
                .append("text")
                .attr("class", "bartext")
                .attr("text-anchor", "middle")
                .attr("fill", "black")
                .style("font", "0.9em 'Tw Cen MT'")
                .attr("x", function(d,i) {
                    return x(d.key)+x.bandwidth()/2;
                })
                .attr("y", function(d,i) {
                    return y(d[yMap]);
                })
                .text((a, idx) => {
                    const divergence = (a[yMap] - actual[yMap]).toFixed(2)

                    let text = ''
                    if (divergence > 0) text += '+'
                    text += `${divergence}%`

                    return idx !== i ? text : '';
                })
        })
        .on("mouseout", function(d) {
            svg.selectAll('#limit').remove()
            svg.selectAll('.bartext').remove()

            tooltip.transition().duration(500).style("opacity", 0);
        })
        .transition()
        .duration(750)
        .delay(function (d, i) {
            return i * 150;
        })
        .attr("d", function(d) {
            var barWidth = x.bandwidth();
            var paddingWidth = barWidth*(paddingProportion)/(1-paddingProportion);
            var flareRadius = paddingWidth/2;
            var topRadius = barWidth/2;

            var xPos =  x(d.key);
            var yPos =  y(d[yMap]);

            return [ "M", [ (xPos - flareRadius), height], //start at bottom left of base
                "Q", [xPos, height],
                [xPos, Math.max((height-flareRadius), yPos)],
                "L", [xPos,  Math.min((yPos + topRadius), height)],
                "Q", [xPos, yPos],
                [(xPos + topRadius), yPos],
                "Q", [(xPos + barWidth), yPos],
                [(xPos + barWidth), Math.min((yPos + topRadius), height)],
                "L", [(xPos + barWidth), Math.max((height-flareRadius), yPos)],
                "Q", [(xPos + barWidth), height],
                [(xPos + barWidth + flareRadius), height],
                "Z"
            ].join(" ");
        })
}

function wrap(text, width) {
    text.each(function() {
        var text = d3.select(this),
            words = text.text().split(/\s+/).reverse(),
            word,
            line = [],
            lineNumber = 0,
            lineHeight = 1.1, // ems
            y = text.attr("y"),
            dy = parseFloat(text.attr("dy")),
            tspan = text.text(null).append("tspan").attr("x", 0).attr("y", y).attr("dy", dy + "em");
        while (word = words.pop()) {
            line.push(word);
            tspan.text(line.join(" "));
            if (tspan.node().getComputedTextLength() > width) {
                line.pop();
                tspan.text(line.join(" "));
                line = [word];
                tspan = text.append("tspan").attr("x", 0).attr("y", y).attr("dy", ++lineNumber * lineHeight + dy + "em").text(word);
            }
        }
    });
}

function checkSelected(xChanged){

    var radios;
    var stemGroup;

    var ddl = document.getElementById("subsetButton");

    var subset = ddl.value;

    switch(subset) {
        case "prov":
            data = data1;
            break;
        case "edu":
            data = data2;
            break;
        case "age":
            data = data3;
            data.sort(function(a, b) {
                return d3.ascending(a.key, b.key)
            })
            break;
    }

    radios = document.getElementsByName('stemGroup');


    for(var i = 0; i < radios.length; i++)
        if(radios[i].checked)
            stemGroup = radios[i].value

    var yMap;

    switch(stemGroup) {
        case "total":
            yMap = "fshare_total"
            break;
        case "sci":
            yMap = "fshare_science"
            break;
        case "eng":
            yMap = "fshare_eng"
            break;
        case "math":
            yMap = "fshare_math"
            break;
    }

// Update X axis
    x
        .domain(data.map(function(d) { return d.key; }))
        .range([0, width])
        .padding([0.2])

    svg
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom+90)
        .append("g")
        .attr("transform", "translate(" + 50 + "," + 20 + ")");

    g
        .attr("transform", "translate(0," + height + ")")
        .call(d3.axisBottom(x));
    if (subset == "edu") {
        g.selectAll("text")
            .call(wrap, x.bandwidth())
    }
    g.selectAll("text")
        .attr("transform", "rotate(-35)")
        .attr("dx", "-.8em")
        .attr("dy", "0em")
        .style("text-anchor", "end")
        .style("font", "0.0em 'Tw Cen MT'")
        .transition().duration(750)
        .style("font", "1em 'Tw Cen MT'")

    svg.selectAll(".background-bar").remove();

    svg.selectAll(".background-bar")
        .data(data)
        .enter()
        .append("rect")
        .attr("class", "background-bar")
        .attr("x", function(d) {
            return x(d.key);
        })
        .attr("width", x.bandwidth())
        .attr("y", 0)
        .attr("height", height)
        .style("fill", "url(#stripe_bg)")
        .attr("rx", 10)
        .attr("ry", 10);

    var bar = svg.selectAll(".bar")

    bar
        .data(data)

    bar
        .exit().remove()
        .enter().append(".bar")

    if(xChanged){
        bar
            .attr("d", function(d) {

                var barWidth = x.bandwidth();
                var paddingWidth = barWidth*(paddingProportion)/(1-paddingProportion);
                var flareRadius = paddingWidth/2;
                var topRadius = barWidth/2;

                var xPos =  x(d.key);
                var yPos = y(0);


                return [ "M", [ (xPos - 0.2), height], //start at bottom left of base
                    "Q", [xPos, height],
                    [xPos, Math.max((height-flareRadius), yPos)],
                    "L", [xPos,  Math.min((yPos + topRadius), height)],
                    "Q", [xPos, yPos],
                    [(xPos + topRadius), yPos],
                    "Q", [(xPos + barWidth), yPos],
                    [(xPos + barWidth), Math.min((yPos + topRadius), height)],
                    "L", [(xPos + barWidth), Math.max((height-flareRadius), yPos)],
                    "Q", [(xPos + barWidth), height],
                    [(xPos + barWidth + flareRadius), height],
                    "Z"
                ].join(" ");
            })
            .on("mouseover", function(d) {
                line = svg.append('line')
                    .attr('id', 'limit')
                    .attr('x1', 0)
                    .attr('y1', y(d[yMap]))
                    .attr('x2', width)
                    .attr('y2', y(d[yMap]))

                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(parseFloat(d[yMap]*100).toFixed(2)+"%")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on('mouseenter', function (actual, i) {

                svg.selectAll(".bartext")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("class", "bartext")
                    .attr("text-anchor", "middle")
                    .attr("fill", "black")
                    .style("font", "0.9em 'Tw Cen MT'")
                    .attr("x", function(d,i) {
                        return x(d.key)+x.bandwidth()/2;
                    })
                    .attr("y", function(d,i) {
                        return y(d[yMap]);
                    })
                    .text((a, idx) => {
                        const divergence = (a[yMap] - actual[yMap]).toFixed(2)

                        let text = ''
                        if (divergence > 0) text += '+'
                        text += `${divergence}%`

                        return idx !== i ? text : '';
                    })
            })
            .on("mouseout", function(d) {
                svg.selectAll('#limit').remove()
                svg.selectAll('.bartext').remove()

                tooltip.transition().duration(500).style("opacity", 0);
            })
            .transition()
            .duration(500)
            .attr("d", function(d) {
                var barWidth = x.bandwidth();
                var paddingWidth = barWidth*(paddingProportion)/(1-paddingProportion);
                var flareRadius = paddingWidth/2;
                var topRadius = barWidth/2;

                var xPos =  x(d.key);
                var yPos =  y(d[yMap]);

                return [ "M", [ (xPos - 0.2), height], //start at bottom left of base
                    "Q", [xPos, height],
                    [xPos, Math.max((height-flareRadius), yPos)],
                    "L", [xPos,  Math.min((yPos + topRadius), height)],
                    "Q", [xPos, yPos],
                    [(xPos + topRadius), yPos],
                    "Q", [(xPos + barWidth), yPos],
                    [(xPos + barWidth), Math.min((yPos + topRadius), height)],
                    "L", [(xPos + barWidth), Math.max((height-flareRadius), yPos)],
                    "Q", [(xPos + barWidth), height],
                    [(xPos + barWidth + flareRadius), height],
                    "Z"
                ].join(" ");
            });}
    else{
        bar
            .on("mouseover", function(d) {
                line = svg.append('line')
                    .attr('id', 'limit')
                    .attr('x1', 0)
                    .attr('y1', y(d[yMap]))
                    .attr('x2', width)
                    .attr('y2', y(d[yMap]))

                tooltip.transition().duration(200).style("opacity", .9);
                tooltip.html(parseFloat(d[yMap]*100).toFixed(2)+"%")
                    .style("left", (d3.event.pageX) + "px")
                    .style("top", (d3.event.pageY - 28) + "px");
            })
            .on('mouseenter', function (actual, i) {

                svg.selectAll(".bartext")
                    .data(data)
                    .enter()
                    .append("text")
                    .attr("class", "bartext")
                    .attr("text-anchor", "middle")
                    .attr("fill", "black")
                    .style("font", "0.9em 'Tw Cen MT'")
                    .attr("x", function(d,i) {
                        return x(d.key)+x.bandwidth()/2;
                    })
                    .attr("y", function(d,i) {
                        return y(d[yMap]);
                    })
                    .text((a, idx) => {
                        const divergence = (a[yMap] - actual[yMap]).toFixed(2)

                        let text = ''
                        if (divergence > 0) text += '+'
                        text += `${divergence}%`

                        return idx !== i ? text : '';
                    })
            })
            .on("mouseout", function(d) {
                svg.selectAll('#limit').remove()
                svg.selectAll('.bartext').remove()

                tooltip.transition().duration(500).style("opacity", 0);
            })
            .transition()
            .duration(500)
            .attr("d", function(d) {
                var barWidth = x.bandwidth();
                var paddingWidth = barWidth*(paddingProportion)/(1-paddingProportion);
                var flareRadius = paddingWidth/2;
                var topRadius = barWidth/2;

                var xPos =  x(d.key);
                var yPos =  y(d[yMap]);

                return [ "M", [ (xPos - 0.2), height], //start at bottom left of base
                    "Q", [xPos, height],
                    [xPos, Math.max((height-flareRadius), yPos)],
                    "L", [xPos,  Math.min((yPos + topRadius), height)],
                    "Q", [xPos, yPos],
                    [(xPos + topRadius), yPos],
                    "Q", [(xPos + barWidth), yPos],
                    [(xPos + barWidth), Math.min((yPos + topRadius), height)],
                    "L", [(xPos + barWidth), Math.max((height-flareRadius), yPos)],
                    "Q", [(xPos + barWidth), height],
                    [(xPos + barWidth + flareRadius), height],
                    "Z"
                ].join(" ");
            });
    }

    bar.raise().classed("active", true);

}

drawChart(1,1)
