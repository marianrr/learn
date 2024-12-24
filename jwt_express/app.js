const express = require("express")
const jwt = require("jsonwebtoken")
require("dotenv").config()
const app = express()
app.use(express.json())
const PORT = process.env.PORT


//const so = () => {
// const token = jwt.sign(payload, secret, options)
// create jwt token
const token = jwt.sign(
    { name: "Mili boss..." },
    process.env.KEY,
    { expiresIn: 60 }
)
// display token
console.log(token)

// decode payload
const payload = jwt.decode(token)

// display payload
console.log(payload)

// verify a jwt token

// const payload2 = jwt.verify(token, process.env.KEY)
// // display a verified jwt
// console.log(payload2)

//}


app.get("/", (req, res) => {
    //so()


    // const payload2 = jwt.verify(token, process.env.KEY)
    // // display a verified jwt
    // console.log(payload2)
    
    res.status(200).cookie("miau", "dau", { maxAge: 8000} ).send("Welcome to Home page!")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))