function setGet(){
localStorage.setItem('firstName', 'Alyssa');
var myName = localStorage.getItem('firstName');
document.getElementById("setGet").innerHTML = myName;
}



var rainbow = ["Red", " Orange", " Yellow", " Green", " Blue", " Violet"];
                     
            var family = '{"family":[' + '{ "firstName":"Sterling" , "lastName":"Hundley" },' +
                            '{ "firstName":"Leslie" , "lastName":"Hundley" },' +
                            '{ "firstName":"Riley" , "lastName":"Stevenson" },' +
                            '{ "firstName":"Collin" , "lastName":"Hundley" },' +
                            '{ "firstName":"Alyssa" , "lastName":"Stevenson" },' +
                            '{ "firstName":"Tori" , "lastName":"Hundley" },' +
                            '{ "firstName":"Kaylee" , "lastName":"Hundley" }]}';       
                    
            // Check browser support
            if (typeof(Storage) !== "undefined") {
                // Store array as a string with JSON
                localStorage.setItem("rainbow", JSON.stringify(rainbow));
                // Retrieve
                document.getElementById("result").innerHTML = localStorage.getItem("rainbow");
            } else {
                document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Storage...";
            }
            
            // Turn string back into array
            var retrieved = localStorage.getItem("rainbow");
            var rainbow2 = JSON.parse(retrieved);

            // Some fun with arrays
            document.getElementById("number").innerHTML = "There are <strong>" + rainbow2.length + "</strong> colors in the rainbow</i>.";
            document.getElementById("yellow").innerHTML = "Yellow comes after <strong> " + rainbow2[1] + "</strong> in the rainbow.";
            document.getElementById("array").innerHTML = "<b>And converted back from a string into an array, it looks like this:</b> <br />" + rainbow2;
        
            // Some fun with JSON arrays
            obj = JSON.parse(family);
            document.getElementById("old").innerHTML = "The oldest member of my family is <strong>" + obj.family[0].firstName + " " + obj.family[0].lastName + "</strong>.";
            document.getElementById("young").innerHTML = "The youngest member is <strong>" + obj.family[6].firstName + " " + obj.family[6].lastName + "</strong>.";

