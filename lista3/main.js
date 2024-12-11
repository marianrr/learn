const form = document.querySelector("form")
const input1 = document.getElementById("input1")
const ul = document.querySelector("ul")
const onSubmit = (e) => {
    const ki = []

    const form1 = new FormData(e.currentTarget)
    for (let elem of form1.values()) {
        console.log(elem)
        ki.push(elem)
        const li = document.createElement("li")
        li.textContent = elem
        ul.appendChild(li)
    }

    input1.value = ""
    e.preventDefault()
}

form.addEventListener("submit", onSubmit)