//create a "close" button and append it to each list item
var sunnylist=document.getElementsByTagName("li");
var i;
for (i=0; i<sunnylist.length; i++) {
    var span = document.createElement("span");
    var txt = document.createTextNode("\u2764");
    span.className="close";
    span.appendChild(txt);
    sunnylist[i].appendChild(span);
}
//click on a close button to hide the current list item
var close=document.getElementsByClassName("close");
var i;
for (i=0; i<close.length; i++) {
    close[i].onclick = function () {
        var a = this.parentElement;
        a.style.display="none";
    }
}
//add a "checked" symbol when clicking on a list item
var list=document.querySelector('ul');
list.addEventListener('click',function (ev) {
    if (ev.target.tagName==='LI') {
        ev.target.classList.toggle('checked');
    }
    }, false);
//create a new list item when clicking on "add" button
function newElement() {
    var li = document.createElement('li');
    var inputValue = document.getElementById('txt').value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
        alert("Write someting...");
    } else{
        document.getElementById("mytodolist").appendChild(li);
    }
    document.getElementById('txt').value = "";
    var span = document.createElement("span");
    var txt = document.createTextNode('\u2764');
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    for (i=0; i<close.length; i++) {
      close[i].onclick = function () {
        var  a =this.parentElement;
        a.style.display="none";
    }
    }
}