// from data.js
var tableData = data;

tableData.forEach(element => {
    console.log(`{element.city}`) 
});
// YOUR CODE HERE!

var tbody = d3.select("tbody");


tableData.forEach((siting) => {
    var row = tbody.append("tr");
    Object.entries(siting).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });