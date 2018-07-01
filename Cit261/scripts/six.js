
function create() {
    var btn = document.createElement("BUTTON");
    var t = document.createTextNode("CLICK ME");
    btn.appendChild(t);
    document.body.appendChild(btn);
}

function insert() {
    var newItem = document.createElement("LI");
    var textnode = document.createTextNode("Three");
    newItem.appendChild(textnode);

    var list = document.getElementById("myList");
    list.insertBefore(newItem, list.childNodes[0]);
    
   
}

function remove(){
    var list2 = document.getElementById("myList");
    list2.removeChild(list2.childNodes[0]);
}

