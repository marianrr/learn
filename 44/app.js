const express = require('express')
const app = express()
const usersRouter = require('./routes/Users.js')
require('dotenv').config()
const path = require('path')
const PORT = 3000
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
const users2 = require('./Users2.js')

app.get('/', (req, res) => {
    res.status(200).send('Welcome to Home page!')
})
app.use('/users', usersRouter)


app.get('/form', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cos.html'))
})
app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'login.html'))
})
app.post('/dashboard', (req, res) => {
    console.log(req.body)
    console.log(users2)
    const { name, password } = req.body
    const user1 = users2.find(user => user.name === name)
    console.log(user1)
    if (user1.password === password) res.redirect('/form')
    else res.redirect('/login')
})
app.listen(PORT, () => console.log(`Listening on port ${PORT}.`))