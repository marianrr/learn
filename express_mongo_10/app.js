const express = require("express")
require("dotenv").config()
const { MongoClient } = require("mongodb")
const { faker, fakerRO } = require("@faker-js/faker")
const app = express()
app.use(express.json())
app.use(express.static("public"))
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
const db = client.db("mili").collection("people10")

app.get("/people", async (req, res) => {
    const query = await db.find().toArray()
    console.log("People displayed.", query)
    res.status(200).json(query)
})
app.get("/insert", async (req, res) => {
    const query = await db.insertMany([
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        { "firstname": `${fakerRO.person.firstName()}`, "lastname": `${fakerRO.person.lastName()}`, "location": "Romania", "city": `${fakerRO.location.city()}`, "street": `${fakerRO.location.street()}` },
        
    ])
    console.log("People inserted.", query)
    res.status(201).send("People inserted.")
})
app.get("/update", async (req, res) => {
    const query = await db.updateOne({ _id: "48" }, { $set: { location: "dj guga la felipa" } })
    console.log("User updated.", query)
    res.status(201).send("User updated.")
})
app.get("/delete", async (req, res) => {
    const query = await db.deleteOne({ _id: "16" })
    console.log("Deleted.", query)
    res.status(201).send("Deleted.")
})
app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page..")
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))
