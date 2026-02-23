let numbers = [4, 8, 1, 20, 5];
let largest = numbers[0];
for (let i =1;i<numbers.length;i++){
    if ( numbers[i]>largest){
        largest = numbers[i];
    }
}
console.log("largest number is "+ largest);