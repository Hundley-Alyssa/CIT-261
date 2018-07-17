function hideMonths() {
    var x = document.getElementById("dateDiv");
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




function getHoro() {
    var s = document.getElementById("signs");
    var signName = s.options[s.selectedIndex].value;
    var userId = '602478';
    var apiKey = '1ee1dc3dc21e3ada45d7644d5d5e80b2';
    var data = 'JSON Request Data';
    var request = $.ajax({
        url: "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/"+signName,
        method: "POST",
        dataType:'json',
        headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
        },
        data:JSON.stringify(data)
    });
    // Returns A promiss
    return( request.then( function(resp){
        return resp;
    }, function(err){
        return err;
    }));
    

 health = resp.prediction.health;
 
}



