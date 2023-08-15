/*
    Task
    - In the function, iterate through the array `studentList`.
    - Print each student's name inside the loop using console.log().
*/

const studentList = ["Johnson", "Christina", "Michael", "Lina", "Larry", "Michelle", "Bob", "Wilson"]

function printStudentNames(studentList){
    // Add code here
    studentList.forEach((element)=>{
        console.log(element)
    })
}

printStudentNames(studentList);

// Ignore the code below this line
module.exports = {
    studentList,
    printStudentNames
}