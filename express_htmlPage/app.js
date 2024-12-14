const express = require("express")
const app = express()
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.status(200).send("index.html")
})

app.get("/miau", (req, res) => {
    res.status(200).send("Miau miau hau hau bau bau")
})


app.listen(3000, () => {
    console.log("Listening on port 3000.")
})