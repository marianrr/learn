const express = require("express")
require("dotenv").config()
const { MongoClient } = require("mongodb")
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
//const client = new MongoClient(uri)
const app = express()
const client = new MongoClient(uri);

async function createDatabase() {
    try {
        // Create a new MongoClient

        // Connect to the MongoDB cluster
        await client.connect();

        // Access the admin database
        const adminDb = client.db("mili");

        // Create the "mydb" database
        await adminDb.command({ create: "djgugalafelipa" });

        console.log("Database 'mydb' created successfully!");

    } catch (err) {
        console.error("Error creating database:", err);
    } finally {
        // Close the connection
        await client.close();
    }
}

createDatabase()

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page!")
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})