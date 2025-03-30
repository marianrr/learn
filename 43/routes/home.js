const express = require('express')
const router = express.Router()
router.get('/home', (req, res) => {
    res.send('...Welcome to Home...')
})

module.exports = router