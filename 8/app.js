const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const app = express()
app.use(express.json())
const { faker, fakerRO } = require("@faker-js/faker")
const PORT = process.env.PORT

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

db.connect((err) => {
    if (err) {
        console.error("Can't connect to database!")
        return
    }
    else {
        console.log("Connected to database.")
        console.log(fakerRO.person.firstName())
    }
})


app.get("/people", (req, res) => {
    const query = "SELECT * FROM doi"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can't retrieve the data!")
            return
        }
        else {
            res.status(200).json(result)
        }
    })
})



app.get("/", (req, res) => {
    const query = `
    INSERT INTO doi (nume, prenume, locatie, oras, strada) VALUES 
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}"),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}");
    `


    db.query(query, (err, result) => {
        if (err) {
            console.error("Nu am putut sa inserez in tabel.")
            return
        }
        else {
            console.log(result)
            res.status(200).send("Welcome Home!")
        }
    })
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))