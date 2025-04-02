const express = require('express')
const app = express()
require('dotenv').config()
const homeRouter = require('./routes/Home.js')
app.use('/home', homeRouter)
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))