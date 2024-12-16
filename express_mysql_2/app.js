const express = require("express")
const mysql = require("mysql2")
const app = express()
const PORT = 3000

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "people"
})
db.connect(err => {
    if (err) {
        console.error("Conection error!")
        return
    }
    console.log("Connection successful!")

})

const createTableQuery = `
CREATE TABLE IF NOT EXISTS people (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL
)
`
db.query(createTableQuery, (err, result) => {
    if (err) {
        console.error("Table was not created!")
        return
    }

    console.log("Table created !")
})


app.get("/people", (req, res) => {
    const peopleQuery = `
SELECT * FROM people
`
    db.query(peopleQuery, (err, result) => {
        if (err) console.error("error found.")
        res.status(200).send(result)
    })


})

app.get("/", (req, res) => {
    res.status(200).send("Welcome on my Home page!")
})
app.listen(PORT, () => {
    console.log("Listenig on port: ", PORT)
})