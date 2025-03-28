const express = require('express')
const app = express()
require('dotenv').config()
app.use(express.json())
const path = require('path')
app.use(express.urlencoded({ extended: true }))
app.use(express.static(path.join(__dirname,'public')))

const middl = ('/', (req, res, next) => {
    const date1 = new Date()
   // res.send(date1.toString())
    next()
})

app.get('/', middl, (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'so.html'))
})

app.listen(3000, () => console.log('Listenin on port 3000.'))