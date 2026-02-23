let a = Number(prompt("enter the number"))
let b = Number(prompt("enter the number"))
let c = prompt("select operator")

switch (c) {
  case "+":
    console.log(a+b);
    break;
  case "-":
    console.log(a-c);
    break;
  case "*":
    console.log(a*b);
    break;
  case "/":
    console.log(a/b);
    break;
  default:
    console.log("x is something else");
}