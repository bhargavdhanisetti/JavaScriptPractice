str = "bhargav"
function reverse(str){
    reversestr= "";
    for (let i=str.length-1 ; i>=0; i--){
        reversestr += str[i];
    }
    return reversestr;
}
console.log(reverse(str));

function average(arr){
    let avg =0
    let total =0;
    for(i=0;i<arr.length;i++){
        total += arr[i];
    }
    avg = total/arr.length;
    return avg
}
console.log("average is : "+ average([2,5,6,8,7]))