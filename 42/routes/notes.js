const express = require('express')
const router = express.Router()
const notes = [
    { name: "one", age: 11 },
    { name: "two", age: 22 },
    { name: "three", age: 33 },
    { name: "four", age: 23 },
]
router.get('/notes', (req, res) => {
    res.json(notes)
})

module.exports = router