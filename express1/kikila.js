
const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    console.log("one")
    res.send("This is one...")
})

router.get("/yolo", (req, res) => {
    console.log("two")
    res.send("This is two...")
})

module.exports = router