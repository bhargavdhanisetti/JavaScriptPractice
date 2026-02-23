
// Using Object Literal
const person ={
    name: "John",
    age: 30,
    city: "New York",
    greet: function() {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(person.name);
person.greet();


// Using Object Constructor
const person2 = new Object();
person2.name = "Alice";
person2.age = 25;
person2.city = "Los Angeles";
console.log(person2.name);

//constructor function
function Person(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
}
const p1 = new Person("Bob", 35, "Chicago");
const p2 = new Person("Eve", 28, "Miami");
console.log(typeof Person);

//es6 class
class PersonClass {
    constructor(name, age, city) {
        this.name = name;
        this.age = age;
        this.city = city;
    }
}
const p3 = new PersonClass("Charlie", 40, "Houston");
console.log(typeof PersonClass);

//prototypal inheritance
const personProto = {
  greet() {
    console.log("Hello");
  }
};

const p4 = Object.create(personProto);
p4.name = "Bhargav";

p4.greet();
console.log(typeof personProto);
