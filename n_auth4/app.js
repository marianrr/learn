const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT
app.use(express.json())
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")

const JA = process.env.JWT_ACCES_TOKEN
const JR = process.env.JWT_REFRESH_TOKEN

const posts = [
    {
        username: "Marian",
        title: "Post 1"
    },
    {
        username: "Emi",
        title: "Post 2"
    },
    {
        username: "Lili",
        title: "Post 3"
    }
]




app.get("/posts", authenticateToken, (req, res) => {
    res.status(200).json(posts.filter(post => post.username === req.user.name))
})

app.post("/login", (req, res) => {

    const username = req.body.username
    const user = { name: username }
    const accesToken = jwt.sign(user, JA)
    res.json({ accesToken: accesToken })
})

function authenticateToken(req, res, next) {
    // Bearer token
    const authHeader = req.headers["authorization"]
    const token = authHeader && authHeader.split(" ")[1]
    if (token == null) return res.sendStatus(401)
    jwt.verify(token, JA, (err, user) => {
        if (err) return res.sendStatus(403)
        req.user = user
        next()
    })
}

app.get("/", (req, res) => {
    res.status(200).send("Welcome to Home page.")
})

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))