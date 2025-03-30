const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const path = require('path')
router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }))
let users = require('../db.js')

router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'login.html'))
    })
    .post((req, res) => {
        const { name, password } = req.body
        const user = users.find(user => user.name === name)
        if (user) {
            if (bcrypt.compareSync(password, user.password)) {
                console.log("Password is good!")
                res.redirect(`/dashboard/${name}`)
            }
            else {
                console.log('password is bad')
                res.status(200).sendFile(path.join(__dirname, '../', 'public', 'login.html'))
            }
        }
    })

module.exports = router