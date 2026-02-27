// Generate random number between 1 and 10
let a = Math.floor(Math.random() * 10) + 1;
let b;
while(a!=b){
    b= prompt("enter the number between 1 and 10")
    if(a===b){
        alert("correct guess")
    }
    else{
        alert("incorrect guess"+a)
    }

}