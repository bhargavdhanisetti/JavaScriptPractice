// Event Bubbling Example
let parent = document.getElementById("parent");
let child = document.getElementById("child");
child.addEventListener("click", function(e){
    console.log("Child button clicked");
    e.stopPropagation(); // Stop the event from bubbling up to the parent
});
parent.addEventListener("click", function(){
    console.log("Parent div clicked");
});