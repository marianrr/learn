import express from 'express'
const app = express()
import path from 'path'
const __dirname = import.meta.dirname
app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public', 'index.html'))
})
app.post('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, 'public'))
})

app.listen(8080, () => {
    console.log(`Listening on port 8080.`)
})