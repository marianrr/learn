const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const fs = require("fs")

const app = express()
const PORT2 = 3000

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


// try {
const connection = mysql.createConnection(configure);

connection.connect((err) => {
    if (err) console.error("eroarea este: ", err)
    else console.log("M-am conectat la baza de date.")
}
);

// }catch (err) {
//     console.error("Database connection failed:", err);
// }

// const createTableQuery = `
//     CREATE TABLE IF NOT EXISTS people (
//         id INT AUTO_INCREMENT PRIMARY KEY,
//         name VARCHAR(255) NOT NULL,
//         age INT NOT NULL
//         )
//         `
// connection.query(createTableQuery, (err, result) => {
//     if (err) {
//         console.error("Table was not created!")
//         return
//     }

//     else console.log("Table created !")
// })
const query = `SHOW TABLES`
connection.query(query, (err, result) => {
    if (err) {
        console.error("eroare!", err)
        return
    }

    else console.log(result)
})

const query5 = `SHOW DATABASES`
connection.query(query5, (err, result) => {
    if (err) {
        console.error("eroare!", err)
        return
    }

    else console.log(result)
})


const query2 = `INSERT INTO people (name, age) VALUES (?, ?)`
connection.query(query2, ["Mili", 16], (err, result) => {
    if (err) {
        console.error("eroare!", err)
        return
    }

    else console.log(result)
})







app.get("/people", (req, res) => {
    const peopleQuery = `
SELECT * FROM people
`
    connection.query(peopleQuery, (err, result) => {
        if (err) console.error("error found.")
        res.status(200).send(result)
    })


})

app.get("/", (req, res) => {

    const query3 = `SELECT * FROM people`
    connection.query(query3, (err, result) => {
        if (err) {
            console.error("eroare!", err)
            return
        }

        else {
            console.log(result)

            connection.close()
        }
    })
    res.status(200).send("Welcome on my Home page!")
})
app.listen(PORT2, () => {
    console.log("Listenig on port: ", PORT2)
})