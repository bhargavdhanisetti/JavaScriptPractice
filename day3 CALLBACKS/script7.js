// rest parameters

function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    } 
    return total;
}
console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5)); // Output: 9
console.log(sum(10, 20, 30, 40)); // Output: 100

function one() {
    console.log("This is function one");
    two();
}
function two() {
    console.log("This is function two");
    three();
}
function three() {
    console.log("This is function three");
    console.log("End of the call stack");
}
one();