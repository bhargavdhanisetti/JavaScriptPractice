let list =document.getElementById("list");
list.addEventListener("click", function(event){
    console.log("Clicked on: " + event.target.textContent);});