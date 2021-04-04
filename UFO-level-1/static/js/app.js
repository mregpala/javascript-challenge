//Created By: Michael Regpala
//Date: 2020-04-04
//Purpose: Facilitates manipulation of UFO data on HTML page.'
//         Utlizing input filter and button.


// from data.js
var tableData = data;

tableData.forEach(element => {
    console.log(`{element.city}`) 
});
// YOUR CODE HERE!


var tbody = d3.select("tbody");

var input = d3.select("#dateInput")
var button = d3.select("#button")

var inputValue = ""
var tableDataMap = []
function dataFilter(data) {
  return (data.datetime == inputValue)
}

function handleChange(event){
  inputValue = input.property("value");
  tableData = data;
  console.log(inputValue.length)
  //If Input field is greater then filter else reload entire dataset.
  if (inputValue.length > 0 ){
    tableDataMap = tableData.filter(dataFilter);
    tableData = tableDataMap.map(e => {return e;})
  }
  pop_table(tableData)
}

var row = ""
var cell = ""
//Function that populates data
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

button.on("click", handleChange);
