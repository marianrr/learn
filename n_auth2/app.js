const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())
const bcrypt = require("bcrypt")
const PORT = process.env.PORT
const jwt = require("jsonwebtoken")

const saltRounds = 10
const password = "...Dj Guga la Felipa..."
const hashPassword = bcrypt.hashSync(password, saltRounds)
console.log("Parola este: ", hashPassword)

console.log(bcrypt.compareSync(password, hashPassword))



app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))