arr1 = ["maths", "english", "science", "history"];
arr2 = ["art", "music", "physical education"];

let allSubjects = arr1.concat(arr2);
console.log(allSubjects) // ["maths", "english", "science", "history", "art", "music", "physical education"]

searchSubject = "maths";
if(allSubjects.includes(searchSubject)){
    console.log(searchSubject + " is included in the subjects list.");
    let index = allSubjects.indexOf(searchSubject);
    console.log("The index of '" + searchSubject + "' is: " + index);
}
else{
    console.log(searchSubject + " is not included in the subjects list.");
}