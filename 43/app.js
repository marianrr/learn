const express = require('express')
const app = express()
require('dotenv').config()
const PORT = 3000
const home = require('./routes/home.js')
app.use(home)

app.get('/', (req, res) => {
    res.send('Welcome to Home page!')
})


app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))