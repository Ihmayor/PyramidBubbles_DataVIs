//Outside Sources Used (Put in Report) :
//Initial Bubbles Base: https://bl.ocks.org/lshir200/9e15800ee4434db7c9076bcd72f779ad#flare.json
//Packing Triangles: https://roadtolarissa.com/zoomable-sierpinski-triangle-with-d3-js/
var treeJson = {};
var years = ["1974", "1975",
"1976", "1977", "1978", "1979", "1980", "1981", "1982", "1983", "1984", "1985", "1986", "1987", "1988",
"1989", "1990", "1991", "1992", "1993", "1994", "1995", "1996", "1997", "1998", "1999", "2000", "2001",
"2002", "2003", "2004", "2005", "2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014"]

function getRandomInPolygon(polygonPoints) {
    var minX = polygonPoints[polygonPoints.length - 2][0];
    var maxX = polygonPoints[polygonPoints.length - 1][0];
    var numX = Math.random() * (maxX - minX) + minX;


    var minY = polygonPoints[0][1];
    var maxY = polygonPoints[polygonPoints.length - 1][1];
    var numY = Math.random() * (maxY - minY) + minY;

    var point = [numX,numY]
    var loop = 0;
    while (!pointInPolygon(point, polygonPoints))
    {
        if (loop > 100)
            break;
        numX = Math.random() * (maxX - minX) + minX;
        numY = Math.random() * (maxY - minY) + minY;
        point = [numX, numY]
        loop++;
    }

    return point;
}

// from https://github.com/substack/point-in-polygon
pointInPolygon = function (point, vs) {
    // ray-casting algorithm based on
    // http://www.ecse.rpi.edu/Homepages/wrf/Research/Short_Notes/pnpoly.html
    var xi, xj, i, intersect,
        x = point[0],
        y = point[1],
        inside = false;
    for (var i = 0, j = vs.length - 1; i < vs.length; j = i++) {
        xi = vs[i][0],
        yi = vs[i][1],
        xj = vs[j][0],
        yj = vs[j][1],
        intersect = ((yi > y) != (yj > y))
            && (x < (xj - xi) * (y - yi) / (yj - yi) + xi);
        if (intersect) inside = !inside;
    }
    return inside;
}


function findArray(desc1Name) {
    var returnArray = null;
    if (treeJson == {} || treeJson.root == null) {
    }
    else {
        treeJson.root.children.forEach(function (array) {
            if (array.name == desc1Name) {
                returnArray = array;
            }
        });
    }
    return returnArray;
}

function findChild(name, parent)
{
    var returnArray = null;
    parent.children.forEach(function(array)
    {
        if (array.name = name)
        {
            returnArray = array;
        }
    })
    return returnArray;
}


function createItemObject(d) {
    return {
        "name": d.desc2 + d.desc3 + d.desc4,
        "children":[],
        "desc2": d.desc2,
        "desc3": d.desc3,
        "desc4": d.desc4,
        "code": d.code,
        "1974": d.year1974,
        "1975": d.year1975,
        "1976": d.year1976,
        "1977": d.year1977,
        "1978": d.year1978,
        "1979": d.year1979,
        "1980": d.year1980,
        "1981": d.year1981,
        "1982": d.year1982,
        "1983": d.year1983,
        "1984": d.year1984,
        "1985": d.year1985,
        "1986": d.year1986,
        "1987": d.year1987,
        "1988": d.year1988,
        "1989": d.year1989,
        "1990": d.year1990,
        "1991": d.year1991,
        "1992": d.year1992,
        "1993": d.year1993,
        "1994": d.year1994,
        "1995": d.year1995,
        "1996": d.year1996,
        "1997": d.year1997,
        "1998": d.year1998,
        "1999": d.year1999,
        "2000": d.year2000,
        "2001": d.year2001,
        "2002": d.year2002,
        "2003": d.year2003,
        "2004": d.year2004,
        "2005": d.year2005,
        "2006": d.year2006,
        "2007": d.year2007,
        "2008": d.year2008,
        "2009": d.year2009,
        "2010": d.year2010,
        "2011": d.year2011,
        "2012": d.year2012,
        "2013": d.year2013,
        "2014": d.year2014,
        "size": d.year1993
    }

}

//Load Up Data Points
d3.csv("FoodTrendData.csv",
       function (d) {
           d.year1974 = +d.year1974;
           d.year1975 = +d.year1975;
           d.year1976 = +d.year1976;
           d.year1977 = +d.year1977;
           d.year1978 = +d.year1978;
           d.year1979 = +d.year1979
           d.year1980 = +d.year1980
           d.year1981 = +d.year1981
           d.year1982 = +d.year1982
           d.year1983 = +d.year1983
           d.year1984 = +d.year1984
           d.year1985 = +d.year1985
           d.year1986 = +d.year1986
           d.year1987 = +d.year1987
           d.year1988 = +d.year1988
           d.year1989 = +d.year1989
           d.year1990 = +d.year1990
           d.year1991 = +d.year1991
           d.year1992 = +d.year1992
           d.year1993 = +d.year1993
           d.year1994 = +d.year1994
           d.year1995 = +d.year1995
           d.year1996 = +d.year1996
           d.year1997 = +d.year1997
           d.year1998 = +d.year1998
           d.year1999 = +d.year1999
           d.year2000 = +d.year2000
           d.year2001 = +d.year2001
           d.year2002 = +d.year2002
           d.year2003 = +d.year2003
           d.year2004 = +d.year2004
           d.year2005 = +d.year2005;
           d.year2006 = +d.year2006;
           d.year2007 = +d.year2007;
           d.year2008 = +d.year2008;
           d.year2009 = +d.year2009;
           d.year2010 = +d.year2010;
           d.year2011 = +d.year2011;
           d.year2012 = +d.year2012;
           d.year2013 = +d.year2013;
           d.year2014 = +d.year2014;
           var foundArray;

           if (typeof treeJson.root === 'undefined' || treeJson.root === null) {
               var item = createItemObject(d);
               var root = {
                   "name": "root", "children": [{
                       "name": d.desc1, "children": [item], "size": d.year1993
                   }]
               };
               treeJson.root = root;
           }
           else {
               //Get Desc 1 Array 
               foundArray = findArray(d.desc1);
               if (foundArray == null) {
                   var item = createItemObject(d);
                   var newArray = { "name": d.desc1, "children": [item], "size": d.year1993 }
                   treeJson.root.children.push(newArray);
               }
               else {
                   var item = createItemObject(d);
                   foundArray.children.push(item);
                   foundArray.size = foundArray.size + d.year1993;
               }
           }
           return d;
       },

        function (data) {
            var svg = d3.select("svg"),
    margin = 20,
    diameter = +svg.attr("width"),
    g = svg.append("g").attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

            var color = d3.scaleLinear()
                .domain([-1, 5])
                .range(["hsl(152,80%,80%)", "hsl(228,30%,40%)"])
                .interpolate(d3.interpolateHcl);

            var pack = d3.pack()
                .size([diameter - margin, diameter - margin])
                .padding(2);

            var root = d3.hierarchy(treeJson.root)
                  .sum(function (d) { return d.size; })
                  .sort(function (a, b) { return b.value - a.value; });

            var focus = root,
                nodes = pack(root).descendants(),
                view;

            var circle = g.selectAll("circle")
              .data(nodes)
              .enter().append("circle")
                .attr("class", function (d) { return d.parent ? d.children ? "node" : "node node--leaf" : "node node--root"; })
                .style("fill", function (d) { return d.children ? color(d.depth) : null; })
                .on("click", function (d) { if (focus !== d) zoom(d), d3.event.stopPropagation(); });

            var text = g.selectAll("text")
              .data(nodes)
              .enter().append("text")
                .attr("class", "label")
                .style("fill-opacity", function (d) { return d.parent === root ? 1 : 0; })
                .style("display", function (d) { return d.parent === root ? "inline" : "none"; })
                .text(function (d) { return d.data.name; });

            var node = g.selectAll("circle,text");

            svg
                .style("background", color(-1))
                .on("click", function () { zoom(root); });

            zoomTo([root.x, root.y, root.r * 2 + margin]);

            function zoom(d) {
                var focus0 = focus; focus = d;

                var transition = d3.transition()
                    .duration(d3.event.altKey ? 7500 : 750)
                    .tween("zoom", function (d) {
                        var i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
                        return function (t) { zoomTo(i(t)); };
                    });

                transition.selectAll("text")
                  .filter(function (d) { return d.parent === focus || this.style.display === "inline"; })
                    .style("fill-opacity", function (d) { return d.parent === focus ? 1 : 0; })
                    .on("start", function (d) { if (d.parent === focus) this.style.display = "inline"; })
                    .on("end", function (d) { if (d.parent !== focus) this.style.display = "none"; });
            }

            function zoomTo(v) {
                var k = diameter / v[2]; view = v;
                node.attr("transform", function (d) { return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")"; });
                circle.attr("r", function (d) { return d.r * k; });
            }



            //Polygon Collisiion Code
            
            //Initial Values
            var width = 1400,
                height =width*1.2,
                radius = 3;

            
            //Main Visualization stsructure
            var viz = {
                size: { width: width, height:height },
                clusters: [{ name: 'a' }, { name: 'b' }, { name: 'c' }, { name: 'd' }, { name: 'e' }],
                colors: d3.scale,
                polygons_params: {
                    ta: 1 / 9, // the height of the top middle segment (in proportion of height)
                    tb: 7 / 9 // the height of the 2 bottom left & right segments (in proportion of height)
                }
            };

            var polygons = initPolygons();

            //Create SVG based on above
            var svg = d3.select("body").append("svg")
              .attr("width", width)
              .attr("height", height)
              .style("background", "#eee")

            var debugStop = 0;


            viz.clusters = viz.clusters.map(function (c) {

                //Determines Bubble Size
                c.data = d3.range(50).map(function () {
                    return { size: 0.2 };
                });
                c.polygon = polygons[c.name];
                c.layout = initLayout(c);
                return c;
            });


            //initializes the pyramid
            function initLayout(cluster) {
                
                var radius = function (d) {
                    return d.size + 2.2;
                }

                //Place Pyramid Shape. Give fill and color.
                var polygon = svg.append('polygon')
                  .attr('points', cluster.polygon)
                  .attr('stroke', '#000')
                  .attr('fill', '#bbb')
                  .attr('stroke-width', 2)
                  .style('opacity', 0.3);

                //Find Center
                var center = d3.polygonCentroid(cluster.polygon);


/*
                var g  = svg.append('g').attr('class', 'bubbles ' + cluster.name);
                
                cluster.data.forEach(function (d,i) {
                    var newPoint = getRandomInPolygon(cluster.polygon);
                    g.append('circle')
                        .attr('class', 'bubble')
                        .attr('r', 2)
                        .attr('stroke-width', 0.001)
                        .attr('fill', '#000')
                        .attr('cx', function () { return newPoint[0];})
                        .attr('cy', function () { return newPoint[1];})
                })
  */
                console.log("polygon name: " + cluster.name);
                var nodes = d3.range(1000).map(function () {
                    var point = getRandomInPolygon(cluster.polygon);
                    return { r: 4 , x:point[0], y:point[1]};
                }),
                root = nodes[0];
                var color = d3.scaleOrdinal().range(d3.schemeCategory20)

                root.radius = 0;
                root.fixed = true;

                const forceX = d3.forceX(center[0]).strength(0.015)
                const forceY = d3.forceY(center[1]).strength(0.015)


                var force = d3.forceSimulation()
                .velocityDecay(0.2)
                .force("x", forceX)
                .force("y", forceY)
                .force('center', d3.forceCenter(center[0], center[1]))
                .force('polygonCollide', forceCollidePolygon(cluster.polygon, 2))
                .force("collide", d3.forceCollide().radius(function (d) {
                    if (d === root) {
                        return Math.random() * 50 ;
                    }
                    return d.r + 0.2;
                }).iterations(5))
                .nodes(nodes).on("tick", ticked);

                var g = svg.append('g').attr('class', 'bubbles ' + cluster.name);


                g.selectAll("circle")
                    .data(nodes.slice(1))
                    .enter().append("circle")
                    .attr('class','bubble')
                    .attr("r", function (d) { return d.r; })
                    .attr("cy", function (d) { return d.y;})
                    .attr("cx", function (d) { return d.x;})
                    .style("fill", function (d, i) { return color(i % 3); });

                function ticked(e) {
                    g.selectAll("circle")
                        .attr("cx", function (d) { return d.x; })
                        .attr("cy", function (d) { return d.y; });
                };

                g.on("mousemove", function () {
                    var p1 = d3.mouse(this);
                    root.fx = p1[0];
                    root.fy = p1[1];
                    force.alphaTarget(0.3).restart();//reheat the simulation
                });
            }


            //Initializes Polygons themselves. This is the shapes definitions.
            function initPolygons() {
                // pseudo-triangles parameters
                var ta = viz.polygons_params.ta, tb = viz.polygons_params.tb;
                var w = viz.size.width, h = viz.size.height;

                //Height Split By 
                var h2 = h / 5;

                //Current Polygon Height Level
                var h3 = h2 * 1;

                //Degree for level split calculation
                var angDeg = 59;

                //Degree conversion
                var angRad = angDeg * (Math.PI / 180)

                //Calculate Angle
                var cotanAng = 1 / Math.tan(angRad);

                //Calculate Right-Most Point For Width
                var w2 = (cotanAng * h3) + (w * 0.5);

                //Calculate Left Most Point Width
                var w3 = (w * 0.5) - cotanAng * h3;

                var tc = 7 / 9;
                var points = {
                    a: [0, 0],
                    b: [w, 0],
                    c: [w, h],
                    d: [0, h],
                    e: [w / 2, 0],
                    f: [w, tc * h],
                    g: [0, tc * h],
                    h: [w / 2, ta * h],
                    i: [(w * 0.5) - cotanAng * h2, tc * h2],
                    j: [(cotanAng * h2 + w / 2), tc * h2],
                    k: [(w * 0.5) - cotanAng * h2 * 2, tc * h2 * 2],
                    l: [(cotanAng * h2 * 2 + w / 2), tc * h2 * 2],
                    m: [(w * 0.5) - cotanAng * h2 * 3, tc * h2 * 3],
                    n: [(cotanAng * h2 * 3 + w / 2), tc * h2 * 3],
                    o: [(w * 0.5) - cotanAng * h2 * 4, tc * h2 * 4],
                    p: [(cotanAng * h2 * 4 + w / 2), tc * h2 * 4]
                };
                return {
                    d: [points.e, points.j, points.i],
                    e: [points.i, points.j, points.l, points.k],
                    a: [points.k, points.l, points.n, points.m],
                    b: [points.n, points.m, points.o, points.p],
                    c: [points.p, points.o, points.g, points.f]
                };
            }
            // inspired from http://bl.ocks.org/larsenmtl/39a028da44db9e8daf14578cb354b5cb
            function forceCollidePolygon(polygon, radius) {
                console.log("interesting...");
                var nodes, n, iterations = 1,
                    max=Math.max,
                    min=Math.min;
                var absub = function(a,b){ return max(a,b)-min(a,b); };
                var center= d3.polygonCentroid(polygon);
      
                // took from d3-force/src/collide.js
                if (typeof radius !== "function") radius = constant(radius == null ? 1 : +radius);
      
                // took from d3-force/src/constant.js
                function constant(x){
                    return function() {
                        return x;
                    };
                }
                // took from d3-force/src/jiggle.js
                function jiggle() {
                    return (Math.random() - 0.5) * 1e-6;
                }

                // adapted from http://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
                function intersection(p0, p1, p2, p3){
                    var s1 = [ p1[0] - p0[0], p1[1] - p0[1]];
                    var s2 = [ p3[0] - p2[0], p3[1] - p2[1]];
                    // intersection compute
                    var s, t;
                    s = -s1[1] * (p0[0] - p2[0]) + s1[0] * (p0[1] - p3[1]);
                    t =  s2[0] * (p0[1] - p2[1]) - s2[1] * (p0[0] - p3[0]);
                    s = s / (-s2[0] * s1[1] + s1[0] * s2[1]);
                    t = t / (-s2[0] * s1[1] + s1[0] * s2[1]);

                    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
                        // intersection coordinates
                        return {
                            x:p0[0] + (t * s1[0]),
                            y:p0[1] + (t * s1[1])
                        };
                    }
                    return false;
                }

                function force(){
                    for(var l = 0; l < iterations; l++){
                        for(var k = 0; k < nodes.length; k++){
                            var node = nodes[k];
                            var r  = radius(node);
                            var px = (node.x >= center[0]?1:-1);
                            var py = (node.y >= center[1]?1:-1);
            
                            var t = [ node.x + px*r, node.y + py*r];
            
                            // we loop over polygon's edges to check collisions
                            for(var j = 0; j < polygon.length; j++){
                                var n = (j+1) < polygon.length ? (j+1):0;
                                var p1 = polygon[j];
                                var p2 = polygon[n];
                                var i = intersection(p1, p2, center, t);
                                if(i){
                                    // give a small velocity at the opposite of the collision point
                                    // this can be tweaked
                                    node.vx = -px/Math.sqrt(absub(i.x, t[0]) + jiggle());
                                    node.vy = -py/Math.sqrt(absub(i.y, t[1]) + jiggle());
                                    break;
                                }
                            }
                        }
                    }
                    return;
                }

                force.iterations = function(_) {
                    return arguments.length ? (iterations = +_, force) : iterations;
                };
      
                force.initialize = function(_){
                    n = (nodes = _).length;
                };
      
                force.radius = function(_){
                    return arguments.length ? (radius = typeof _ === "function" ? _ : constant(+_), force) : radius;
                };
                return force;
            }

            //Step One Get nested nodes (Check) 
            //Step Two Get Nested Notes inside force layout into triangle areas .
            //Step Three Change triangle ares to polygons mathing food pyramid
            //Step Four change insides to circles/squares
            //Step five: Add slider to change size of nested items inside.


        });




var jsonTest = {
    "name": "flare",
    "children": [
     {
         "name": "analytics",
         "children": [
          {
              "name": "cluster",
              "children": [
               { "name": "AgglomerativeCluster", "size": 3938 },
               { "name": "CommunityStructure", "size": 3812 },
               { "name": "HierarchicalCluster", "size": 6714 },
               { "name": "MergeEdge", "size": 743 }
              ]
          },
          {
              "name": "graph",
              "children": [
               { "name": "BetweennessCentrality", "size": 3534 },
               { "name": "LinkDistance", "size": 5731 },
               { "name": "MaxFlowMinCut", "size": 7840 },
               { "name": "ShortestPaths", "size": 5914 },
               { "name": "SpanningTree", "size": 3416 }
              ]
          },
          {
              "name": "optimization",
              "children": [
               { "name": "AspectRatioBanker", "size": 7074 }
              ]
          }
         ]
     },
     {
         "name": "animate",
         "children": [
          { "name": "Easing", "size": 17010 },
          { "name": "FunctionSequence", "size": 5842 },
          {
              "name": "interpolate",
              "children": [
               { "name": "ArrayInterpolator", "size": 1983 },
               { "name": "ColorInterpolator", "size": 2047 },
               { "name": "DateInterpolator", "size": 1375 },
               { "name": "Interpolator", "size": 8746 },
               { "name": "MatrixInterpolator", "size": 2202 },
               { "name": "NumberInterpolator", "size": 1382 },
               { "name": "ObjectInterpolator", "size": 1629 },
               { "name": "PointInterpolator", "size": 1675 },
               { "name": "RectangleInterpolator", "size": 2042 }
              ]
          },
          { "name": "ISchedulable", "size": 1041 },
          { "name": "Parallel", "size": 5176 },
          { "name": "Pause", "size": 449 },
          { "name": "Scheduler", "size": 5593 },
          { "name": "Sequence", "size": 5534 },
          { "name": "Transition", "size": 9201 },
          { "name": "Transitioner", "size": 19975 },
          { "name": "TransitionEvent", "size": 1116 },
          { "name": "Tween", "size": 6006 }
         ]
     },
     {
         "name": "data",
         "children": [
          {
              "name": "converters",
              "children": [
               { "name": "Converters", "size": 721 },
               { "name": "DelimitedTextConverter", "size": 4294 },
               { "name": "GraphMLConverter", "size": 9800 },
               { "name": "IDataConverter", "size": 1314 },
               { "name": "JSONConverter", "size": 2220 }
              ]
          },
          { "name": "DataField", "size": 1759 },
          { "name": "DataSchema", "size": 2165 },
          { "name": "DataSet", "size": 586 },
          { "name": "DataSource", "size": 3331 },
          { "name": "DataTable", "size": 772 },
          { "name": "DataUtil", "size": 3322 }
         ]
     },
     {
         "name": "display",
         "children": [
          { "name": "DirtySprite", "size": 8833 },
          { "name": "LineSprite", "size": 1732 },
          { "name": "RectSprite", "size": 3623 },
          { "name": "TextSprite", "size": 10066 }
         ]
     },
     {
         "name": "flex",
         "children": [
          { "name": "FlareVis", "size": 4116 }
         ]
     },
     {
         "name": "physics",
         "children": [
          { "name": "DragForce", "size": 1082 },
          { "name": "GravityForce", "size": 1336 },
          { "name": "IForce", "size": 319 },
          { "name": "NBodyForce", "size": 10498 },
          { "name": "Particle", "size": 2822 },
          { "name": "Simulation", "size": 9983 },
          { "name": "Spring", "size": 2213 },
          { "name": "SpringForce", "size": 1681 }
         ]
     },
     {
         "name": "query",
         "children": [
          { "name": "AggregateExpression", "size": 1616 },
          { "name": "And", "size": 1027 },
          { "name": "Arithmetic", "size": 3891 },
          { "name": "Average", "size": 891 },
          { "name": "BinaryExpression", "size": 2893 },
          { "name": "Comparison", "size": 5103 },
          { "name": "CompositeExpression", "size": 3677 },
          { "name": "Count", "size": 781 },
          { "name": "DateUtil", "size": 4141 },
          { "name": "Distinct", "size": 933 },
          { "name": "Expression", "size": 5130 },
          { "name": "ExpressionIterator", "size": 3617 },
          { "name": "Fn", "size": 3240 },
          { "name": "If", "size": 2732 },
          { "name": "IsA", "size": 2039 },
          { "name": "Literal", "size": 1214 },
          { "name": "Match", "size": 3748 },
          { "name": "Maximum", "size": 843 },
          {
              "name": "methods",
              "children": [
               { "name": "add", "size": 593 },
               { "name": "and", "size": 330 },
               { "name": "average", "size": 287 },
               { "name": "count", "size": 277 },
               { "name": "distinct", "size": 292 },
               { "name": "div", "size": 595 },
               { "name": "eq", "size": 594 },
               { "name": "fn", "size": 460 },
               { "name": "gt", "size": 603 },
               { "name": "gte", "size": 625 },
               { "name": "iff", "size": 748 },
               { "name": "isa", "size": 461 },
               { "name": "lt", "size": 597 },
               { "name": "lte", "size": 619 },
               { "name": "max", "size": 283 },
               { "name": "min", "size": 283 },
               { "name": "mod", "size": 591 },
               { "name": "mul", "size": 603 },
               { "name": "neq", "size": 599 },
               { "name": "not", "size": 386 },
               { "name": "or", "size": 323 },
               { "name": "orderby", "size": 307 },
               { "name": "range", "size": 772 },
               { "name": "select", "size": 296 },
               { "name": "stddev", "size": 363 },
               { "name": "sub", "size": 600 },
               { "name": "sum", "size": 280 },
               { "name": "update", "size": 307 },
               { "name": "variance", "size": 335 },
               { "name": "where", "size": 299 },
               { "name": "xor", "size": 354 },
               { "name": "_", "size": 264 }
              ]
          },
          { "name": "Minimum", "size": 843 },
          { "name": "Not", "size": 1554 },
          { "name": "Or", "size": 970 },
          { "name": "Query", "size": 13896 },
          { "name": "Range", "size": 1594 },
          { "name": "StringUtil", "size": 4130 },
          { "name": "Sum", "size": 791 },
          { "name": "Variable", "size": 1124 },
          { "name": "Variance", "size": 1876 },
          { "name": "Xor", "size": 1101 }
         ]
     },
     {
         "name": "scale",
         "children": [
          { "name": "IScaleMap", "size": 2105 },
          { "name": "LinearScale", "size": 1316 },
          { "name": "LogScale", "size": 3151 },
          { "name": "OrdinalScale", "size": 3770 },
          { "name": "QuantileScale", "size": 2435 },
          { "name": "QuantitativeScale", "size": 4839 },
          { "name": "RootScale", "size": 1756 },
          { "name": "Scale", "size": 4268 },
          { "name": "ScaleType", "size": 1821 },
          { "name": "TimeScale", "size": 5833 }
         ]
     },
     {
         "name": "util",
         "children": [
          { "name": "Arrays", "size": 8258 },
          { "name": "Colors", "size": 10001 },
          { "name": "Dates", "size": 8217 },
          { "name": "Displays", "size": 12555 },
          { "name": "Filter", "size": 2324 },
          { "name": "Geometry", "size": 10993 },
          {
              "name": "heap",
              "children": [
               { "name": "FibonacciHeap", "size": 9354 },
               { "name": "HeapNode", "size": 1233 }
              ]
          },
          { "name": "IEvaluable", "size": 335 },
          { "name": "IPredicate", "size": 383 },
          { "name": "IValueProxy", "size": 874 },
          {
              "name": "math",
              "children": [
               { "name": "DenseMatrix", "size": 3165 },
               { "name": "IMatrix", "size": 2815 },
               { "name": "SparseMatrix", "size": 3366 }
              ]
          },
          { "name": "Maths", "size": 17705 },
          { "name": "Orientation", "size": 1486 },
          {
              "name": "palette",
              "children": [
               { "name": "ColorPalette", "size": 6367 },
               { "name": "Palette", "size": 1229 },
               { "name": "ShapePalette", "size": 2059 },
               { "name": "SizePalette", "size": 2291 }
              ]
          },
          { "name": "Property", "size": 5559 },
          { "name": "Shapes", "size": 19118 },
          { "name": "Sort", "size": 6887 },
          { "name": "Stats", "size": 6557 },
          { "name": "Strings", "size": 22026 }
         ]
     },
     {
         "name": "vis",
         "children": [
          {
              "name": "axis",
              "children": [
               { "name": "Axes", "size": 1302 },
               { "name": "Axis", "size": 24593 },
               { "name": "AxisGridLine", "size": 652 },
               { "name": "AxisLabel", "size": 636 },
               { "name": "CartesianAxes", "size": 6703 }
              ]
          },
          {
              "name": "controls",
              "children": [
               { "name": "AnchorControl", "size": 2138 },
               { "name": "ClickControl", "size": 3824 },
               { "name": "Control", "size": 1353 },
               { "name": "ControlList", "size": 4665 },
               { "name": "DragControl", "size": 2649 },
               { "name": "ExpandControl", "size": 2832 },
               { "name": "HoverControl", "size": 4896 },
               { "name": "IControl", "size": 763 },
               { "name": "PanZoomControl", "size": 5222 },
               { "name": "SelectionControl", "size": 7862 },
               { "name": "TooltipControl", "size": 8435 }
              ]
          },
          {
              "name": "data",
              "children": [
               { "name": "Data", "size": 20544 },
               { "name": "DataList", "size": 19788 },
               { "name": "DataSprite", "size": 10349 },
               { "name": "EdgeSprite", "size": 3301 },
               { "name": "NodeSprite", "size": 19382 },
               {
                   "name": "render",
                   "children": [
                    { "name": "ArrowType", "size": 698 },
                    { "name": "EdgeRenderer", "size": 5569 },
                    { "name": "IRenderer", "size": 353 },
                    { "name": "ShapeRenderer", "size": 2247 }
                   ]
               },
               { "name": "ScaleBinding", "size": 11275 },
               { "name": "Tree", "size": 7147 },
               { "name": "TreeBuilder", "size": 9930 }
              ]
          },
          {
              "name": "events",
              "children": [
               { "name": "DataEvent", "size": 2313 },
               { "name": "SelectionEvent", "size": 1880 },
               { "name": "TooltipEvent", "size": 1701 },
               { "name": "VisualizationEvent", "size": 1117 }
              ]
          },
          {
              "name": "legend",
              "children": [
               { "name": "Legend", "size": 20859 },
               { "name": "LegendItem", "size": 4614 },
               { "name": "LegendRange", "size": 10530 }
              ]
          },
          {
              "name": "operator",
              "children": [
               {
                   "name": "distortion",
                   "children": [
                    { "name": "BifocalDistortion", "size": 4461 },
                    { "name": "Distortion", "size": 6314 },
                    { "name": "FisheyeDistortion", "size": 3444 }
                   ]
               },
               {
                   "name": "encoder",
                   "children": [
                    { "name": "ColorEncoder", "size": 3179 },
                    { "name": "Encoder", "size": 4060 },
                    { "name": "PropertyEncoder", "size": 4138 },
                    { "name": "ShapeEncoder", "size": 1690 },
                    { "name": "SizeEncoder", "size": 1830 }
                   ]
               },
               {
                   "name": "filter",
                   "children": [
                    { "name": "FisheyeTreeFilter", "size": 5219 },
                    { "name": "GraphDistanceFilter", "size": 3165 },
                    { "name": "VisibilityFilter", "size": 3509 }
                   ]
               },
               { "name": "IOperator", "size": 1286 },
               {
                   "name": "label",
                   "children": [
                    { "name": "Labeler", "size": 9956 },
                    { "name": "RadialLabeler", "size": 3899 },
                    { "name": "StackedAreaLabeler", "size": 3202 }
                   ]
               },
               {
                   "name": "layout",
                   "children": [
                    { "name": "AxisLayout", "size": 6725 },
                    { "name": "BundledEdgeRouter", "size": 3727 },
                    { "name": "CircleLayout", "size": 9317 },
                    { "name": "CirclePackingLayout", "size": 12003 },
                    { "name": "DendrogramLayout", "size": 4853 },
                    { "name": "ForceDirectedLayout", "size": 8411 },
                    { "name": "IcicleTreeLayout", "size": 4864 },
                    { "name": "IndentedTreeLayout", "size": 3174 },
                    { "name": "Layout", "size": 7881 },
                    { "name": "NodeLinkTreeLayout", "size": 12870 },
                    { "name": "PieLayout", "size": 2728 },
                    { "name": "RadialTreeLayout", "size": 12348 },
                    { "name": "RandomLayout", "size": 870 },
                    { "name": "StackedAreaLayout", "size": 9121 },
                    { "name": "TreeMapLayout", "size": 9191 }
                   ]
               },
               { "name": "Operator", "size": 2490 },
               { "name": "OperatorList", "size": 5248 },
               { "name": "OperatorSequence", "size": 4190 },
               { "name": "OperatorSwitch", "size": 2581 },
               { "name": "SortOperator", "size": 2023 }
              ]
          },
          { "name": "Visualization", "size": 16540 }
         ]
     }
    ]
}