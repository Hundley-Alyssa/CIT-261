

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


function domTestAddP(inputText)
			{
				var para = document.createElement("P");
				var node = document.createTextNode(inputText);
				para.appendChild(node);

				var element = document.getElementById("div1");
				element.appendChild(para);
			}

function domTestAddYouTube(inputText){
    var iframe = document.createElement("IFRAME");

    iframe.style.display = 'block';
    iframe.style.margin = '0px auto';
    iframe.width = '854';
    iframe.height = '480';
    iframe.src='https://www.youtube.com/embed/' + inputText;
    iframe.frameborder = '0';

    var element = document.getElementById("videoFrame1");

    element.appendChild(iframe);
}
