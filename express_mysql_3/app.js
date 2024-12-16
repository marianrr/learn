const express = require("express")
const mysql = require("mysql2")
const app = express()
const PORT = 3000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "people_2"
})

db.connect((err) => {
    if (err) {
        console.error("Database error connection!")
        return
    }
    console.log("Connection successful!")
})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS people2 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`
db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error("Table was not created!")
    }
    else console.log("Table created!")
})


app.get("/people", (req, res) => {
    const displayPeopleQuery = `SELECT * FROM people2`
    db.query(displayPeopleQuery, (err, result) => {
        if (err) {
            console.error("Can't fetch people data!")
            return
        }
        res.status(200).send(result)
    })


})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to my HOME page!")
})


app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})