//Undefined for VARIABLES

let name, temp, idea;

name = 'Jen'

console.log(name);
console.log(temp)
console.log(idea)

if (name === undefined) {
    console.log('Please provide a name')
} else {
    console.log(name)
}

//Undefined for FUNCTION ARGUMENTS and return default value

let square = function(num) {
    console.log(num)
}

square()

//null is an user assigned value
let age = 24

age = null

console.log(age)