const express = require('express')
const app = express()
require('dotenv').config()
const homeRouter = require('./routes/Home.js')
const PORT = process.env.PORT
app.use('/', homeRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))
