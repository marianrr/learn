const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const app = express()
app.use(express.json())

const client = new MongoClient(uri)

app.get("/", async (req, res) => {
    await client.connect()
    const database = await client.db("mili")
    const query = await database.collection("people").find().toArray()
    console.log(query)
    res.status(200).json(query)
    await client.close()
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))