const express = require("express")
require("dotenv").config()
const app = express()
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const PORT = process.env.PORT

const saltedRounds = 10
const password = "one two three"
const hashPassword = bcrypt.hashSync(password, saltedRounds)

console.log("Parola este: ", hashPassword)
const answer = bcrypt.compareSync(password, hashPassword)
console.log("Parolele se potrivesc?", answer)
const payload = { "this is sparta...": "lol" }
const token = jwt.sign(payload, hashPassword, {
    expiresIn: 30
})
console.log("Tokenu=ul este: ", token)
// metoda recomandata
const payload2 = jwt.verify(token, hashPassword)
console.log("Payload2 este: ", payload2)
// la decodare nu se verifica validitatea tokenului, nu se recomanda decodarea tokenului jwt
const payload3 = jwt.decode(token)
console.log("Payload3 este: ", payload3)











app.get("/", (req, res) => {
    res.cookie("token", token, { 
        maxAge: 5000,
        httpOnly: true
     })
    // console.log(cookie.token)
    res.status(200).send("Welcome to Home page!")

})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))