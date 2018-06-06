function forLoop(){
var cars = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];
var text = "";
var i;
for (i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}
document.getElementById("forLoop").innerHTML = text;
}


function whileLoop(){
    var text = "";
    var i = 0;
    while (i < 10) {
    text += "<br>The number is " + i;
    i++;
}
document.getElementById("whileLoop").innerHTML = text;
}

function doLoop(){
    var text = ""
var i = 0;

do {
    text += "<br>The number is " + i;
    i++;
}
while (i < 10);  

document.getElementById("doLoop").innerHTML = text;
}

function ifStatement() {
    var hour = new Date().getHours(); 
    var greeting;
    if (hour < 18) {
        greeting = "Good day";
    } else {
        greeting = "Good evening";
    }
    document.getElementById("ifStatement").innerHTML = greeting;
}


function switchStatement(){
var day;
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case  6:
        day = "Saturday";
}
document.getElementById("switchStatement").innerHTML = "Today is " + day;
}

function testFunction(){
var x = myFunction(4, 3);
document.getElementById("function").innerHTML = x;

function myFunction(a, b) {
    return a * b;
}
}

function variables(){
    var x = 5;
    var y = 6;
    var z = x + y;
    document.getElementById("variables").innerHTML =
        "The value of z is: " + z;
}


function parameters(){
function parameters1(x, y) {
    if (y === undefined) {
        y = 0;
    }    
    return x * y;
}
document.getElementById("parameters").innerHTML = parameters1(4);
}

function arrays(){
    var cars = ["Saab", "Volvo", "BMW"];
document.getElementById("arrays").innerHTML = cars[0];
}


function associativeArrays(){
    var person = [];
person[0] = "John";
person[1] = "Doe";
person[2] = 46; 
document.getElementById("associativeArrays").innerHTML =
person[0] + " " + person.length;
}