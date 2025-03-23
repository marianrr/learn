const notes = [
    { name: "unu", id: 1 },
    { name: "doi", id: 2 },
    { name: "trei", id: 3 },
    { name: "patru", id: 4 },
    { name: "cinci", id: 5 },
    { name: "sase", id: 6 },
    { name: "sapte", id: 7 },
]
let i = 7
window.ul1.textContent = "dj guga la felipa"



const submit1 = (e) => {
    e.preventDefault()
    let note = { name: window.input1.value, id: ++i }
    notes.push(note)
    const li2 = document.createElement("li")
    window.input1.value = ""
    console.log(notes)
    window.ul1.replaceChildren()
    display()

}

const display = () => notes.map(note => {
    let li1 = document.createElement("li")
    li1.innerHTML = `${note.name} --- ${note.id}` + `<span class="material-symbols-outlined" onclick="edit2(event, ${note.id})">
edit_note
</span>` + `<span class="material-symbols-outlined" onclick="delete2(event, ${note.id})">delete</span>`
    window.ul1.appendChild(li1)
})

display()

const delete2 = (e, num) => {
    console.log(e.target, num)
    e.target.parentElement.remove()
    notes.splice(notes.findIndex(note => note.id === num), 1)
    console.log(notes)
}

const edit2 = (e, num) => {
    const note = notes.find(note => note.id === num)
    const cos = prompt(`${note.name}`)
    if (cos) {
        note.name = cos
    }
    //notes.splice(notes.findIndex(note => note.id === num), 1)
    console.log(notes)
    window.ul1.replaceChildren()
    display()
}

const change1 = e => {

    window.input1.value = e.target.value
    console.log(window.input1)


}