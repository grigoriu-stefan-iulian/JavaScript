/*
const notes = ['Note 1', 'Note 2', 'Note 3']

console.log(notes.length)

console.log(notes[notes.length - 2])
*/

// const notes = ['Note 1', 'Note 2', 'Note 3']

// console.log(notes.pop())
// notes.push('Stefan')

// console.log(notes.shift())
// notes.unshift('My first Note')

// notes.splice(1, 1, 'This is the new Note')



// notes[0] = 'This is Note'

// notes.forEach(function (item, index) {
//     console.log(index)
//     console.log(item)

// })

// // console.log(notes.length)
// console.log(notes)


// FOR -------------------------------------------------------------

// for (let count = 3; count >= 0; count--) {
//     console.log(count);
// }

// for (let count = notes.length - 1; count >= 0; count--) {
//     console.log(notes[count])
// }

// SEARCHING ARRAYS ------------------------------------------------------

// console.log(notes.indexOf('note 2'))


const notesObject = [{
    title: 'My next trip',
    body: 'I would like to go to Japan'
}, {
    title: 'Habbits to improve',
    body: 'Eat better food'
}, {
    title: 'clear room',
    body: 'Need a bit of clean up.'
}]

//------------------------------------------------------------------------------
console.log('g' < 'f')
const sortNotes = function (notes) {
    notes.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
            return -1
        } else if (b.title.toLowerCase() < a.title.toLowerCase()) {
            return 1
        } else {
            return 0
        }
    }) 
}
sortNotes(notesObject)
 console.log(notesObject)

//--------------------------------------------------------------------------------

//------------------------------------------------------------------------------
/*console.log(notesObject.indexOf({}))
const findNote = function(notes, noteTitle) {
    return notes.find(function (note, index) {
        return note.title === noteTitle
    })
    
}
const findNotes = function (notes, query) {
    return notes.filter(function (note, index) {
    const isTitleMatch = note.title.toLowerCase().includes(query.toLowerCase())
    const isBodyMatch = note.body.toLowerCase().includes(query.toLowerCase())
    return isTitleMatch || isBodyMatch;
})
}
console.log(findNotes(notesObject, 'BIT'))
*/
//-------------------------------------------------------------------------------------



// const findNote = function(notes, noteTitle) {
//     const index = notes.findIndex(function (note, index) {
//         return note.title.toLowerCase() === noteTitle.toLowerCase()
//     })
//     return notes[index]
// }

// const note = findNote(notesObject, 'Clear room')
// console.log(note);

// const index = notesObject.findIndex(function (note, index) {
//     console.log(note)
//     return note.title === 'My next trip'
// })

// console.log(index);


