const express = require("express")
const app = express()
const path = require("path")
const PORT = 3000


app.get("/", (req, res) => {

    //res.redirect("https://www.google.com")
    //res.redirect("/login")
    if (false) res.sendFile(path.join(__dirname, 'public', "index.html"))
    else res.redirect("/login")
})

app.use(express.static("public"))
app.get("/login", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "login.html"))
})


app.get("/dashboard", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', "dashboard.html"))
})




app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))