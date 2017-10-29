


//Outside Sources Used (Put in Report) :

var treeJson = {};


function findArray(desc1Name)
{
    if (treeJson == {} || treeJson.root == null)
    {
        return null;
    }
    else{
        treeJson.data.forEach(function(array)
        {
            if (array.Name === desc1Name)
                return array;
        });
    }
    return null;
}

//Load Up Data Points
d3.csv("FoodTrendData.csv",
       function (d) {
           d.year1974 = +d.Talk;
           
           d.year1974 = +d.year1974;
           d.year1975 = +d.year1975;
           d.year1976 = +d.year1976;
           d.year1977	=+d.year1977; 
           d.year1978	=+d.year1978;
           d.year1979	=+d.year1979
           d.year1980	=+d.year1980
           d.year1981	=+d.year1981
           d.year1982	=+d.year1982
           d.year1983	=+d.year1983
           d.year1984	=+d.year1984
           d.year1985	=+d.year1985
           d.year1986	=+d.year1986
           d.year1987	=+d.year1987
           d.year1988	=+d.year1988
           d.year1989	=+d.year1989
           d.year1990	=+d.year1990
           d.year1991	=+d.year1991
           d.year1992	=+d.year1992
           d.year1993	=+d.year1993
           d.year1994	=+d.year1994
           d.year1995	=+d.year1995
           d.year1996	=+d.year1996
           d.year1997	=+d.year1997
           d.year1998	=+d.year1998
           d.year1999	=+d.year1999
           d.year2000	=+d.year2000
           d.year2001	=+d.year2001
           d.year2002	=+d.year2002
           d.year2003	=+d.year2003
           d.year2004	=+d.year2004
           d.year2005	=+d.year2005;
           d.year2006	=+d.year2006;
           d.year2007	=+d.year2007;
           d.year2008	=+d.year2008;
           d.year2009	=+d.year2009;
           d.year2010	=+d.year2010;
           d.year2011	=+d.year2011;
           d.year2012	=+d.year2012;
           d.year2013	=+d.year2013;
           d.year2014   =+d.year2014;


           if (treeJson.root == null)
           {

           }
           else
           {
               var foundArray = findArray(d.Desc1);

           }
           //Get Main
           var root = [];

           //Get Desc 1 Array 
           var array = 

           //Get Desc 2,3,4 Array 



           return d;
       },
       function (data) {

           //Get SVG
           var svg = d3.select("svg"),
                  margin = { top: 45, bottom: 20, left: 40, right: 20 }
           width = +1800 - margin.left - margin.right,
           height = +svg.attr("height") - margin.top - margin.bottom

           //Step  one get the shape tweening code 

           // Step two split it up. 

           //Backup: Line graph across with points. 

           //Wrap around can or items

       });

