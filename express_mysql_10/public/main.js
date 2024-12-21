window.onload = () => {
    fetch("http://localhost:3000/people")
        .then(data => data.json())
        .then(result => {
            people = result
            console.log("Oamenii mei: ", people)

            people.map(elem => {
                const p2 = document.createElement("p")
                p2.textContent = `Nume: ${elem.name}---Prenume: ${elem.age}---Varsta: ${elem.age}---Oras: ${elem.location}---Insigna: ${elem.badge}---Ocupatie: ${elem.occupation}`
                document.body.getElementsByClassName("lush")[0].appendChild(p2)
            })

        })
        .catch(error => console.error(error))

}

