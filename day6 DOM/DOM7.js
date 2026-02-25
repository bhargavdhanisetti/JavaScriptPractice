let p = document.getElementById("msg");
p.classList.add("red");

let text = document.getElementById("text");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    text.classList.toggle("active");
});