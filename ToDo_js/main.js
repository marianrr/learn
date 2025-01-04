const form1 = document.getElementById("form1")
const input1 = document.getElementById("input1")




const edit2 = (e) => {
    const lol = e.currentTarget.parentElement
    






}


const delete2 = (e) => {
    const dd = e.currentTarget.parentElement
    dd.remove()
}

const submit1 = (e) => {
    e.preventDefault()
    const form2 = new FormData(form1)
    const name = form2.get("input1")
    const p1 = document.createElement("p")
    p1.innerHTML = `<span>${name}</span>
    <span class="material-symbols-outlined edit1">
edit_square
</span>
    <span class="material-symbols-outlined delete1">
delete
</span>
    `

    p1.firstChild.setAttribute("contenteditable", "true")
    form1.appendChild(p1)
    input1.value = ""


    const span2 = p1.querySelector(".delete1")

    const span1 = p1.querySelector(".edit1")

    span2.addEventListener("click", delete2)
    span1.addEventListener("click", edit2)

}

form1.addEventListener("submit", submit1)

