const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const app = express()
app.use(express.json())
const fs = require("fs")
const { faker, fakerRO } = require("@faker-js/faker")
const PORT = process.env.PORT_SERVER

const configure = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT,
    ssl: {
        rejectUnauthorized: true,
        ca: fs.readFileSync("./ca.pem").toString(),
    },
}

const db = mysql.createConnection(configure)

db.connect((err, result) => {
    if (err) {
        console.error("Error is: ", err)
        return
    }
    else {
        console.log("Database connected.")
    }
})

// const query1 = `
// create table if not exists puppies2
// (
// id int primary key,
// name varchar(50),
// age_yrs decimal(3,1),
// breed varchar(100),
// weight_lbs int,
// microchipped boolean default 0,
// owner_id int,
// foreign key (owner_id) references owners2(id)
// )
// `
// const query2 = `
// create table if not exists owners2 (
// id int primary key,
// name varchar(50) not null
// )
// `

const query3 = `
CREATE TABLE if not exists people22 (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL
)
`
const query4 = `
CREATE TABLE if not exists elephants (
  id INT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  gender VARCHAR(6) NOT NULL,
  age INT
)
`
const query5 = `
CREATE TABLE if not exists people_elephants (
  id int primary key,
  person_id INT NOT NULL,
  elephant_id INT NOT NULL,
  FOREIGN KEY (person_id) references people22(id),
  FOREIGN KEY (elephant_id) references elephants(id)
)
`

// const query3 = `
// create table if not exists  (
// )
// `


// db.query(query1, (err, result) => {
//     if (err) {
//         console.error("Error is: ", err)
//         return
//     }
//     else {
//         console.log("Table puppies2 created.", result)
//     }
// })
// db.query(query2, (err, result) => {
//     if (err) {
//         console.error("Error is: ", err)
//         return
//     }
//     else {
//         console.log("Table owners created.", result)
//     }
// })


db.query(query3, (err, result) => {
    if (err) {
        console.error("Error is: ", err)
        return
    }
    else {
        console.log("Table people22 created.", result)
    }
})
db.query(query4, (err, result) => {
    if (err) {
        console.error("Error is: ", err)
        return
    }
    else {
        console.log("Table elephants created.", result)
    }
})
db.query(query5, (err, result) => {
    if (err) {
        console.error("Error is: ", err)
        return
    }
    else {
        console.log("Table people_elephants created.", result)
    }
})





app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page.")


})

app.listen(PORT, () => console.log(`Listening to port ${PORT}`))