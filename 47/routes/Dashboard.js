const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const path = require('path')
router.use(express.static('public'))
const users = require('../db.js')




router.get('/:name', (req, res) => {
    res.status(200).send(`Welcome back, ${req.params.name}`)
})
router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../', 'public', 'dashboard.html'))
})


module.exports = router