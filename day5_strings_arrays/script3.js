let text ="JavaScript"
let consonants= 0
let count = 0;
for(let i = 0; i < text.length; i++){
     if("aeiouAEIOU".includes(text[i])){
          count++;
     }
     else{
          consonants++;
     }
}
console.log(`The number of vowels in "${text}" is ${count}.`) // The number of vowels in "JavaScript" is 3.
console.log(`The number of consonants in "${text}" is ${consonants}.`) // The number of consonants in "JavaScript" is 7.
console.log(typeof text) // string