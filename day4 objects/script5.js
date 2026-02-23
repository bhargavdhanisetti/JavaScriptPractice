person = {
    name: "John cena",
    age: 35,
    city: "Guntur",
}
// Destructuring assignment
const { name, age, city } = person;
console.log(person.name);
console.log(age);
console.log(city);

// Destructuring with renaming
const { name: personName, age: personAge, city: personCity } = person;  
console.log(personName);
console.log(personAge);
console.log(personCity);

const Car={
    brand : "bmw",
    model : "x5",
    year : 2026,
}
// Destructuring assignment and renaming
const { brand, model: carModel } = Car;
console.log(brand);
console.log(carModel);