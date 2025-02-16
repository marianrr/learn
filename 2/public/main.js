const form1 = document.getElementById("form1")
const input1 = document.getElementById("input1")
const ul = document.getElementById("ul1")

const submit1 = (e) => {
    e.preventDefault()
    const form2 = new FormData(form1)
    const note = form2.get("input1")
    console.log("The note is: ", note)
    const li = document.createElement("li")
    li.textContent = note
    ul.appendChild(li)

    input1.value = ""

}

form1.addEventListener("submit", submit1)