// let toDo = ['run', 'play', 'sing', 'joke', 'walk']
// console.log(`You have ${toDo.length} todos.`)
// console.log(`Todo: ${toDo[0]}.`)
// console.log(`Todo: ${toDo[toDo.length - 2]}.`)

// let toDo = ['run', 'play', 'sing', 'joke', 'walk']

// toDo.splice(2, 1);
// toDo.push('New Item')
// toDo.shift()

// console.log(`You have ${toDo.length} todos.`)

// // console.log(toDo)
// toDo.forEach(function(item, index) {
//     console.log(`${index + 1}. ${item}`)
// })

// for (let count = 0; count < toDo.length; count++) {
//     console.log(`${count + 1}. ${toDo[count]}`)
// }


//---------------------------------------------------------------

const toDo = [{
    text: 'Run',
    completed: false
}, {
    text: 'Play',
    completed: true
}, {
    text: 'Sing',
    completed: true
}, {
    text: 'Joke',
    completed: true
}, {
    text: 'Walk',
    completed: false
}]

console.log(false < true)
console.log('a' < 'b')


const sortToDos = function (todos) {
    todos.sort(function (a, b) {
        if (a.completed < b.completed) { // if (!a.completed && b.completed)
            return -1
        } else if (b.completed < a.completed) {  // if (!b.completed && a.completed)
            return 1
        } else {
            return 0
        }
    })
}

sortToDos(toDo)
console.log(toDo)
//---------------------------------------------------------------------
/*
const deleteTodo = function (notes, noteTitle) {
    const findNote = notes.findIndex(function (note) {
        return note.text.toLowerCase() === noteTitle.toLowerCase()
    })
    if ( findNote > -1) {
        notes.splice(findNote, 1)
    }
}
*/
//---------------------------------------------------------------------------------
/*
const getThingsToDo = function (list) {
    return list.filter(function (arry) {
        return !arry.completed
    })
}

// deleteTodo(toDo, 'sings');
// console.log(toDo);

console.log(getThingsToDo(toDo))
*/