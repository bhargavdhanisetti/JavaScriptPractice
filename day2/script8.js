fruits= ["apple", "banana", "apple", "orange", "banana", "apple"];

let result=fruits.reduce((acc,curr)=>{
    acc[curr] = (acc[curr] || 0)+1;
    return acc;
},{})
console.log(result);