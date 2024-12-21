window.onload = () => {

    fetch("/people")
        .then(data => data.json())
        .then(people => {
            console.log(people)
            people.map(elem => {

                const p2 = document.createElement("p")
                p2.textContent = `FirstName: ${elem.firstname}---LastName: ${elem.lastname}---Country: ${elem.location}---City: ${elem.city}---Street: ${elem.street}`
                document.body.appendChild(p2)

            })
        })
        .catch(error => console.error("Eroarea este:", error))
}