const express = require('express')
const bcrypt = require('bcryptjs')
const app = express()
require('dotenv').config()
const PORT = 3000
const loginRouter = require('./routes/Login.js')
const dashboardRouter = require('./routes/Dashboard.js')
const signinRouter = require('./routes/Signin.js')
app.use('/login', loginRouter)
app.use('/dashboard', dashboardRouter)
app.use('/signin', signinRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))

