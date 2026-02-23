let nums = [1,2,3,4,5];

sum = nums.reduce(function(accmulator,current){
    return accmulator + current
},0);
console.log(sum);

sum = nums.reduce((acc,curr)=>acc+curr,0);
console.log(sum);