// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;

// Select the datetime form
var form = d3.select("#form")

// Select the button
var button = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");

// Create event handlers
form.on("submit", runEnter);
button.on("click", runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    // Filter data based on inputValue
    var filteredData = ufo_data.filter(ufo => ufo.datetime === inputValue);
    console.log(filteredData);

    // Loop through filteredData and append each object to the table
    filteredData.forEach(function(ufoSighting) {
        var row = tbody.append("tr");

        Object.defineProperties(ufoSighting).forEach(function([key, value]) {
            console.log(key, value);
            var cell = row.append("td");
            cell.text(value);
        });
    });





};