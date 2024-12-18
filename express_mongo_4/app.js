const express = require("express")
const { MongoClient } = require("mongodb")
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
const app = express()
require("dotenv").config()
app.use(express.json())
const client = new MongoClient(uri)

app.get("/", async (req, res) => {

    const database = await client.db("mili")
    const query = await database.collection("people").find().toArray()
    console.log(query)
    res.status(200).json(query)
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))