const Car= {
    brand : "bmw",
    model : "x5",
    year : 2026,
    start : function(){
        console.log("car started");
    }
}
console.log(Car.brand);
console.log(Car.model);
console.log(Car.year);
Car.start();

const Student = {
    name : "Alice",
    age : 20,
    marks : 85,
    checkResults : function(){
        if(this.marks >= 40){
            console.log("\n pass");
        } else {
            console.log("fail");
        }
    },
    introduce () {
        console.log("Hello, my name is " + this.name);
    }
};
console.log(Student.name);
console.log(Student.age);
console.log(Student.marks);
Student.checkResults();
Student.introduce();

// Modifying properties
delete Student.age;
console.log(Student);

Student.age = 25;
console.log(Student);