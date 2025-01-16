const express = require("express")
require("dotenv").config()
const app = express()
const PORT = process.env.PORT
const bcrypt = require("bcrypt")
app.use(express.json())
const users = require("./db.js")
const bodyparser = require("body-parser")
app.use(express.static("public"))
app.use(express.urlencoded({ extended: true }))
const path = require("path")



console.table(users)
console.log(users)

const auth1 = (req, res, next) => {

    const { name, password } = req.body
    console.log("Numele este: ", name)

    const so = users.find(user => user.name === name)


    if (so) {
        const { name2, password2 } = so
        if (password !== password2)
            res.redirect("/")

    }
    else {

        users.push({ name: name, password: password })

    }

    next()
}


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "public", "kk.html"))
})

app.get("/users", (req, res) => {
    res.json(users)
})

app.post("/login", auth1, (req, res) => {
    res.send(`Welcome, ${req.body.name}`)
})







app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))