const input2 = document.getElementById("input1")
const ol1 = document.getElementsByTagName("ol")[0]
let i = 1
let arr = []
const submit1 = (event, id) => {

    if (id) {
        event.preventDefault()
        const li1 = document.createElement("li")
        li1.setAttribute("id", i++)
        li1.innerHTML = input2.value + '<span class="material-symbols-outlined" onclick="edit1(event)">edit_note</span>' + '<span class="material-symbols-outlined" onclick="delete1(event)">delete</span>'
        ol1.appendChild(li1)
        input2.value = ""
        return
    }
    else {
        event.preventDefault()
        const li1 = document.createElement("li")
        li1.setAttribute("id", i++)
        li1.innerHTML = input2.value + '<span class="material-symbols-outlined" onclick="edit1(event)">edit_note</span>' + '<span class="material-symbols-outlined" onclick="delete1(event)">delete</span>'
        ol1.appendChild(li1)
        input2.value = ""
        arr.push()
    }
}

const change1 = event => {
    input2.value = event.target.value
}

const delete1 = (event) => {
    console.log(event.currentTarget.parentElement.remove())
}

const edit1 = event => {
    console.log(event.currentTarget.parentElement)
    let ff = event.currentTarget.parentElement
    const ki = ff.textContent.substring(0, ff.textContent.indexOf("edit"))
    console.log(ki)
    input2.value = ki
    ff = input2.value

    submit1(event, ff.id)
}