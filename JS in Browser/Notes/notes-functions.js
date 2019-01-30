'use strict'

// Check existing data
const getSavedData = () => {
    const notesJSON = localStorage.getItem('notesObject')

    try {
        return notesJSON ? JSON.parse(notesJSON) : []
    } catch (e) {
        return []
    }

}

const saveNotes = (notes) => {
    localStorage.setItem('notesObject', JSON.stringify(notes))
}

// Remove note from list
const removeNote = (id) => {
    const noteIndex = notesObject.findIndex((note) => note.id === id)

    if (noteIndex > -1) {
        notesObject.splice(noteIndex, 1)
    }
}

// Generate the DOM structure for a note

const generateNoteDOM = (todo) => {
    const newPara = document.createElement('div')
    const textEl = document.createElement('a')
    const button = document.createElement('button')

    // Remove note Button
    button.textContent = 'x'
    button.addEventListener('click', () => {
        removeNote(todo.id)
        saveNotes(notesObject)
        renderNotes(notesObject, filters)
    })

    newPara.appendChild(button)

    //Note title text
    if (todo.title.length > 0) {
        textEl.textContent = todo.title
    } else {
        textEl.textContent = ' Unnamed note '
    }
    textEl.setAttribute('href', `edit.html#${todo.id}`)
    newPara.appendChild(textEl)

    return newPara
}

// sort notes by one of the three ways
const sortNotes = (notes, sortBy) => {
    if (sortBy === 'byEdited') {
        return notes.sort((a, b) => {
            if (a.updatedAt > b.updatedAt) {
                return -1
            } else if (a.updatedAt < b.updatedAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'byCreated') {
        return notes.sort((a, b) => {
            if (a.createdAt > b.createdAt) {
                return -1
            } else if (a.createdAt < b.createdAt) {
                return 1
            } else {
                return 0
            }
        })
    } else if (sortBy === 'alphabetical') {
        return notes.sort((a, b) => {
            if (a.title.toLowerCase() < b.title.toLowerCase()) {
                return -1
            } else if (a.title.toLowerCase() > b.title.toLowerCase) {
                return 1
            } else {
                return 0
            }
        })
    } else {
        return notesObject
    }


}

// Render application notes
const renderNotes = (notes, filters) => {
    notes = sortNotes(notesObject, filters.sortBy)
    const filteredNotes = notes.filter((note) => note.title.toLowerCase().includes(filters.searchText.toLowerCase())
    )

    div.innerHTML = ''

    filteredNotes.forEach((todo) => {
        const newPara = generateNoteDOM(todo)
        div.appendChild(newPara)
    })
}

// Generate last edited
const generateLastEdited = (timestamp) => `Last edited ${moment(timestamp).fromNow()}`


