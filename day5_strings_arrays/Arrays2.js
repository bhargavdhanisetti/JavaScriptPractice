// Array Methods
let nums = [2,3];

nums.push(4);
console.log(nums) // [2,3,4]

nums.unshift(1);
console.log(nums) // [1,2,3,4]

nums.pop();
console.log(nums) // [1,2,3]

nums.shift();
console.log(nums) // [2,3]

let nums2 = [10,20,30,40,50];
console.log(nums2.slice(1,3)) // [20,30]

nums2.splice(2,1);
console.log(nums2) // [10,20,40,50]

nums2.splice(2,0,35);
console.log(nums2) // [10,20,35,40,50]

let arr1 = [1,2,3];
let arr2 = [4,5,6];
let combined = arr1.concat(arr2);
console.log(combined) // [1,2,3,4,5,6]

let a ="JavaScript";
let b ="Java";
let chars = a.concat(b);
console.log(chars) // JavaScript Java

console.log(a.includes(b))

console.log(arr1.includes(2)) // true

console.log(arr1.indexOf(2)) // 1
console.log(arr1.indexOf(4)) // -1

console.log(a.indexOf("Script")) // 4
console.log(a.indexOf("script")) // -1 (case-sensitive)