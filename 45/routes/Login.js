const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static(path.join(__dirname, 'public')))
const users = require('../db.js')
router.use(express.urlencoded({ extended: true }))

router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'login.html'))
    })
    .post((req, res) => {
        const { name, password } = req.body
        console.log(req.body)
        const user1 = users.find(user => user.name === name)
        console.log(user1)
        if (user1) {
            if (user1.password === password) res.redirect(`/dashboard/${user1.name}`)
            else res.status(200).send('Acces denied!')
        }
    })

module.exports = router