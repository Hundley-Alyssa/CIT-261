function hide() {
    var x = document.getElementById("dateDiv");
    console.log(x.style.display);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
    var y = document.getElementById("signsDiv");
    console.log(x.style.display);
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
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
   var request = $.ajax({
        url: "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/"+signName,
        method: "POST",
        dataType:'json',
        headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
        },
        success: function(result) {
            document.getElementById('sign').innerHTML = result.sun_sign;
            document.getElementById('health').innerHTML = result.prediction.health;
            document.getElementById('emotions').innerHTML = result.prediction.emotions;
            document.getElementById('personal').innerHTML = result.prediction.personal_life;
            document.getElementById('profession').innerHTML = result.prediction.profession;
            document.getElementById('travel').innerHTML = result.prediction.travel;
            document.getElementById('luck').innerHTML = result.prediction.luck;
            
        },
        error: function(err) {
            console.log(err);
        }
    });
    var x = document.getElementById("horo");
    console.log(x.style.display);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}


function dateSelect(){
    var m = document.getElementById("months");
    var month = m.options[m.selectedIndex].value;
    var d = document.getElementById("dates");
    var date = parseInt(d.options[d.selectedIndex].value);
    var signName;
    
    console.log(month);
    console.log(date);
    
    if ((month == "january" && date >= 20) || (month == "february" && date <= 18)){
        signName = "aquarius";
        }
    else if ((month == "february" && date >= 19) || (month == "march" && date <= 20)){
        signName = "pisces";
        }
    else if ((month == "march" && date >= 21) || (month == "april" && date <= 19)){
        signName = "aries";
        }
    else if ((month == "april" && date >= 20) || (month == "may" && date <= 20)){
        signName = "taurus";
        }
    else if ((month == "may" && date >= 21) || (month == "june" && date <= 20)){
        signName = "gemini";
        }
    else if ((month == "june" && date >= 21) || (month == "july" && date <= 22)){
        signName = "cancer";
        }
    else if ((month == "july" && date >= 23) || (month == "august" && date <= 22)){
        signName = "leo";
        }
    else if ((month == "august" && date >= 23) || (month == "september" && date <= 22)){
        signName = "virgo";
        }
    else if ((month == "september" && date >= 23) || (month == "october" && date <= 22)){
        signName = "libra";
        }
    else if ((month == "october" && date >= 23) || (month == "november" && date <= 21)){
        signName = "scorpio";
        }
    else if ((month == "november" && date >= 22) || (month == "december" && date <= 21)){
        signName = "sagittarius";
        }
    else {
        signName = "capricorn";
        }
    console.log(signName);
    getHoroDate(signName);
    
    var x = document.getElementById("horo");
    console.log(x.style.display);
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}

function getHoroDate(signName) {
    signName = signName;
    var userId = '602478';
    var apiKey = '1ee1dc3dc21e3ada45d7644d5d5e80b2';
   var request = $.ajax({
        url: "https://json.astrologyapi.com/v1/sun_sign_prediction/daily/"+signName,
        method: "POST",
        dataType:'json',
        headers: {
            "authorization": "Basic " + btoa(userId+":"+apiKey),
            "Content-Type":'application/json'
        },
        success: function(result) {
            document.getElementById('sign').innerHTML = result.sun_sign;
            document.getElementById('health').innerHTML = result.prediction.health;
            document.getElementById('emotions').innerHTML = result.prediction.emotions;
            document.getElementById('personal').innerHTML = result.prediction.personal_life;
            document.getElementById('profession').innerHTML = result.prediction.profession;
            document.getElementById('travel').innerHTML = result.prediction.travel;
            document.getElementById('luck').innerHTML = result.prediction.luck;
            
        },
        error: function(err) {
            console.log(err);
        }
    });
}


var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    } 
  });
}


