let button = document.querySelector("#changeBtn");
let message = document.querySelector("#message");

button.addEventListener("click", function() {
  message.textContent = "You clicked the button!";
});
