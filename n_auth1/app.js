const express = require("express")
require("dotenv").config()
const app = express()
app.use(express.json())
const bcrypt = require("bcryptjs")
const sample = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
const sampleArray = sample.split(".")
const [header, payload, signature] = sampleArray
console.log(header, payload, signature)
const decodeHeader = atob(header)
 const decodePayload = atob(payload)
console.log(decodeHeader, decodePayload)


const PORT = process.env.PORT
app.get("/", (req, res) => {
    let i = 1
    res.status(200).send("Dj guga la felipa...")
    setInterval(() => console.log("...Emi Web Dev...", i++), 10000)
})

app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}.`)
})