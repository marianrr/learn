const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const app = express()
app.use(express.json())
const client = new MongoClient(uri)
const database = client.db("mili").collection("ciao")


app.get("/people", async (req, res) => {
    const people1 = await database.find().toArray()
    console.log("People are: ", people1)
    res.status(200).json(people1)
})
app.get("/insert", async (req, res) => {
    const insert1 = await database.insertMany([
        { "_id": 1, name: "mili", age: 20 },
        { "_id": 2, name: "maior", age: 2 },
        { "_id": 3, name: "doru", age: 30 },
        { "_id": 4, name: "ion", age: 40 },
        { "_id": 5, name: "marius", age: 2 },
        { "_id": 6, name: "coca", age: 11 },
        { "_id": 7, name: "lili", age: 54 }
    ])
    console.log(insert1)
    res.status(201).send("Inserted!")
})
app.get("/update", async (req, res) => {
    const update1 = await database.updateOne({ _id: 1 }, { $set: { name: "DJ GUGA LA FELIPA" } })
    console.log("updated: ", update1)
    res.status(201).send("Updated!")
})
app.get("/delete", async (req, res) => {
    const delete1 = await database.findOneAndDelete({ _id: 7 })
    console.log("Deleted!")
    res.status(201).send("Deleted!")

})

app.get("/", (req, res) => {
    res.status(200).send("Welcome Home!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))