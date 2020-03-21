// from data.js
var tableData = data;

//create table
var tbody = d3.select("tbody"); 
tableData.forEach(function(UFO) {
    console.log(UFO);
    var row = tbody.append("tr")
    Object.entries(UFO).forEach(function([key, value]) {
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    }); 
     
});

//form entry
var submit = d3.select("#filter-btn");

submit.on("click", function() {

    d3.event.preventDefault();
 
    d3.select(".summary").html("");

    var inputElement = d3.select("#datetime");
  
    var inputValue = inputElement.property("value");
  
    console.log(inputValue);
    
  
    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    
    JTable(filteredData);
});
function JTable(dataFilter){
    tbody.html("");
    dataFilter.forEach((datetime) =>   { 
    var row = tbody.append("tr");
    Object.entries(datetime).forEach(([key,value]) => {
        var cell = tbody.append("td");
        cell.text(value);
        });
    });
}