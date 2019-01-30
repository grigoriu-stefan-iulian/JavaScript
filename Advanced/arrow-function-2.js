// Arrow functions don't have the 'arguments' value
//const add = (a, b) => arguments[0] + arguments[1]


const addLong = function (a, b) {
    return arguments[0] + arguments[1]
}

//console.log(add(11, 22, 33, 44))

const car = {
    color: 'red',
    getSummary() {
        return `The car is ${this.color}`
    }
}
console.log(car.getSummary())