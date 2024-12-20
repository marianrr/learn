const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const app = express()
app.use(express.json())
const { faker, fakerRO } = require("@faker-js/faker")
const PORT = process.env.PORT

const db1 = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD
})
const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const createDatabase = "CREATE DATABASE IF NOT EXISTS people9"

db1.query(createDatabase, (err) => {
    if (err) {
        console.error("Can't create database.")
        return
    }
    else {
        console.log("Database created.")
    }
})

const createTable = `
CREATE TABLE IF NOT EXISTS people9 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
lastname VARCHAR(255) NOT NULL,
location VARCHAR(255) NOT NULL,
city VARCHAR(255) NOT NULL,
street VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`
db.connect((err) => {
    if (err) {
        console.error("Can't connect to database.")
        return
    }
    else {
        console.log("Connected to database.")
    }
})

db.query(createTable, (err) => {
    if (err) {
        console.error("Can't create table.")
        return
    }
    else {
        console.log("Table created.")
    }
})

app.get("/people", (req, res) => {
    const query = "SELECT * FROM people9"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can't display people.")
            return
        }
        else {
            console.log(".", result)
            res.status(200).json(result)
        }
    })
})
app.get("/insert", (req, res) => {
    const query = `
    INSERT INTO people9 (name ,lastname ,location ,city ,street,age) VALUES 
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)}),
    ("${fakerRO.person.firstName()}", "${fakerRO.person.lastName()}", "Romania", "${fakerRO.location.city()}", "${fakerRO.location.street()}", ${faker.number.int(100)});
    `
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can't insert.")
            return
        }
        else {
            console.log("Inserted.", result)
            res.status(201).send("Inserted.")
        }
    })
})
app.get("/update", (req, res) => {
    const query = "UPDATE people9 SET name=?, lastname=?, location=?, city=?, street=?, age=? WHERE id=?"
    db.query(query, ["mili", "rosu", "Romania", "Botosani", "Calea nationala", 40, 1], (err, result) => {
        if (err) {
            console.error("Can't update.")
            return
        }
        else {
            console.log("Updated.", result)
            res.status(201).send("Updated.")
        }
    })
})
app.get("/delete", (req, res) => {
    const query = "DELETE FROM people9 WHERE id=?"
    db.query(query, [2], (err, result) => {
        if (err) {
            console.error("Can't delete.")
            return
        }
        else {
            console.log("Deleted.", result)
            res.status(201).send("Deleted.")
        }
    })
})
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page.")
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))