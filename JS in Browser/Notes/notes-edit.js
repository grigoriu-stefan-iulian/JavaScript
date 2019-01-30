'use strict'

const noteId = location.hash.substring(1)
let notesObject = getSavedData()
let note = notesObject.find((note) => note.id === noteId)

if (!note) {
    location.assign('/index.html')
}

const noteTitle = document.querySelector('#note-title')
const noteBody = document.querySelector('#note-body')
const lastUpdated = document.querySelector('#last-updated')
removeButton = document.querySelector('#remove-button')

noteTitle.value = note.title
noteBody.value = note.body
lastUpdated.textContent = generateLastEdited(note.updatedAt)

noteTitle.addEventListener('input', (e) => {
    note.title = e.target.value
    note.updatedAt = moment().valueOf()
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notesObject)
})

noteBody.addEventListener('input', (e) => {
    note.body = e.target.value
    note.updatedAt = moment().valueOf()
    lastUpdated.textContent = generateLastEdited(note.updatedAt)
    saveNotes(notesObject)
})

removeButton.addEventListener('click', (e) => {
    removeNote(note.id)
    saveNotes(notesObject)
    location.assign('/index.html')
})

window.addEventListener('storage', (e) => {
    if (e.key = 'notesObject') {
        notesObject = JSON.parse(e.newValue)
        note = notesObject.find((note) => note.id === noteId
        )
        
        if (!note) {
            location.assign('/index.html')
        }
        
        noteTitle.value = note.title
        noteBody.value = note.body        
        lastUpdated.textContent = generateLastEdited(note.updatedAt)
    }
})