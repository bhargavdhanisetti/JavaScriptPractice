let input = document.getElementById("name");

input.addEventListener("input", function() {
    console.log(input.value);
});

let form = document.getElementById("form");
form.addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Form submitted");
});