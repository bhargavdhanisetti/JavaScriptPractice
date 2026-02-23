let a = Number(prompt("enter the number a"))
let b = Number(prompt("enter the number b"))

function sum(x,y){
    return x+y;
}
console.log(sum(a,b))

//sum of an array
let nums = [1,2,3,4,5,6,7];

function sumarr(arr){
    total =0;
    for (let i =0;i<arr.length;i++){
        total += arr[i];
    }
    return total;
}
console.log("sum of arr " +sumarr(nums));