const express = require("express")
const { MongoClient } = require("mongodb")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT
const uri = process.env.MONGODB_URI
app.use(express.json())

const client = new MongoClient(uri)

// async function run() {
//     try {
//         const database = client.db('sample_mflix');
//         const movies = database.collection('movies');
//         // Query for a movie that has the title 'Back to the Future'
//         const query = { title: 'Back to the Future' };
//         const movie = await movies.findOne(query);
//         console.log(movie);
//     } finally {
//         // Ensures that the client will close when you finish/error
//         await client.close();
//     }
// }
// run().catch(console.dir)


app.get("/", async (req, res) => {
    try {
        const database =  client.db('mili');
        //const movies =  database.createCollection("lush", { autoIndexId: false })
        const movie = database.collection("lush").insertOne({id: 2, name:"miauuuu", age: 22})
        
       // console.log(movie);
        res.status(200).json({"miau": "lol"})
    } finally {
        // Ensures that the client will close when you finish/error
        await client.close();
    }
})

app.listen(PORT, () => console.log("starting..."))