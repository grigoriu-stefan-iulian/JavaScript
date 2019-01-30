let name = '  Stefan Iulian   ';

// Length property
console.log(name.length);

// UPPERCASE
console.log(name.toUpperCase());
console.log(name);

//LOWERCASE

console.log(name.toLowerCase())

//Includes Method

let pass = '123passasdd453';
console.log(pass.includes('password'))

//TRIM
console.log(name)
console.log(name.trim())


//******* */CHALLENGE
let isValidPassword = function (password) {
    return password.length > 8 && !password.includes('password')
}

console.log(isValidPassword('asdf'))
console.log(isValidPassword('acs12345dfghr'))
console.log(isValidPassword('4564545passwordfghfgh'))


