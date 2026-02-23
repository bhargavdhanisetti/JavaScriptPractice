//function declaration
function greet(name){
    return "Hello" + name + "!"
}
console.log(greet("bhargav"))

//function expression
const add = function(a,b){
    return a+b;
}
console.log(add(10,20))

//arrow function
const square = (num) =>{
    return num*num;
};
console.log(square(5));

//immediate invoked fuction expression
(function() {
  let message = "This runs immediately!";
  console.log(message);
})();
