let student = { name:"Bhargav", marks:[80,90,85] };
let {name} = student;
console.log(`the name is ${name}`) // Bhargav

let marks = [...student.marks];
console.log(marks) // [80,90,85]

const total = (arr) => arr.reduce((sum, val) => sum + val, 0);
console.log(total(marks)); // 255