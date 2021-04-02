// Assign the data from `data.js` to a descriptive variable
var ufo_data = data;

// Select the datetime form
var form = d3.select("#datetime")

// Select the button
var button = d3.select("#filter-btn");

// Get a reference to the table body
var tbody = d3.select("tbody");



// Create an alert box for no matching data
// var popup = window.alert("There's no matching data :(")

// Create event handlers
form.on("submit", runEnter);
button.on("click", runEnter);

// Fill table with all the data
ufo_data.forEach(function(ufoSighting) {
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

    // Get the value property of the input element
    var inputValue = form.property("value");
    var matchcount = 0

    // console.log(inputValue);

    if (inputValue === "") {
        ufo_data.forEach(function(ufoSighting) {
            var row = tbody.append("tr");
        
            Object.entries(ufoSighting).forEach(function([key, value]) {
                // console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
        });
    }

    // else if (inputValue !== inputValue.trim()) {
    //     var popup = window.alert("There's no matching data :(")
    //     popup = true
    // }
    
    else {
        // Filter data based on inputValue
        var filteredData = ufo_data.filter(ufo => ufo.datetime === inputValue.trim());
        console.log(filteredData);
        tbody.html("");

        // Loop through filteredData and append each object to the table
        filteredData.forEach(function(ufoSighting) {
            matchcount += matchcount;
            // console.log(matchcount);
            
            var row = tbody.append("tr");

            Object.entries(ufoSighting).forEach(function([key, value]) {
                // console.log(key, value);
                var cell = row.append("td");
                cell.text(value);
            });
            if (filteredData===[]){
                window.alert("There's no matching data :(")
            }
        
       
        });
    // if (matchcount === 0) {
    //     window.alert("There's no matching data :(")
    // }
    }
    
};

