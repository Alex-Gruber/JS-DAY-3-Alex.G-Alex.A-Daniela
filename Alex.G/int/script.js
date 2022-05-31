let allStudents = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]
console.log("hi")


for (let i = 0; i < allStudents.length; i++) {
    if (60 > allStudents[i][1]) {
        console.log(allStudents[i][0], "your grade is E", allStudents[i][1])
    } else if (70 > allStudents[i][1]) {
        console.log(allStudents[i][0], "your grade is D", allStudents[i][1])
    } else if (80 > allStudents[i][1]) {
        console.log(allStudents[i][0], "your grade is C", allStudents[i][1])
    } else if (90 > allStudents[i][1]) {
        console.log(allStudents[i][0], "your grade is B", allStudents[i][1])
    } else if (100 > allStudents[i][1]) {
        console.log(allStudents[i][0], "your grade is A", allStudents[i][1])
    }
    console.log("hi")
}