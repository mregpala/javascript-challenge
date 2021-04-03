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
  tableDataMap = tableData.filter(dataFilter);
  tableData = tableDataMap.map(e => {return e;})
  pop_table(tableData)
}

var row = ""
var cell = ""
function pop_table(data){
tbody.selectAll("tr").remove();
tbody.selectAll("td").remove();
data.forEach((siting) => {
    row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      cell = row.append("td");
      cell.text(value);
      console.log(value)
    });
  })};

pop_table(tableData);

button.on("click", handleChange);
