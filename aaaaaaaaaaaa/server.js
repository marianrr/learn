
const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send("kikila balantzain...")
})

app.listen( "3000", () => {
    console.log("Listen to port 3000.")
})
