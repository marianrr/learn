const express = require('express')
const bcrypt = require('bcryptjs')
const router = express.Router()
const path = require('path')
router.use(express.static('public'))

router.get('/:name', (req, res) => {
    console.log(`Numele este ${req.params.name}.`)
    res.status(200).send(`Welcome home, ${req.params.name}`)
})

router.route('/')
    .get((req, res) => {
        res.status(200).sendFile(path.join(__dirname, '../', 'public', 'dashboard.html'))
    })


module.exports = router