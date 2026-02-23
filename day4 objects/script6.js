//spread operator in arrays
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combined = [...arr1, ...arr2];
console.log(combined); // Output: [1, 2, 3, 4, 5, 6]

//spread operator in arrays tomerge with new elements
let arr3 = [7, 8, 9];
let mergedWithNew = [...arr1, ...arr2, ...arr3, 10];
console.log(mergedWithNew); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

//spread operator to create a copy of an array
let array4 = [...arr1]
console.log(array4); // Output: [1, 2, 3]

//spread operator in objects to copy objects
let obj1 = {
    fullName: "bhargav",
    age: 22,
}
let obj2 = {...obj1}
console.log(obj2); // Output: { fullName: 'bhargav', age: 22 }

//spread operator in objects to merge objects
let obj3 = {firstname: "bhargav"};
let obj4 = {lastname: "kumar"};
let mergedObj = {...obj3, ...obj4};
console.log(mergedObj); // Output: { firstname: 'bhargav', lastname: 'kumar' }

//spread operator in objects to merge with new properties
const user = { name: "Bhargav", age: 20 };
const updated = { ...user, age: 25 };
console.log(updated);

//spread with strings
const str ="Bhargav";
const chars = [...str];
console.log(typeof chars); // Output: object (since chars is an array)
console.log(chars); // Output: ['B', 'h', 'a', 'r', 'g', 'a', 'v']


//mini problem
const Student = {
    fullName2 : "bhargav",
    age : 23
}
const update ={...Student,grade: "A"}
console.log(update);
