function greet(name, callback){
    callback(name);
}
// with arrow function
greet("bhargav",(name)=>{
    console.log("Hello " + name);
});

// with normal function
function sayGoodMorning(name){
    console.log("Good Morning " + name);
}
greet("Alice", sayGoodMorning);

// with anonymous function
greet("Bob", function(name){
    console.log("Welcome " + name);
});