let allStudents = [
    ["Martin", 76],
    ["Thomas", 85],
    ["Klaus", 65],
    ["Maria", 93],
    ["David", 81]
]



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

}



for (let i = 1; i < 101; i++) {
    if (i % 15 == 0)
        console.log("FIZZ BUZZ")
    else if (i % 3 == 0)
        console.log("FIZZ")
    else if (i % 5 == 0)
        console.log("BUZZ")
    else console.log(i);
}

star = "*";
for (let i = 1; i < 8; i++) {
    console.log(star);
    star = star + "*";

}