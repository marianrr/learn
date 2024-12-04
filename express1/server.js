
const express = require("express")
const app = express()

const miau = require("./kikila.js")

app.use("/li", miau)

app.listen(5000, () => console.log("listening on port 5000"))