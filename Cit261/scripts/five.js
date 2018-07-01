function setGet(){
localStorage.setItem('firstName', 'Alyssa');
var myName = localStorage.getItem('firstName');
document.getElementById("setGet").innerHTML = myName;
}