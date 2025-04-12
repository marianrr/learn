import express from 'express'
const router = express.Router()
router.use(express.json())
import cors from 'cors'
router.use(cors({
    origin: '*'}))

router.post('/jiji', (req, res) => {
    const { name1: name, password1: password } = req.body
    console.log(name, password)
    res.status(200).json({ "unu": name, "doi": password })
})
router.get('/api/hh', (req, res) => {
    console.log(req.url)

    res.status(200).json([{ so: "miau" }])
})
router.get('/api', (req, res) => {
    res.status(200).json({ "kikila": "dodo" })
})

export default router