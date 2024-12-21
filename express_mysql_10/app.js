const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const { faker, fakerRO } = require("@faker-js/faker")
const app = express()
app.use(express.json())
app.use(express.static("public"))
const PORT = process.env.PORT

const db = mysql.createConnection({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

db.connect((err) => {
    if (err) {
        {
            console.log(err)
            return
        }
    } else {
        console.log("Connected to database.")
    }
})

app.get("/people", (req, res) => {

    const sql = "SELECT * FROM people8"
    db.query(sql, (err, result) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(result)
        }
    })
})
app.get("/", (req, res) => {
    res.status(200).send("index.html")
})

app.listen(PORT, () => console.log(`Listening to port ${PORT}.`))