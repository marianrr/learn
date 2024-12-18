const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const app = express()
app.use(express.json())

const client = new MongoClient(uri)



app.get("/delete/patru", async (req, res) => {
    // await client.connect()
    const one = req.params.coco
    const db2 = client.db("mili")
    const coll = db2.collection("people")
    const query = await coll.findOneAndDelete({ patru: "patruu" })
    const people = await coll.find().toArray()
    res.status(201).json(people)
    //await client.close()
})

app.get("/insert", async (req, res) => {
    // await client.connect()
    const db2 = client.db("mili")
    const coll = db2.collection("people")
    const query = await coll.insertMany([
        { "_id": 1, zece: "zece" },
        { "_id": 2, zece: "zece" },
        { "_id": 3, zece: "zece" },
        { "_id": 4, zece: "zece" },
        { "_id": 5, zece: "zece" }
    ])
    console.log(query)
    const people = await coll.find().toArray()
    res.status(201).json(people)
    //await client.close()
})

app.get("/update", async (req, res) => {
    // await client.connect()
    const db2 = client.db("mili")
    const coll = db2.collection("people")
    const query = await coll.updateOne({ _id: 5 },
        { $set: { zece: "...kikila balantzain modificat..." } })
    console.log(query)
    const people = await coll.find().toArray()
    res.status(201).json(people)
    //await client.close()
})

app.get("/people", async (req, res) => {
    //   await client.connect()
    const database = client.db("mili")
    const collection = database.collection("people")
    const query = await collection.find({ patru: "patruu" }).toArray()
    console.log(query)
    res.status(201).json(query)
    //await client.close()
})

app.get("/kikila", async (req, res) => {

    const database = client.db("mili")
    const collection = database.collection("people")
    const query = await collection.insertMany(
        [
            { patru: "patruu" },
            { cinci: "cincii" },
            { sase: "sasee" },
            { sapte: "saptee" },
            { patru: "patruu" },
            { cinci: "cincii" },
            { sase: "sasee" },
            { sapte: "saptee" },
            { patru: "patruu" },
            { cinci: "cincii" },
            { sase: "sasee" },
            { sapte: "saptee" }
        ]
    )

    res.status(201).send("It's working!")
    //await client.close()

})



app.get("/", async (req, res) => {

    const database = await client.db("mili")
    const query = await database.collection("people")
    const people = await query.find().toArray()
    console.log("People are: ", people)
    res.status(200).json(people)
    //   await client.close()

})

app.listen(PORT, () => console.log(`Listen on port ${PORT}.`))