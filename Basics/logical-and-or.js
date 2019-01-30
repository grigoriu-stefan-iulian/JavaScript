let temp = 55;

//Logical and operator
/*
if (temp >=60 && temp <= 90) {
    console.log('It is pretty nice outside')
} else if (temp <= 0 || temp >= 120) {
    console.log('Do not go outside')
} else {
    console.log('Do what you want')
}
*/

let isGuestOneVegan = false;
let isGuestTwoVegan = false;

if (isGuestOneVegan && isGuestTwoVegan) {
    console.log('Vegan dishes!')
} else if (isGuestOneVegan || isGuestTwoVegan) {
    console.log('Some Vegan Food Available!')
} else {
    console.log('Anything is on the Menu.')
}