let el = document.getElementById("title");
el.style.color = "red";

el.style.color = "blue";
el.style.backgroundColor = "yellow";
el.style.fontSize = "30px";

let messageEl = document.getElementById("message");
let btnEl = document.getElementById("btn");

btnEl.addEventListener("click", function(){
    messageEl.style.color = "red";
    messageEl.style.fontSize = "20px";
});

//task
let boxEl = document.getElementById("box");
let btn2El = document.getElementById("btn2");
btn2El.addEventListener("click", function(){
    boxEl.style.color = "white";
    boxEl.style.backgroundColor = "blue";
    boxEl.style.fontSize = "28px";
});