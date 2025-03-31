const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const path = require('path')
router.use(express.static('public'))
const users = require('../db.js')
router.use(express.urlencoded({ extended: true }))

router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'login.html'))
    })
    .post((req, res) => {
        const { name, password } = req.body
        const user = users.find(user => user.name === name)
        if (bcrypt.compareSync(password, user.password)) {
            res.redirect(`/dashboard/${name}`)
        }
        else {
            res.status(200).sendFile(path.join(__dirname, '../', 'public', 'login.html'))
        }
    })

module.exports = router