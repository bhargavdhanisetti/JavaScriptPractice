let a = prompt("enter any name in the prompt");
a = a.toLowerCase()
b = a.length;
let count2 =0;
let count =0;
for(let i =0;i<b;i++){
    CHAR = a[i];
    if (
        CHAR === 'a' ||
        CHAR === 'e' ||
        CHAR === 'i' ||
        CHAR === 'o' ||
        CHAR === 'u' 
    ){
        count++;
    }
    else{
        count2++;

    }
}
console.log(count)
console.log(count2)