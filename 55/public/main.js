let notes = [
    { name: "unu", id: 1 },
    { name: "doi", id: 2 },
    { name: "trei", id: 3 },
    { name: "patru", id: 4 },
    { name: "cinci", id: 5 },
    { name: "sase", id: 6 },
]

let i = 6

const edit1 = (event, id) => {
    console.log("Id-ul este ", id)
    let note = notes.find(note => note.id === id)
    let prompt1 = prompt(`${note.name}`)
    if (prompt1) {
        note.name = prompt1
        console.log(note)
        window.ol1.replaceChildren()
        showNotes()
    }
}


const delete1 = event => {
    event.target.parentElement.remove()
}

const showNotes = () => {
    notes.map(note => {
        let li1 = document.createElement('li')
        li1.innerHTML = `${note.name}` + `<span class="material-symbols-outlined" onclick="edit1(event, ${note.id})">
edit_note
</span>` + `<span class="material-symbols-outlined" onclick="delete1(event, ${note.id})">
delete_forever
</span>`

        window.ol1.appendChild(li1)

    })
}

const submit1 = event => {
    event.preventDefault()
    let note = { name: window.input1.value, id: ++i }
    console.log("Note is ", note)
    notes.push(note)
    window.ol1.replaceChildren()
    showNotes()
    window.input1.value = ""

}

showNotes()