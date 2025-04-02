let notes = [
    { name: "note 1", id: 1 },
    { name: "note 2", id: 2 },
    { name: "note 3", id: 3 },
    { name: "note 4", id: 4 },
    { name: "note 5", id: 5 },
]
console.log(notes)
const ol2 = window.ol1

const displayNotes = () => {
    notes.map(note => {
        li1 = document.createElement('li')
        li1.innerHTML = note.name + `<span class="material-symbols-outlined" onclick="edit1(event, ${note.id})">
    edit_note
    </span>` + `<span class="material-symbols-outlined" onclick="delete1(event, ${note.id})">
    delete
    </span>`
        ol2.appendChild(li1)
        console.log(note.id)
    })
}

displayNotes()

const edit1 = (event, num) => {
    console.log(event.target, num)
    ol2.replaceChildren()

    const note = notes.find(note => note.id === num)
    const prompt1 = prompt("Edit note:")
    if (prompt1) {
        console.log(prompt1)
        note.name = prompt1
        console.log(notes)
    }



    displayNotes()

}
const delete1 = (event, num) => {
    console.log(event.target, num)
    ol2.replaceChildren()
    //const note = notes.find(note => note.id === num)
    notes = notes.filter(note => note.id !== num)
    displayNotes()
    console.log(notes)

}