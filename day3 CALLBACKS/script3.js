// Function to perform basic arithmetic operations using callbacks
function add(a, b) {
    return a + b;
}
function subtract(a, b) {
    return a - b;
}
function multiply(a, b) {
    return a * b;
}
function divide(a, b) {
    if (b === 0) {
        return "Error: Division by zero is not allowed.";
    }
    return a / b;
}
function calculate(num1, num2, operator) {
    return operator(num1, num2);
}
console.log(calculate(10, 5, add)); // Output: 15
console.log(calculate(10, 5, subtract)); // Output: 5
console.log(calculate(10, 5, multiply)); // Output: 50

console.log(calculate(10, 5,(a,b)=>a/b)); // Output: 2