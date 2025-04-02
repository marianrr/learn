const express = require('express')
const app = express()
require('dotenv').config()
const PORT = process.env.PORT
const homeRouter = require('./routes/Home.js')
app.use('/home', homeRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))