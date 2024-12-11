const ul = document.querySelector("ul")
const input1 = document.querySelector("input")
const form = document.querySelector("form")

const submit1 = (e) => {

    const li = document.createElement("li")
    li.textContent = input1.value
    ul.appendChild(li)
    e.preventDefault()
    input1.value = ""
}

form.addEventListener("submit", submit1)