const express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb')
const mongodb = require("mongodb")
const app = express()
app.use(express.json())
require("dotenv").config()
const PORT = process.env.PORT

const uri = process.env.MONGO_URI

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
})

app.get("/people", async (req, res) => {

    await client.connect()

    const collection = await client.db("mili").collection("people")
    const docs = await collection.find().toArray()
    console.log("docs este: ", docs)
    res.status(200).json(docs)
    client.close()

})

app.get("/", (req, res) => {
    res.status(200).send("Welcome!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))