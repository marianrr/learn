const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS people7 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`

db.query(createTableQuery, (err) => {
    if (err) {
        console.error("Table not created!")
        return
    }
    else {
        console.log("Table created.")
    }
})


app.get("/people", (req, res) => {
    const query = "SELECT * FROM people7"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can not select .")
            return
        }
        else {
            console.log("Result is :", result)
            res.status(200).json(result)
        }
    })
})
app.get("/insert", (req, res) => {
    const query = "INSERT INTO people7 (name, age) VALUES (?, ?)"
    db.query(query, ["MILI", 40], (err, result) => {
        if (err) {
            console.error(" not  .")
            return
        }
        else {
            console.log("Inserted:", result)
            res.status(200).json(result)
        }
    })
})
app.get("/update", (req, res) => {
    const query = "UPDATE people7 SET name=?, age=? WHERE id=1"
    db.query(query, ["milishor", 777], (err, result) => {
        if (err) {
            console.error("Update not created .")
            return
        }
        else {
            console.log(":", result)
            res.status(200).json(result)
        }
    })
})
app.get("/delete", (req, res) => {
    const query = "DELETE FROM people7 WHERE id=1"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Deleted not  created.")
            return
        }
        else {
            console.log(":", result)
            res.status(200).json(result)
        }
    })
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome Home!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))