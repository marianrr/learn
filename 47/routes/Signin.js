const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const path = require('path')
router.use(express.static('public'))
const users = require('../db.js')
router.use(express.urlencoded({ extended: true }))

router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'signin.html'))
    })
    .post((req, res) => {
        const { name, password } = req.body
        const saltRounds = 10
        const passwordHash = bcrypt.hashSync(password, saltRounds)
        const user = { name: name, password: passwordHash }
        users.push(user)
        console.log("Userii sunt: ", users)
    })

module.exports = router