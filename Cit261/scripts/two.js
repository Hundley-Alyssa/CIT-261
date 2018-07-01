function literal(){
var person = {firstName:"Alyssa", lastName:"Hundley", age:24, eyeColor:"hazel"};

// Display some data from the object:
document.getElementById("literal").innerHTML =
person.firstName + " is " + person.age + " years old.";
}

function keyword(){
    var person = new Object();
    person.firstName = "Alyssa";
    person.lastName = "Hundley";
    person.age = 24;
    person.eyeColor = "hazel";
    
    document.getElementById("keyword").innerHTML =
    person.firstName + " is " + person.age + " years old.";
}

function constructed(){
    function Person(first, last, age, eye){
        this.firstName = first;
        this.lastName = last;
        this.age = age;
        this.eyeColor = eye;
    }
var me = new Person("Alyssa", "Hundley", 24, "hazel");
    
document.getElementById("constructed").innerHTML = "My first name is " + me.firstName + "."
}

function inheritance(){
    
}

function properties(){
    var person = {
      firstname:"Alyssa", lastname:"Hundley", age:24, eyecolor:"hazel"};
    document.getElementById("properties").innerHTML = person.firstname + " has " + person.eyecolor + " eyes.";
}
function methods(){
    var person = {
        firstName: "Alyssa",
        lastName: "Hundley",
        id: 1234,
        fullName: function(){
            return this.firstName + " " + this.lastName;
        }
    };
    document.getElementById("methods").innerHTML = person.fullName();
}