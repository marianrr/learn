const express = require("express")
const mysql = require("mysql2")
const app = express()
const PORT = 3000

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "people4",
    connectionLimit: 10
})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS people4 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`
// db.connect((err) => {
//     if (err) {
//         console.error("Connection aborted!")
//         return
//     }
//     else {
//         console.log("Connection successful!")
//     }
// })

db.query(createTableQuery, err => {
    if (err) {
        console.error("Table was not created!")
        return
    }
    else {
        console.log("Table created!")
    }
})


app.get("/people/delete/:id", (req, res) => {
    const deletePerson = `DELETE FROM people4 WHERE id=${req.params.id}`
    db.query(deletePerson, (err, result) => {
        if (err) {
            console.error("Can't delete the user!")
            return
        }
        else {
            res.status(200).send(`Deleted the person with id equal to ${req.params.id}`)
        }
    })

})

app.get("/people/:id", (req, res) => {
    const getPerson = `SELECT id, name, age FROM people4 WHERE ID=${req.params.id}`
    db.query(getPerson, (err, result) => {
        if (err) {
            console.error("Can't retrieve person!")
            return
        }
        else {
            res.status(200).send(result)
        }
    })
})

app.get("/people", (req, res) => {
    const getAllPeople = `SELECT * FROM people4`
    db.query(getAllPeople, (err, result) => {
        if (err) {
            console.error("Can't retrieve people.")
            return
        }
        else {
            console.log("People are: ", result)
            res.status(200).send(result)
        }
    })
})






app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page!")
})

app.listen(PORT, () => {
    console.log(`Listening to port ${PORT}.`)
})