const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
const db = client.db("mili").collection("people7")

app.get("/people", async (req, res) => {
    const query = await db.find().toArray()

    console.log(query)
    res.status(200).json(query)




})
app.get("/insert", async (req, res) => {
    const query = await db.insertMany(
        [
            { "_id": 1, "name": "Mili", "age": 40 },
            { "_id": 2, "name": "John", "age": 35 },
            { "_id": 3, "name": "Sara", "age": 28 },
            { "_id": 4, "name": "Liam", "age": 50 },
            { "_id": 5, "name": "Emma", "age": 22 },
            { "_id": 6, "name": "Noah", "age": 41 },
            { "_id": 7, "name": "Olivia", "age": 33 },
            { "_id": 8, "name": "James", "age": 29 },
            { "_id": 9, "name": "Sophia", "age": 45 },
            { "_id": 10, "name": "Benjamin", "age": 38 }
        ]

    )

    console.log(query)
    res.status(201).send("Created.")




})
app.get("/update", async (req, res) => {
    const query = await db.findOneAndUpdate({ _id: 1 }, { $set: { name: "...Dj Guuga la Felipa..." } })
    
            console.log(query)
            res.status(201).send("Created.")
       

})
app.get("/delete", async (req, res) => {
    const query = await db.deleteOne({ _id: 1 })
    
            console.log(query)
            res.status(201).send("Created.")
      

})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))