let notes = [
    { name: "walk", id: 1 },
    { name: "talk", id: 2 },
    { name: "listening music tommorrow", id: 3 },
    { name: "read something", id: 4 },
]

let i = 4

const display = () => {
    notes.map(note => {
        const li1 = document.createElement("li")
        li1.innerHTML = note.name + `<span class="material-symbols-outlined" onclick="edit1(${note.id})">edit_note</span>` + `<span class="material-symbols-outlined" onclick="delete1(event, ${note.id})">delete</span>`

        window.ol1.appendChild(li1)


    })
}
display()

const submit1 = (event, id) => {
    event.preventDefault()
    window.ol1.replaceChildren()
    notes.push({ name: window.input1.value, id: ++i })
    window.input1.value = ""

    display()

}

const delete1 = (event, id) => {
    event.target.parentElement.remove()
    notes = notes.filter(note => note.id !== id)

}

const edit1 = id => {
let note = notes.find(note => note.id === id)



}