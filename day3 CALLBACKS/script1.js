let input = Number(prompt("Enter a number: A"));
let input2 = Number(prompt("Enter another number: B"));
let input3 = prompt("operator: +, -, *, /");

function add(a,b){
    return a+b;
}
function subtract(a,b){
    return a-b;
}
function multiply(a,b){
    return a*b;
}
function divide(a,b){
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a/b;
}
let result;
switch(input3){
    case "+": result = add(input, input2);
    break;
    case "-": result = subtract(input, input2);
    break;
    case "*": result = multiply(input, input2);
    break;
    case "/": result = divide(input, input2);
    break;
    default: result = "Invalid operator";
}
console.log("Result: " + result);
