// Event Object
let btn = document.getElementById("Btn");
btn.addEventListener("click", function (event) {
    console.log(event);
});

let btn2 = document.getElementById("Btn2");
btn2.addEventListener("click", function (event) {
    console.log(event.target); // the element that triggered the event
    console.log(event.type); // the type of event (e.g., "click")
    console.log(event.preventDefault); // function to prevent default behavior
    console.log(event.clientX, event.clientY); // mouse coordinates relative to the viewport
    console.log(event.key); // the key that was pressed (for keyboard events)
});

let input = document.getElementById("input");
input.addEventListener("keydown", function (event) {
    console.log(event.key);
});
