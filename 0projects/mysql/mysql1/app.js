import express from 'express'
const app = express()
import mysql from 'mysql2'
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT_SERVER || 5000
import path from 'path'
import fs from 'fs'
const __dirname = import.meta.dirname
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extensible: true }))

const configure = {
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT

}


const db = mysql.createConnection(configure)

db.connect((err) => {
    if (err) {
        console.error("Error is: ", err)
        return
    }
    else {
        console.log("Database connected.")
    }
})

const query1 = `select * from albums`

db.query(query1, (err, result) => {
    if (err) console.log(err)
    console.log("Rezultatele sunt: ", result)
})











app.get('/', (req, res) => {



    const db = mysql.createConnection(configure)

    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})