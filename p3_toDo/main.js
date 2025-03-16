const form4 = document.getElementById("submitForm")
const input3 = document.getElementById("input1")
const ul1 = document.getElementById("container")
let notes = ["Walk in the park", "Read a book", "Go shopping in the mall", "Listen to new album"]
const submitForm2 = (e) => {
    e.preventDefault()
    const form3 = new FormData(form4)
    let note = form3.get("input1")
    console.log("Nota este: ", note)

    let li2 = document.createElement("li")
    li2.textContent = note
    li2.setAttribute("ondblclick", "ondblclick1(event)")
    li2.setAttribute("onclick", "onClick2(event)")
    ul1.appendChild(li2)
    input3.value = ""
}

const ondblclick1 = (e) => {
    e.currentTarget.remove()
}

const onClick2 = (e) => {
    e.currentTarget.setAttribute("contenteditable", "true")
}







const afis = () => {
    notes.forEach(elem => {
        let li1 = document.createElement("li")
        li1.setAttribute("ondblclick", "ondblclick1(event)")
        li1.setAttribute("onclick", "onClick2(event)")
        li1.textContent = elem
        ul1.appendChild(li1)
    }
    )
}
afis()