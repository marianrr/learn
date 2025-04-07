
let ss = JSON.parse(localStorage.getItem('users'))
if (!ss) {
    localStorage.setItems('users', JSON.stringify([
        {
            name: "one",
            password: "parola",
            notes: ["note 1", "note 2", "note 3"]
        },
        {
            name: "two",
            password: "parola",
            notes: ["note 4", "note 5", "note 6"]
        },


    ]))
}


console.log(window.location.href)
const so = async () => {
    let jj = JSON.parse(localStorage.getItem("users"))

    window.ol1.replaceChildren()
    jj.notes.forEach(note => {
        let li1 = document.createElement('li')
        li1.textContent = `${note}`
        window.ol1.appendChild(li1)
    })


}

so()

const submit2 = async (event) => {
    event.preventDefault()
    let note = window.name2.value
    let jj = JSON.parse(localStorage.getItem("users"))
    jj.notes.push(note)


    window.ol1.replaceChildren()
    notes.forEach(note => {
        let li1 = document.createElement('li')
        li1.textContent = `${note}`
        window.ol1.appendChild(li1)
    })

    window.name2.value = ''
}