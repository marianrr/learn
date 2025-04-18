const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../', 'public', 'home.html'))
})

module.exports = router