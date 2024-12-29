const form1 = document.getElementById("form1")
const table = document.getElementById("table1")



const submit1 = (e) => {
    e.preventDefault()
    const formdata = new FormData(form1)
    const id = formdata.get("id_person")
    const name = formdata.get("name")
    const location = formdata.get("location")
    const age = formdata.get("age")
    console.log(id, name, location, age)
    const tr = document.createElement("tr")
    tr.innerHTML = `<td style="border:2px solid gray">${id}</td><td style="border:2px solid gray">${name}</td><td style="border:2px solid gray">${location}</td><td style="border:2px solid gray">${age}</td>`
    table.appendChild(tr)
}

form1.addEventListener("submit", submit1)