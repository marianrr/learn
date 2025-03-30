const express = require('express')
const app = express()
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
const loginRouter = require('./routes/Login.js')
const homeRouter = require('./routes/Home.js')
const dashboardRouter = require('./routes/Dashboard.js')
const PORT = 3000

app.use(homeRouter)
app.use('/login', loginRouter)
app.use('/dashboard', dashboardRouter)

app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))