const square = (num) => num * num

const squareLong = (num) => {
    return num * num
}

console.log(square(5))

const people = [{
    name: 'Stefan',
    age: 24
}, {
    name: 'Andrei',
    age: 22
}, {
    name: 'Claudiu',
    age: 35
}]

const under30 = people.filter((person) => person.age < 30)
console.log(under30)

const age22 = people.find((person) => person.age === 22)
console.log(age22.name)