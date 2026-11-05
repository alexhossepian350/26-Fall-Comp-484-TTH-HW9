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

// ==========================
// Part 2: Number Conversion
// ==========================

// Four starting values, all stored as strings
var courseNumberText = "484";
var graduationYearText = "2027";
var gpaText = "3.6";
var schoolNameText = "TypeShyte";

// Convert each string into a number with Number()
var courseNumber = Number(courseNumberText);
var graduationYear = Number(graduationYearText);
var gpa = Number(gpaText);
var schoolName = Number(schoolNameText);

// Check whether each converted value is NaN (not a number)
var courseNumberIsNaN = Number.isNaN(courseNumber);
var graduationYearIsNaN = Number.isNaN(graduationYear);
var gpaIsNaN = Number.isNaN(gpa);
var schoolNameIsNaN = Number.isNaN(schoolName);

// Check whether each converted value is a whole number
var courseNumberIsInteger = Number.isInteger(courseNumber);
var graduationYearIsInteger = Number.isInteger(graduationYear);
var gpaIsInteger = Number.isInteger(gpa);
var schoolNameIsInteger = Number.isInteger(schoolName);

// Build one sentence for each value
var courseNumberResult = "<p>Original: '" + courseNumberText + "' -> Converted: " + courseNumber + " -> isNaN: " + courseNumberIsNaN + " -> isInteger: " + courseNumberIsInteger + "</p>";
var graduationYearResult = "<p>Original: '" + graduationYearText + "' -> Converted: " + graduationYear + " -> isNaN: " + graduationYearIsNaN + " -> isInteger: " + graduationYearIsInteger + "</p>";
var gpaResult = "<p>Original: '" + gpaText + "' -> Converted: " + gpa + " -> isNaN: " + gpaIsNaN + " -> isInteger: " + gpaIsInteger + "</p>";
var schoolNameResult = "<p>Original: '" + schoolNameText + "' -> Converted: " + schoolName + " -> isNaN: " + schoolNameIsNaN + " -> isInteger: " + schoolNameIsInteger + "</p>";

// Combine all four sentences into one string and display it on the page
var conversionResults = courseNumberResult + graduationYearResult + gpaResult + schoolNameResult;
document.querySelector("#numberConversionOutput").innerHTML = conversionResults;

// ==========================
// Part 3: Math & Formatting
// ==========================

// Three grade scores for a class
var homeworkScore = 92;
var midtermScore = 85.5;
var finalExamScore = 88;

// Add the three scores together to get the total
var totalScore = homeworkScore + midtermScore + finalExamScore;

// Divide the total by the number of scores to get the average
var numberOfScores = 3;
var averageScore = totalScore / numberOfScores;

// Round the average to two decimal places for display
var formattedAverage = averageScore.toFixed(2);

// Build the results and display them on the page
var mathResults = "<p>Homework: " + homeworkScore + ", Midterm: " + midtermScore + ", Final Exam: " + finalExamScore + "</p>" +
    "<p>Total score: " + totalScore + "</p>" +
    "<p>Average score: " + formattedAverage + "</p>";
document.querySelector("#mathOutput").innerHTML = mathResults;

// ==========================
// Part 4: Conditionals
// ==========================

// Check whether the average score is passing (70 or higher)
var gradeMessage;
if (averageScore >= 70) {
    gradeMessage = "Passing";
} else {
    gradeMessage = "Not passing";
}

// Add the passing message under the math results
document.querySelector("#mathOutput").innerHTML += "<p>Grade status: " + gradeMessage + "</p>";

// Check whether the school name converted into a valid number
var schoolNameMessage;
if (schoolNameIsNaN) {
    schoolNameMessage = "'" + schoolNameText + "' is not a valid number.";
} else {
    schoolNameMessage = "'" + schoolNameText + "' is a valid number.";
}

// Add the message under the number conversion results
document.querySelector("#numberConversionOutput").innerHTML += "<p>" + schoolNameMessage + "</p>";

// ==========================
// Extra Credit: Ternary Operator
// ==========================

// Pass/fail label using a ternary operator: condition ? true : false
var passFailLabel = averageScore >= 70 ? "PASS" : "FAIL";
document.querySelector("#mathOutput").innerHTML += "<p>Result: " + passFailLabel + "</p>";
