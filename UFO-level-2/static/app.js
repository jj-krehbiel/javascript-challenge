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
        console.log(key, value);
        var cell = row.append("td");
        cell.text(value);
    });
});

// Complete the event handler function for the form
function runEnter() {

    filteredData = []

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Get the value properties of the input elements
    var inputValue1 = dateForm.property("value");
    inputValue1 = inputValue1.toLowerCase();
    console.log(inputValue1);

    var inputValue2 = cityForm.property("value");
    inputValue2 = inputValue2.toLowerCase();
    console.log(inputValue2);
    
    var inputValue3 = stateForm.property("value");
    inputValue3 = inputValue3.toLowerCase();
    console.log(inputValue3);

    if (countryForm === "USA") {
        var inputValue4 = "us"
    }
    if (countryForm === "Canada") {
        var inputValue4 = "ca"
    }
    console.log(inputValue4);

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

    filteredData.forEach(function(ufoSighting) {
        var row = tbody.append("tr");

        Object.entries(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
            });
        });
    }

    // // else if (inputValue !== inputValue.trim()) {
    // //     var popup = window.alert("There's no matching data :(")
    // //     popup = true
    // // }
    
    // else {
    //     // Filter data based on inputValue
    //     var filteredData = ufo_data.filter(ufo => ufo.datetime === inputValue.trim());
    //     console.log(filteredData);

    //     // Loop through filteredData and append each object to the table
    //     filteredData.forEach(function(ufoSighting) {
    //         matchcount += matchcount;
    //         console.log(matchcount);
    //         tbody.html("");
    //         var row = tbody.append("tr");

    //         Object.entries(ufoSighting).forEach(function([key, value]) {
    //             console.log(key, value);
    //             var cell = row.append("td");
    //             cell.text(value);
    //         });
        
    //     if (filteredData === []) {
    //         window.alert("There's no matching data :(")
    //     }
    //     });
    // }
// };

