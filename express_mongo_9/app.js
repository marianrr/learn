const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const client = new MongoClient(uri)
const db = client.db("mili").collection("people9")

app.get("/people", async (req, res) => {
    const query = await db.find().toArray()
    res.status(200).json(query)
})
app.get("/insert", async (req, res) => {
    const query = await db.insertMany(
        [
            { "_id": 1, "name": "Mili", "age": 40, "location": "Iasi", "occupation": "banker", "badge": 6743 },
            { "_id": 2, "name": "Liam", "age": 32, "location": "Bucharest", "occupation": "engineer", "badge": 1524 },
            { "_id": 3, "name": "Sophia", "age": 27, "location": "Cluj", "occupation": "doctor", "badge": 8439 },
            { "_id": 4, "name": "Emma", "age": 29, "location": "Timisoara", "occupation": "artist", "badge": 2301 },
            { "_id": 5, "name": "Noah", "age": 35, "location": "Iasi", "occupation": "teacher", "badge": 9471 },
            { "_id": 6, "name": "Olivia", "age": 41, "location": "Brasov", "occupation": "lawyer", "badge": 7620 },
            { "_id": 7, "name": "Ethan", "age": 33, "location": "Sibiu", "occupation": "chef", "badge": 5832 },
            { "_id": 8, "name": "Ava", "age": 38, "location": "Arad", "occupation": "nurse", "badge": 8914 },
            { "_id": 9, "name": "Mason", "age": 44, "location": "Craiova", "occupation": "pilot", "badge": 4123 },
            { "_id": 10, "name": "Isabella", "age": 26, "location": "Oradea", "occupation": "writer", "badge": 3445 },
            { "_id": 11, "name": "Lucas", "age": 28, "location": "Constanta", "occupation": "programmer", "badge": 2146 },
            { "_id": 12, "name": "Mia", "age": 37, "location": "Galati", "occupation": "designer", "badge": 4893 },
            { "_id": 13, "name": "Aiden", "age": 36, "location": "Ploiesti", "occupation": "manager", "badge": 7651 },
            { "_id": 14, "name": "Amelia", "age": 31, "location": "Suceava", "occupation": "accountant", "badge": 9534 },
            { "_id": 15, "name": "Logan", "age": 25, "location": "Baia Mare", "occupation": "actor", "badge": 3128 },
            { "_id": 16, "name": "Charlotte", "age": 45, "location": "Pitesti", "occupation": "teacher", "badge": 7812 },
            { "_id": 17, "name": "Elijah", "age": 39, "location": "Iasi", "occupation": "dentist", "badge": 8467 },
            { "_id": 18, "name": "Harper", "age": 34, "location": "Bacau", "occupation": "pharmacist", "badge": 5103 },
            { "_id": 19, "name": "James", "age": 42, "location": "Targu Mures", "occupation": "journalist", "badge": 6764 },
            { "_id": 20, "name": "Evelyn", "age": 30, "location": "Deva", "occupation": "architect", "badge": 3012 },
            { "_id": 21, "name": "Benjamin", "age": 33, "location": "Iasi", "occupation": "developer", "badge": 7519 },
            { "_id": 22, "name": "Ella", "age": 29, "location": "Bucharest", "occupation": "analyst", "badge": 9410 },
            { "_id": 23, "name": "Henry", "age": 46, "location": "Cluj", "occupation": "consultant", "badge": 5812 },
            { "_id": 24, "name": "Luna", "age": 24, "location": "Timisoara", "occupation": "biologist", "badge": 2345 },
            { "_id": 25, "name": "William", "age": 50, "location": "Iasi", "occupation": "researcher", "badge": 8623 },
            { "_id": 26, "name": "Chloe", "age": 28, "location": "Arad", "occupation": "therapist", "badge": 4721 },
            { "_id": 27, "name": "Jackson", "age": 43, "location": "Oradea", "occupation": "driver", "badge": 3654 },
            { "_id": 28, "name": "Grace", "age": 26, "location": "Constanta", "occupation": "engineer", "badge": 7815 },
            { "_id": 29, "name": "Oliver", "age": 31, "location": "Brasov", "occupation": "banker", "badge": 9547 },
            { "_id": 30, "name": "Scarlett", "age": 37, "location": "Craiova", "occupation": "pilot", "badge": 2136 }
        ]

    )
    res.status(201).send("People inserted.")
})
app.get("/update", async (req, res) => {
    const query = await db.updateOne({ _id: 30 }, { $set: { name: "********* dj guga la felipa %%%%%%%%%%" } })
    res.status(201).send("User updated.")
})
app.get("/delete", async (req, res) => {
    const query = await db.deleteOne({ _id: 30 })
    res.status(201).send("User deleted.")
})

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page.")
})
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})