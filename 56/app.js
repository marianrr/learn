const express = require('express')
const app = express()
const homeRouter = require('./routes/Home.js')
require('dotenv').config()
app.use('/', homeRouter)
const PORT = process.env.PORT

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))