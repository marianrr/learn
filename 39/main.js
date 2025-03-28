const express = require('express')
const app = express()
const PORT = 3000
const path = require('path')

app.use(express.json())
app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
const notes = [
    { name: "Marian", age: 24 },
    { name: "Emi", age: 44 },
    { name: "John", age: 55 },
    { name: "Tudor", age: 66 },
]
app.get('/', (req, res) => {
    res.status(200).send("Welome to first page!")
})

app.get('/json', (req, res) => {
    res.status(200).json(notes)
})

app.post('/notes', (req, res) => {
    console.log(req.body)
    const newNote = { name: req.body.name1, age: req.body.age1 }
    notes.push(newNote)
    res.send(newNote)
})
app.get('/cos', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'cos.html'))
})
app.listen(PORT, () => console.log(`Listening on port ${PORT} .`))