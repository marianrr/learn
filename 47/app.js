const express = require('express')
const app = express()
require('dotenv').config()
const dashboardRouter = require('./routes/Dashboard.js')
const loginRouter = require('./routes/Login.js')
const signinRouter = require('./routes/Signin.js')
const PORT = process.env.PORT
app.use('/dashboard', dashboardRouter)
app.use('/login', loginRouter)
app.use('/signin', signinRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))