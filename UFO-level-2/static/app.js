// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;

// Select the forms
var dateForm = d3.select("#datetime")
var cityForm = d3.select("#city")
var stateForm = d3.select("#state")
var countryForm = d3.select("#country")
var shapeForm = d3.select("shape")

// Select the button
var button = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

var matchcount = 0

// Create an alert box for no matching data
// var popup = window.alert("There's no matching data :(")

// Create event handlers
// form.on("submit", runEnter);
button.on("click", runEnter);

// Fill table with all the data
var filteredData = ufo_data;
filteredData.forEach(function(ufoSighting) {
    var row = tbody.append("tr");

    Object.entries(ufoSighting).forEach(function([key, value]) {
        // console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();
    var filteredData = ufo_data;
    // Get the value properties of the input elements
    var inputValue1 = dateForm.property("value");
    inputValue1 = inputValue1.toLowerCase();
    console.log("dateForm", inputValue1);

    var inputValue2 = cityForm.property("value");
    inputValue2 = inputValue2.toLowerCase();
    console.log(inputValue2);
    
    var inputValue3 = stateForm.property("value");
    inputValue3 = inputValue3.toLowerCase();
    console.log(inputValue3);

    // make a new function within this one that will run on change to trigger the dropdown menus
    d3.selectAll("select").on("change", dropdown);
    function dropdown() {
        var dropdownMenu1 = d3.selectAll("#country").node();
        var countryMenu = dropdownMenu1.id;
        var inputValue4 = countryMenu.value;
        console.log(inputValue4);
    }

    // var inputValue5 = shapeForm.property("value");
    // console.log(inputValue5);

    // var filteredData = ufo_data
    if (inputValue1) {
        filteredData = filteredData.filter(sightings => sightings.datetime === inputValue1.trim())
    }

    if (inputValue2) {
        filteredData = filteredData.filter(sightings => sightings.city === inputValue2.trim())
    }

    if (inputValue3) {
        filteredData = filteredData.filter(sightings => sightings.state === inputValue3.trim())
    }

    if (inputValue4) {
        filteredData = filteredData.filter(sightings => sightings.country === inputValue4.trim())
    }

    tbody.html("");
    filteredData.forEach(function(ufoSighting) {
        var row = tbody.append("tr");
        
        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }
