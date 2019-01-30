'use strict'

let notesObject = getSavedData()

const filters = {
    searchText: '',
    sortBy: 'byEdited'
}

// Check existing data
const div = document.querySelector('#notes')

renderNotes(notesObject, filters)

document.querySelector('#create-note').addEventListener('click', (e) => {
    const id = uuidv4()
    const timestamp = moment().valueOf()
    notesObject.push({
        id: id,
        title: '',
        body: '',
        createdAt: timestamp,
        updatedAt: timestamp
    })
    saveNotes(notesObject)
    location.assign(`/edit.html#${id}`)
})

document.querySelector('#search-text').addEventListener('input', (e) => {
    filters.searchText = e.target.value
    renderNotes(notesObject, filters)
})

document.querySelector('#filter-by').addEventListener('change', (e) => {
    filters.sortBy = e.target.value
    renderNotes(notesObject, filters)
})

window.addEventListener('storage', (e) => {
    if (e.key === 'notesObject') {
        notesObject = JSON.parse(e.newValue)
        renderNotes(notesObject, filters)
    }
})
