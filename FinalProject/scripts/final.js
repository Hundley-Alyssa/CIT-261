function hideMonths() {
    var x = document.getElementById("hideMonths");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}


var d = new Date();
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";
var dayOfWeek = weekday[d.getDay()];

var e = new Date();
var dateNumber = e.getDate();

var f = new Date();
var month = new Array();
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";
var month = month[f.getMonth()];

var g = new Date();
var year = g.getFullYear();

document.getElementById("currentdate").innerHTML = dayOfWeek + ", " + dateNumber + " " + month + " " + year;