function parse(){
var text = '{ "name":"Alyssa", "age":"function() {return 24;}", "city":"Provo"}';
var obj = JSON.parse(text);
obj.age = eval("(" + obj.age + ")");

document.getElementById("parse").innerHTML = obj.name + ", " + obj.age(); 
}

function stringify(){
    var obj = { "name":"Alyssa", "age":24, "city":"Provo"};
var myJSON = JSON.stringify(obj);
document.getElementById("stringify").innerHTML = myJSON;
}