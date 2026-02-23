// object methods keys values ,entries
const student={
    fullname : "bhargav",
    age : 24
};
console.log(Object.keys(student)); // Output: ['fullname', 'age']
console.log(Object.values(student)); // Output: ['bhargav', 24]
console.log(Object.entries(student)); // Output: [['fullname', 'bhargav'], ['age', 24]]


const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};
console.log(Object.keys(car)); // Output: ['brand', 'model', 'year']
console.log(Object.values(car)); // Output: ['Toyota', 'Camry', 2022]
console.log(Object.entries(car)); // Output: [['brand', 'Toyota'], ['model', 'Camry'], ['year', 2022]]
