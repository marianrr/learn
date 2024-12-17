const express = require("express")
const mysql = require("mysql2")
const app = express()
const PORT = 3000
app.use(express.json())

const db2 = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
})
const createDatabase = "CREATE DATABASE IF NOT EXISTS people6"
db2.query(createDatabase, (err) => {
    if (err) {
        console.error("Can't create database!")
        return
    }
    console.log("Database created!")
})

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "people6"
})

db.connect((err) => {
    if (err) {
        console.error("Can't connect!")
        return
    }
    console.log("Connected!")
})

const createTable = `CREATE TABLE IF NOT EXISTS people (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)`


db.query(createTable, (err) => {
    if (err) {
        console.error("Can't create table!")
        return
    }
    console.log("Table created!")
})

app.get("/people", (req, res) => {
    const peopleQuery = "SELECT * FROM people"
    db.query(peopleQuery, (err, result) => {
        if (err) {
            console.error("Can't retrieve people!")
            return
        }
        else {
            console.log(result)
            res.status(200).json(result)
        }
    })
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))