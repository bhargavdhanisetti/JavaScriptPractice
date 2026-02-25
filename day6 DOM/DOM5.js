//selecting element by id
let el = document.getElementById("title");
el.textContent = "hi bhargav";

el.innerHTML = "<span>good morning</span>";

//by click button change the message
let btn = document.getElementById("btn");
btn.addEventListener("click", function(){
    let message = document.getElementById("msg");
    message.textContent = "New message";
})