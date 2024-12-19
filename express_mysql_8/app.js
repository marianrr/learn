const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const PORT = process.env.PORT
const host = process.env.HOST
const user = process.env.USER
const password = process.env.PASSWORD
const database = process.env.DATABASE
const app = express()
app.use(express.json())

const db = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
})

const createTable = `
CREATE TABLE IF NOT EXISTS people8 (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(255) NOT NULL,
age INT NOT NULL,
location VARCHAR(255) NOT NULL,
occupation VARCHAR(255) NOT NULL,
badge INT NOT NULL
)
`

db.connect((err) => {
    if (err) {
        console.error("Can't connect to database!")
        return
    }
    else {
        console.log("Connected to database.")
    }
})
db.query(createTable, (err, result) => {
    if (err) {
        console.error("Can't create table!")
        return
    }
    else {
        console.log("Table created.")
    }
})


app.get("/people", (req, res) => {
    const query = "SELECT * FROM people8"
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can't !")
            return
        }
        else {
            console.log(".", result)
            res.status(201).json(result)
        }
    })
})

app.get("/insert", (req, res) => {
    const query = `INSERT INTO people (name, age, location, occupation, badge) VALUES (
    
  ("Mili", "age": 40, "location": "Iasi", "occupation": "banker", "badge": 6743),
  ("Liam", "age": 32, "location": "Bucharest", "occupation": "engineer", "badge": 1524),
  ("Sophia", "age": 27, "location": "Cluj", "occupation": "doctor", "badge": 8439),
  ("Emma", "age": 29, "location": "Timisoara", "occupation": "artist", "badge": 2301),
  ("Noah", "age": 35, "location": "Iasi", "occupation": "teacher", "badge": 9471),
  ("Olivia", "age": 41, "location": "Brasov", "occupation": "lawyer", "badge": 7620),
  ("Ethan", "age": 33, "location": "Sibiu", "occupation": "chef", "badge": 5832),
  ("Ava", "age": 38, "location": "Arad", "occupation": "nurse", "badge": 8914),
  ("Mason", "age": 44, "location": "Craiova", "occupation": "pilot", "badge": 4123),
  ("Isabella", "age": 26, "location": "Oradea", "occupation": "writer", "badge": 3445),
  ("Lucas", "age": 28, "location": "Constanta", "occupation": "programmer", "badge": 2146),
  ("Mia", "age": 37, "location": "Galati", "occupation": "designer", "badge": 4893),
  ("Aiden", "age": 36, "location": "Ploiesti", "occupation": "manager", "badge": 7651),
  ("Amelia", "age": 31, "location": "Suceava", "occupation": "accountant", "badge": 9534),
  ("Logan", "age": 25, "location": "Baia Mare", "occupation": "actor", "badge": 3128),
  ("Charlotte", "age": 45, "location": "Pitesti", "occupation": "teacher", "badge": 7812),
  ("Elijah", "age": 39, "location": "Iasi", "occupation": "dentist", "badge": 8467),
  ("Harper", "age": 34, "location": "Bacau", "occupation": "pharmacist", "badge": 5103),
  ("James", "age": 42, "location": "Targu Mures", "occupation": "journalist", "badge": 6764),
  ("Evelyn", "age": 30, "location": "Deva", "occupation": "architect", "badge": 3012),
  ("Benjamin", "age": 33, "location": "Iasi", "occupation": "developer", "badge": 7519),
  ("Ella", "age": 29, "location": "Bucharest", "occupation": "analyst", "badge": 9410),
  ("Henry", "age": 46, "location": "Cluj", "occupation": "consultant", "badge": 5812),
  ("Luna", "age": 24, "location": "Timisoara", "occupation": "biologist", "badge": 2345),
  ("William", "age": 50, "location": "Iasi", "occupation": "researcher", "badge": 8623),
  ("Chloe", "age": 28, "location": "Arad", "occupation": "therapist", "badge": 4721),
  ("Jackson", "age": 43, "location": "Oradea", "occupation": "driver", "badge": 3654),
  ("Grace", "age": 26, "location": "Constanta", "occupation": "engineer", "badge": 7815),
  ("Oliver", "age": 31, "location": "Brasov", "occupation": "banker", "badge": 9547),
  ("Scarlett", "age": 37, "location": "Craiova", "occupation": "pilot", "badge": 2136)

    )`
    db.query(query, (err, result) => {
        if (err) {
            console.error("Can't insert values into table!")
            return
        }
        else {
            console.log("Inserted.", result)
            res.status(201).send("Values inserted into table.")
        }
    })
})

app.get("/update", (req, res) => {
    const query = "UPDATE people8  SET name=?, age=?, location=?, occupation=?, badge=? WHERE id=?"
    db.query(query, ["mili", 40, "botosani", "winner", 8888, 2], (err, result) => {
        if (err) {
            console.error("Can't update the person!")
            return
        }
        else {
            console.log("Updated.", result)
            res.status(201).send("Person updated.")
        }
    })
})

app.get("/delete", (req, res) => {
    const query = "DELETE FROM people8 WHERE id=?"
    db.query(query, [2], (err, result) => {
        if (err) {
            console.error("Can't !")
            return
        }
        else {
            console.log("Deleted.", result)
            res.status(201).send("Person deleted.")
        }
    })
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page!")
})


app.listen(PORT, () => console.log(`Listening to port ${PORT}.`))