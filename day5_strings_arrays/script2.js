let word ="Hello";
let reversed = "";
for(let i = word.length - 1; i >= 0; i--){
     reversed = reversed + word[i];
}
console.log(reversed) // olleH

let word2 =reversed.toUpperCase();
console.log(word2) // HELLO

console.log(word[0]) // H
console.log(word[word.length - 1]) // o