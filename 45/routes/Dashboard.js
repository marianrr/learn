const express = require('express')
const router = express.Router()
const path = require('path')
router.use(express.static(path.join(__dirname, 'public')))


router.get('/:name', (req, res) => {
    res.status(200).send(`Welcome back, ${req.params.name}`)
})

router.route('/')
    .get((req, res) => {
        console.log(req.body)
        res.status(200).send(`${req.body.name}`)
    })
    .post((req, res) => {
        res.status(200).send(req.body)
    })

module.exports = router