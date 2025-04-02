const express = require('express')
const router = express.Router()
const path = require('path')
const notes = require('../db.js')
router.use(express.static('public'))

router.route('/')
    .get((req, res) => {
        console.log(notes)
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'home.html'))

    })
    .post((req, res) => {
        console.log(notes)
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'home.html'))
    })

module.exports = router