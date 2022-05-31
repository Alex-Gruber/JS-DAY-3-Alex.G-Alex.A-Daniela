Math.random();

var therandomNumber = Math.floor(Math.random() * 31) - 5;

// console.log(therandomNumber)
if (therandomNumber < 10) {
    console.log('The weather is cold')
} else if (therandomNumber < 16) {
    console.log('The weather is moderate')
} else {
    console.log('The weather is warm')
}


// Basic 2

let highestnumber = [2, 5, -12, -14, 3, 15, 2345, 545454, 2]
console.log(Math.max(...highestnumber))