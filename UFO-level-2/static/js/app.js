// from data.js
var tableData = data;

//Function to return unique list of filters.
function getUniqueArray(arr){
    var retval = []   
    for (var i = 0; i < arr.length; i++) {
        if (retval.includes(arr[i]) == false){
            retval.push(arr[i])
        }
      }
      
    return (retval)
    console.log(retval)
}

// YOUR CODE HERE!


var tbody = d3.select("tbody");

var input = d3.select("#dateInput")
var button = d3.select("#button")
var filter = d3.select(".dropdown_filters")

var inputValue = ""
var tableDataMap = []


var dateFilter = ""
var cityFilter = ""
var stateFilter = ""
var countryFilter = ""
var shapeFilter = ""

function handleChange(event){
  //Get Current Filter Values
  dateFilter = d3.select("#sitingid option:checked").text();
  cityFilter = d3.select("#cityid option:checked").text();
  stateFilter = d3.select("#stateid option:checked").text();
  countryFilter = d3.select("#countryid option:checked").text();
  shapeFilter = d3.select("#shapeid option:checked").text()
  
  //Reset data back to original
  tableData = data 
  var dateFiltered = ""
  //Filter data by current filter values.
  if (dateFilter != "All Values") {
    dataFiltered = tableData.filter(e => {return(e.datetime == dateFilter)});
    tableData = dataFiltered.map(e => {return e});
  };
  if (cityFilter != "All Values") {
    dataFiltered = tableData.filter(e => {return(e.city == cityFilter)});
    tableData = dataFiltered.map(e => {return e;});
  };
  if (stateFilter != "All Values") {
    dataFiltered = tableData.filter(e => {return(e.state == stateFilter)});
    tableData = dataFiltered.map(e => {return e;});
  };
  if (countryFilter != "All Values") {
    dataFiltered = tableData.filter(e => {return(e.country == countryFilter)});
    tableData = dataFiltered.map(e => {return e;});
  };
  if (shapeFilter != "All Values") {
    dataFiltered = tableData.filter(e => {return(e.shape == shapeFilter)});
    tableData = dataFiltered.map(e => {return e;});
  };
  console.log(`${dateFilter} ${cityFilter}`)
  console.log(tableData)
  // filter.selectAll("li").remove();
  // filter.remove("select");
  // filter.remove("option");
  //Populate table and filters with filtered dataset.
  pop_table(tableData);
  //pop_filters();
}

var row = ""
var cell = ""
var litem = ""
var selector = ""
var optionitem = ""

//Populate Filters

//Create Unduplicated Sorted Lists for Drop Down list filters
function pop_filters() {
var dataDate = tableData.map(e => {
    return(e.datetime)
})
var dataDateUnq = getUniqueArray(dataDate)

var dataCity = tableData.map(e => {
    return(e.city)
})
var dataCityUnq = getUniqueArray(dataCity).sort()

var dataState = tableData.map(e => {
    return(e.state)
})
var dataStateUnq = getUniqueArray(dataState).sort()

var dataCountry = tableData.map(e => {
    return(e.country)
})
var dataCountryUnq = getUniqueArray(dataCountry).sort()

var dataShape = tableData.map(e => {
    return(e.shape)
})
var dataShapeUnq = getUniqueArray(dataShape).sort()

//Utilize pop_dd function to populate drop down filters
pop_dd(dataDateUnq,"Siting Date","sitingid")
pop_dd(dataCityUnq,"City","cityid")
pop_dd(dataStateUnq,"State","stateid")
pop_dd(dataCountryUnq,"Country","countryid")
pop_dd(dataShapeUnq,"UFO Shape","shapeid")

}

function pop_dd(list,ddname,idval) {
    litem = filter.append("li");
    litem.text(ddname);
    selector = litem.append("select"); 
    selector.attr("id",idval)
    optionitem = selector.append("option")

    optionitem.text("All Values")

    list.forEach(function(element){
        optionitem = selector.append("option")
        // optionitem.value(element);
        optionitem.text(element);
    })
    // if (idval == "sitingid" & dateFilter == "" ) {
    //   optionitem.attr("selected","All Va lues");
    // }
    // else if (idval == "sitingid") {
    //   console.log(dateFilter)
    //   optionitem.attr("selected",dateFilter)
    //   };

    // if (idval == "cityid" & cityFilter == "" ) {
    //   optionitem.attr("selected","All Values");
    // }
    // else if (idval == "cityid") {
    //   optionitem.attr("selected",cityFilter)};

    // if (idval == "stateid" & stateFilter == "") {
    //   optionitem.attr("selected","All Values");
    // }
    // else {optionitem.attr("selected",stateFilter)};

    // if (idval == "countryid" & countryFilter == "" ) {
    //   optionitem.attr("selected","All Values");
    // }
    // else {optionitem.attr("selected",countryFilter)};

    // if (idval == "shapeid" & shapeFilter == "") {
    //   optionitem.attr("selected","All Values");
    // }
    // else {optionitem.attr("selected",shapeFilter)};
}



function pop_table(data){
tbody.selectAll("tr").remove();
tbody.selectAll("td").remove();
data.forEach((siting) => {
    row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      cell = row.append("td");
      cell.text(value);
    });
  })};

pop_table(tableData);
pop_filters();

filter.on("change", handleChange);
