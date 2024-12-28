const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT_SERVER = process.env.PORT_SERVER
const fs = require("fs")

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

db.connect((err) => {
    if (err) {
        console.error("The error is: ", err)
        return
    }
    else {
        console.log("Connected to database!")
    }
})



const query1 = `select * from people`
const query2 = `drop table people`
const query3 = `create table if not exists pupies (
id int auto_increment primary key, 
name varchar(50) not null,
age_yrs decimal(3, 1) not null,
breed varchar(100) not null,
weight_lbs int not null,
microchipped boolean not null
)`

// const query4 = `insert into pupies values 
// ()

// `

db.query(query3, (err, result) => {
    if (err) {
        console.error("The error is: ", err)
        return
    }
    else {
        console.log(result)
    }
})



app.get("/", (req, res) => {
    
    // db.query(query4, (err, result) => {
    //     if (err) {
    //         console.error("The error is: ", err)
    //         return
    //     }
    //     else {
    //         res.status(200).send("Created!")
    //         console.log(result)
    //     }
     //})
})

app.listen(PORT_SERVER, () => console.log(`Listening on port: 3000.`))