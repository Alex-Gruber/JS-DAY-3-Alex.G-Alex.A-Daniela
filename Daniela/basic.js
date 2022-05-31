// Math.random();

// var therandomNumber = Math.floor(Math.random() * 31) - 5;

// // console.log(therandomNumber)
// if (therandomNumber < 10) {
//     console.log('The weather is cold')
// } else if (therandomNumber < 16) {
//     console.log('The weather is moderate')
// } else {
//     console.log('The weather is warm')
// }


// // Basic 2

// let highestnumber = [2, 5, -12, -14, 3, 15, 2345, 545454, 2]
// console.log(Math.max(...highestnumber))


// Basic 3






function myFunction() {
    var randomNumber = Math.floor(Math.random() * 41) - 5;

    console.log(randomNumber)
    if (randomNumber < 10) {
        console.log('The weather is cold')
    } else if (randomNumber < 25) {
        console.log('The weather is moderate')
    } else {
        console.log('The weather is hotttt')
    }


    if (randomNumber < 11) {
        document.getElementById('moderate').style.display = "none";
        document.getElementById('hot').style.display = "none";
    } else if (randomNumber < 25) {
        document.getElementById('cold').style.display = "none";
        document.getElementById('hot').style.display = "none";
    } else {
        document.getElementById('cold').style.display = "none";
        document.getElementById('moderate').style.display = "none";
    }
}
myFunction();