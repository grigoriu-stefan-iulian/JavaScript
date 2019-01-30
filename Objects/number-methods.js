/*
let num = 122.543114;

console.log(num.toFixed(20))

console.log(Math.round(num))
console.log(Math.floor(num))
console.log(Math.ceil(num)) 


////////
let min = 0
let max = 1

let numRandom = Math.floor(Math.random() * (max-min + 1)) + min
console.log(numRandom)
*/

//// CHALLENGE

let guess = function (num) {
    let min = 1
    let max = 5
    let numRandom = Math.floor(Math.random() * (max-min + 1)) + min
    console.log(numRandom)  

    return num === numRandom
}

console.log(guess(5));