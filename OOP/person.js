//Prototypal inheritance

class Person {
    constructor(firstName, lastName, age, likes = []) {
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
        this.likes = likes
    }
    getBio() {
        let bio = `${this.firstName} is ${this.age}.`

        this.likes.forEach((like) => {
            bio += ` ${this.firstName} likes ${like}.`
        })

        return bio
    }
    set fullName(fullName) {
        const names = fullName.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`
    }
}

class Employee extends Person {
    constructor(firstName, lastName, age, position, likes) {
        super(firstName, lastName, age, likes)
        this.position = position
    }
    getBio() {
        return `${this.position}: ${this.fullName}. \nWellcome back!`
    }
    getYearsLeft() {
        return `${65 - this.age} years left at out company. Enjoy! :)`
    }
}

class Student extends Person {
    constructor(firstName, lastName, age, grade, likes) {
        super(firstName, lastName, age, likes)
        this.grades = grade
    }
    getBio() {
        const bio = this.grades > 70 ? `passing` : `failing`
        return `${this.firstName} is ${bio} the class. Score: ${this.grades}`
    }
    updateGrade(grade) {
        this.grades += grade
    }
}

const studentOne = new Employee('Stefan', 'Iulian', 24, 'Doctor', ['Sport'])
studentOne.fullName = 'Leonas Ciprian'
// studentOne.updateGrade(90)
// studentOne.updateGrade(-50)
// studentOne.updateGrade(-50)
console.log(studentOne.getBio())

