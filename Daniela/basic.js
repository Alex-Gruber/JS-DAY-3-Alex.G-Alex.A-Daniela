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