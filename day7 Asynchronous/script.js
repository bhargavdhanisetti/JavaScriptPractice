
console.log("Hello World");

// Asynchronous JavaScript
console.log("Start");

let p = new Promise((resolve, reject) => {
    resolve("Success");
});

p.then(data => console.log(data));

console.log("End");