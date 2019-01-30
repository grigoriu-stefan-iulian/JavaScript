//Multiple arguments

/*
let add = function (a, b, c) {
    return a + b + c;
}

let result = add(10, 15, 5);
console.log(result)


//Default arguments
let getScoreText = function (name = 'Anonymous', score = 0) {
   // return 'Name: ' + name + ' - Score: ' + score
    return `Name: ${name} - Score: ${score}`
}

let scoreText = getScoreText(undefined, 9999);
console.log(scoreText);
*/

//Challenger

let calculateTip = function (total, tipProcent = .2) {
    let tip = total * tipProcent
    let procent = tipProcent * 100;
    return `A ${procent}% tip on $${total} would be $${tip}.`
}

console.log(calculateTip(40, .25));