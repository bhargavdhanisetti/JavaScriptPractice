string = "bhargav@gmail.436@$#com"
console.log(string.length)


function countChars(str){
    let count =0;
    for(let i =0 ;i< string.length ; i++){
        if (str[i]>="a"&& str[i]<="z"){
            count ++
        }
    }
    return count;
}
console.log(countChars(string))