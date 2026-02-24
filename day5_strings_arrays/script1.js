text = "JavaScript"
console.log(text.length) // 10
console.log(text[0]) // J
console.log(text[4]) // S
console.log(text[text.length - 1])
console.log(text.slice(0, 4)) // Java
console.log(text.includes("Script"))
console.log(text.substring(4, 10))
console.log(text.toUpperCase())

text2 = "   Hello World!   "
console.log(text2.trim()) // "Hello World!"

text3 = "I love JavaScript"
console.log(text3.replace("JavaScript", "Python")) // I love Python

mobile = "iPhone"
price = 25000
console.log(`The price of ${mobile} is ${price} rupees.`) // The price of iPhone is 25000 rupees.