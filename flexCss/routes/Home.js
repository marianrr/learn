import express from 'express'
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname
router.use(express.static('public'))
router.use(express.urlencoded({ extended: true }))
router.use(express.json())

router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})

export default router