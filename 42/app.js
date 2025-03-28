const express = require('express')
const home = require('./routes/home.js')
const showNotes = require('./routes/notes.js')
const app = express()
const PORT = 3000

app.use(home)
app.use(showNotes)

app.listen(PORT, () => console.log("Listening on port 3000."))