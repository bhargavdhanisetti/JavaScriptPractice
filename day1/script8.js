let numbers = [1, 2, 3, 2, 4, 2, 5];
let count =0;
a = Number(prompt("enter a number"));

for(let i =0;i<numbers.length; i++){
    if(a === numbers[i]){
        count++;
    }
}
console.log("number count are "+ count)