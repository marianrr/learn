const express = require("express")
const mysql = require("mysql2")
require("dotenv").config()
const { faker, fakerRO } = require("@faker-js/faker")
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



const query1 = `select * from puppies`
const query2 = `drop table puppies`
const query3 = `create table if not exists pupies (
id int auto_increment primary key, 
name varchar(50) not null,
age_yrs decimal(3, 1) not null,
breed varchar(100) not null,
weight_lbs int not null,
microchipped boolean not null
)`

const query4 = `
insert into pupies (name, age_yrs, breed, weight_lbs, microchipped) values 
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}'),
 ('${fakerRO.person.firstName()}', '${faker.number.int({ min: 1, max: 99 })}.${faker.number.int({ min: 1, max: 9 })}', '${faker.animal.dog()}', '${faker.number.int({ min: 10, max: 99 })}', '${faker.number.int({ min: 0, max: 1 })}')
`
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

    db.query(query4, (err, result) => {
        if (err) {
            console.error("The error is: ", err)
            return
        }
        else {
            res.status(200).send("Created!")
            console.log(result)
        }
    })
})

app.listen(PORT_SERVER, () => console.log(`Listening on port: 3000.`))