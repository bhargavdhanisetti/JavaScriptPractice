let taskList = document.getElementById("tasks");
let addBtn = document.getElementById("add");

taskList.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        console.log("Clicked on: " + event.target.textContent);
    }
});

addBtn.addEventListener("click", function(){
    let newTask = document.createElement("li");
    newTask.textContent = "New Task";
    taskList.appendChild(newTask);
});