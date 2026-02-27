let employee = {
    name: "Bhargav",
    age: 22,
    skills: ["JS", "React", "Node"]
};
let {name, age} = employee;
console.log(name) // Bhargav
console.log(age) // 22

let skills = [...employee.skills,"MongoDB"];
console.log(skills) // ["JS", "React", "Node", "MongoDB"]

const length =(arr) => arr.length;
console.log(length(skills)) // 4

//add property to an object
Newemployee = {...employee, city:"Guntur"};
console.log(Newemployee) // {name: "Bhargav", age: 22, skills: Array(4), city: "Guntur"}


let users = [
  { id: 1, name: "Bhargav", age: 22, marks: [80, 90, 85] },
  { id: 2, name: "Arjun", age: 19, marks: [70, 75, 60] },
  { id: 3, name: "Kiran", age: 24, marks: [95, 88, 92] }
];

let totals = users.map(({name, marks}) => {
    let total = marks.reduce((sum, val) => sum + val, 0);
    return {name, total};
});
console.log(totals) // [{name: "Bhargav", total: 255}, {name: "Arjun", total: 205}, {name: "Kiran", total: 275}]

let filteredUsers = users.filter(({age}) => age > 20);
console.log(filteredUsers) // [{id: 1, name: "Bhargav", age: 22, marks: Array(3)}, {id: 3, name: "Kiran", age: 24, marks: Array(3)}]