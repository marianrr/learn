const express = require("express")
const mysql = require("mysql2")
const app = express()
const PORT = 3000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "people3"
})

db.connect((err) => {
    if (err) {
        console.error("Database not found!")
        return
    }
    console.log("Connection successful!")
})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS people3 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`

db.query(createTableQuery, (err) => {
    if (err) {
        console.error("Table was not created!")
        return
    }
    console.log("Table created!")
})


app.get("/peopl", (req, res) => {
    const peopleDisplay = `SELECT * FROM people3`
    db.query(peopleDisplay, (err, result) => {
        if (err) {
            console.log("I can't display the people.")
            return
        }
        else {
            console.log(result)
            res.status(200).send(result)
        }

    })

})

// insert one user

app.get("/people/:name/:age", (req, res) => {
    const addOnePerson = "INSERT INTO people3 (name, age) VALUES (?,?)"
    db.query(addOnePerson, [req.params.name, Number(req.params.age)], (err, result) => {
        if (err) {
            console.error("Can't add person to the table.")
            return
        }
        else {
            console.log(result)
            res.status(201).send(`${req.params.name}---${req.params.age}`)
        }
    })
})


app.get("/people/:name", (req, res) => {

    const updatePerson = "UPDATE people3 SET age='44444' WHERE name=?"
    db.query(updatePerson, [req.params.name], (err, result) => {
        if (err) {
            console.error("Can't update the person.")
            return
        }
        else {
            console.log(result)
            res.status(201).send("person updated")
        }
    })

})


app.get("/col/:id", (req, res) => {
    const deletePerson = "DELETE FROM people3 WHERE id=?"
    db.query(deletePerson, [req.params.id], (err, result) => {
        if(err) {
            console.log("Can't delete the person.")
            return
        }
 else {
    console.log(result)
    res.status(200).send("Person deleted.")
 }
    })
})




app.get("/", (req, res) => {
    res.status(200).send("Welcome to home page!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))