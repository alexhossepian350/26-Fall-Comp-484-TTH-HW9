// ==========================
// Part 1: Date Display
// ==========================

// Create a Date object holding the current date and time
var currentDate = new Date();

// Get the month, day, and year from the Date object
// getMonth() counts January as 0, so we add 1
var month = currentDate.getMonth() + 1;
var day = currentDate.getDate();
var year = currentDate.getFullYear();

// Add a leading zero so the month and day are always two digits
if (month < 10) {
    month = "0" + month;
}
if (day < 10) {
    day = "0" + day;
}

// Build the message and display it on the page
var dateMessage = "Today is " + month + "/" + day + "/" + year;
document.querySelector("#dateOutput").innerHTML = dateMessage;
