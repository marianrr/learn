const express = require('express')
const path = require('path')
const router = express.Router()
router.use(express.static('public'))
const users2 = require('../Users2.js')
router.get('/', (req, res) => {
    res.status(200).json(users2)
})

router.post('/user', (req, res) => {
    console.log(req.body)
    users2.push(req.body)
    res.send(req.body)
})



module.exports = router