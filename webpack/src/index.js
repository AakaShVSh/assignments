import ("./index.css")
import logo from "./logo.jpg";


var img = document.createElement("img")
img.id = "logo_img"
img.src = logo;

var put_logo_here = document.getElementById("logo");
put_logo_here.append(img)


var on = document.getElementById("submit")
on.addEventListener("click",() => {

    var take = document.querySelector("#containent").value;
    var show = document.getElementById("para")
    show.innerHTML = take
})