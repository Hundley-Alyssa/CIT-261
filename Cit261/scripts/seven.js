function properties(){
    document.getElementById("p2").style.color = "blue";
    document.getElementById("p2").style.fontFamily = "Arial";
    document.getElementById("p2").style.fontSize = "larger";
   
var script1 = "document.getElementById('p2').style.color = 'blue';" 

var script2 = "document.getElementById('p2').style.fontFamily = 'Arial';" 

var script3 = "document.getElementById('p2').style.fontSize = 'larger';"
    
    
document.getElementById("p3").innerHTML = script1;
document.getElementById("p4").innerHTML = script2;
document.getElementById("p5").innerHTML = script3;
}


