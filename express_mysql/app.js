const express = require("express")
const mysql = require("mysql2")
const app = express()
app.use(express.json())

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "student"
})

db.connect(err => {
    if (err) {
        console.error("Database connection failed: ", err)
        return
    }
    console.log("Connection successful! :) ")
})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS students (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
location VARCHAR(255),
age INT
)
`

db.query(createTableQuery, (err, result) => {
    if (err) console.error("Failed to create table: ", err)
    else console.log("Table 'students' already exists.")
})

//endpoint for displaying the students

app.get("/students/:age", (req, res) => {
    const age = parseInt(req.params.age)
    const selectQuery = `SELECT * FROM students WHERE age = ?`

    db.query(selectQuery, [age], (err, results) => {
        if (err) return res.status(500).json({ error: "Failed to fetch students!" })
        console.log(results)
        //
        const user1 = results[0]
        console.log(user1)
        console.log(`Numele meu este ${user1.name}. Am ${user1.age} ani. Kikila`)
    
    
    res.status(200).send(`Numele meu este ${user1.name}. Am ${user1.age} ani. Kikila`)
    })

})

app.get("/", (req, res) => {
    res.status(200).send("Welcome home!")
})

app.listen(3000, () => {
    console.log("Listen to port 3000.")
})