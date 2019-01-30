// function - input, code, output (return value)
/*
let greetUser = function () {
    console.log('Welcome User')
}

greetUser();

let square = function (num) {
    let result = num * num;
    return result
}

let value = square(3);
let otherValue = square(10);
console.log(square(3))
console.log(otherValue)
*/


/*
function square (num) {
    console.log(num)
}

square(2)
square(44)
*/


//CHALLENGE-----------convert

let convert = function (fahrenheit) {
    let celsius = (fahrenheit - 32) * 5 / 9;
    return celsius;
}

console.log(convert(32));
console.log(convert(68));