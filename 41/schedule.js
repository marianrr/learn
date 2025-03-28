const express = require('express')
const router = express.Router()
const week = [false, true, true, false, true, false, true]
router.get('/schedule/week', (req, res) => {
    res.json(week)
})

router.put('/schedule/week/:day', (req, res) => {
    const day = parseInt(req.params.day)
    week.splice(day, 1, true)
    res.json(week)
})