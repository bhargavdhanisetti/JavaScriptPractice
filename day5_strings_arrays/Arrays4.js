let numbers = [1, 2, 3, 4, 5];

// Using forEach to iterate over the array
numbers.forEach(function(num) {
    console.log(num * 2); // Output: 2, 4, 6, 8, 10
});

// Using map to create a new array with squared numbers
let squaredNumbers = numbers.map((num)=> num * num);
console.log(squaredNumbers) // [1, 4, 9, 16, 25]

// Using filter to create a new array with even numbers
let evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers) // [2, 4]

// Using find to get the first number greater than 2
let firstGreaterThan2 = numbers.find((num) => num > 2);
console.log(firstGreaterThan2) // 3

// Using some to check if there are any numbers divisible by 2
let hasEvenNumber = numbers.some((num) => num % 2 === 0);
console.log(hasEvenNumber) // true

let num2 = [2,4,6];
// Using every to check if all numbers are divisible by 2
let allEvenNumbers = num2.every((num) => num % 2 === 0);
console.log(allEvenNumbers)

// Using reduce to calculate the sum of all numbers
let sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum) // 15
