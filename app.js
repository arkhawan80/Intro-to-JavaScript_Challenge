// from data.js
var tableData = data;


function buildtable(data){
  var tablebody = d3.select("tbody");
  tablebody.html("");
data.forEach((row) => {
    var trow = tablebody.append("tr");
    Object.entries(row).forEach(([key, value]) => {
        var cell = trow.append("td");
        cell.text(value);
    });
});
}

function clickbutton(){
var button = d3.select("#button");
var date = d3.select("#datetime").property("value");
var filterdata = tableData;

if (date){
    filterdata = filterdata.filter(row => row.datetime == date);
} buildtable(filterdata); 
console.log(filterdata);
}



var filters = {}
function changebutton(){
  var date = d3.select("#datetime").property("value");
var filterdata = tableData;

if (date){
    filterdata = filterdata.filter(row => row.datetime == date);
} buildtable(filterdata); 
  var city = d3.select("#city").property("value");
  var filterdata = tableData;

if (city){
  filterdata = filterdata.filter(row => row.city == city);

}buildtable(filterdata);
}
d3.selectAll(".filter").on("change", changebutton);
buildtable(tableData);  

