const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const path = require('path')
router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }))
let users = require('../db.js')


router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'signin.html'))
    })
    .post((req, res) => {
        const { name, password } = req.body
        console.log(req.body)
        const saltRounds = 10
        const hashPassword = bcrypt.hashSync(password, saltRounds)
        console.log("Parola hashuita este: ", hashPassword)
        const user = { name: name, password: hashPassword }
        users.push(user)
        console.log("Userii sunt: ", users)

        res.redirect('/login')
    })

module.exports = router