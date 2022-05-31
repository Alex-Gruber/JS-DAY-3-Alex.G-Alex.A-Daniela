// let minus5 = -5
// let plus25 = 25

// function temp(minus5, plus25) {
//     return Math.random() * (plus25 - minus5) + minus5;
// }

// let randomNumbers = [];

// for (let i = 0; i < 25; ++i) {
//     randomNumbers[i] = temp(minus5, plus25);
//     randomNumbers[i] = Math.floor(randomNumbers[i]);
// }


// console.table(randomNumbers)

// function prognose() {
//     if (temp(-5, 25) < 10) {
//         console.log("The weather is cold")
//     } else {
//         console.log("The weather is moderate")
//     }
// }

// prognose();

const array1 = [1, 7, -3, 9];

console.log(Math.max(...array1));


// basic3......

let minus5 = -5
let plus32 = 32

function temp(minus5, plus32) {
    return Math.random() * (plus32 - minus5) + minus5;
}

let randomNumbers = [];

for (let i = 0; i < 32; ++i) {
    randomNumbers[i] = temp(minus5, plus32);
    randomNumbers[i] = Math.floor(randomNumbers[i]);
}


// console.table(randomNumbers)

// function prognose() {
//     if (temp(-5, 32) < 10) {
//         console.log("The weather is cold")
//     } else if (temp(-5, 32) > 32) {
//         console.log("The weather is hot")
//     } else {
//         console.log("The weather is moderate")
//     }
// }

// prognose();


function getRandom(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

let card = document.getElementsByClassName('card')[0];

let random = getRandom(-5, 32);
console.log(random);
if (random >= -5 && random <= 10) {
    console.log("The weather is cold")
    card.innerHTML = `
    <img src="https://images.pexels.com/photos/54204/pexels-photo-54204.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">The weather is cold</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div> 
    `
} else if (random >= 10 && random <= 25) {
    console.log("The weather is mild")
    card.innerHTML = `
    <img src="https://images.pexels.com/photos/175407/pexels-photo-175407.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">The weather is mild</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
    `
} else if (random >= 25 && random <= 32) {
    console.log("The weather is hot")
    card.innerHTML = `
    <img src="https://images.pexels.com/photos/1045113/pexels-photo-1045113.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" class="card-img-top" alt="...">
    <div class="card-body">
        <h5 class="card-title">The weather is hot</h5>
        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        
    </div>
    `
}