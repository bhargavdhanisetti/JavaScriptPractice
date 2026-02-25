let el =document.getElementById("heading");
console.log(el);

let els = document.querySelector(".message");
console.log(els);

let paragraphs = document.querySelectorAll(".message");
paragraphs.forEach(function(p){
    console.log(p.textContent);
});

let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    console.log("Button was clicked!");
});