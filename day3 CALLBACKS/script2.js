function average(marks) {
    let sum = 0;
    for (let i = 0; i < marks.length; i++) {
        sum += marks[i];
    }
    return sum / marks.length;
}

function grade(average) {
    if (average >= 90) {
        return "A";
    } else if (average >= 80) {
        return "B";
    } else if (average >= 70) {
        return "C";
    } else if (average >= 60) {
        return "D";
    } else {
        return "F";
    }
}

function createreport(name, marks) {
    const avg = average(marks);
    const grd = grade(avg);
    return {
        name: name,
        marks: marks,
        average: avg,
        grade: grd
    };
}

function displayreport(report){
    console.log("Student Name: " + report.name);
    console.log("Marks: " + report.marks.join(", "));
    console.log("Average: " + report.average.toFixed(2));
    console.log("Grade: " + report.grade);
}
name1 =prompt("Enter student name:");
marks1 = prompt("Enter marks separated by commas:").split(",").map(Number);
const studentReport1 = createreport(name1, marks1);
displayreport(studentReport1);