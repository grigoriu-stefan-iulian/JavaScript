const createCounter = () => {
    let count = 0
    return {
        increment() {
            count++
        },
        decrement() {
            count--
        },
        get() {
            return count
        }
    }
}

const counter = createCounter()
counter.increment()
counter.decrement()
counter.increment()
console.log(counter.get())

// Adder - CURRYING
const createAdder = (a) => {
    return (b) => {
        return a + b
    }
}

const add10 = createAdder(10)
console.log(add10(5))

// Tipper
const createTipper = (tipProcent) => {
    return (billAmount) => {
        return billAmount * tipProcent
    }
}

const tip15 = createTipper(.15)

console.log(tip15(100))