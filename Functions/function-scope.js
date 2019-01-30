 

let convert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

let tempOne = convert(32);
let tempTwo = convert(68)

console.log(tempOne);
console.log(tempTwo);

let name = 'Jen'
let time = 'today'
console.log(`Hey, ${name}! How are you ${time}?`)