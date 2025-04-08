import express from 'express'
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname
router.use(express.static('public'))

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})

export default router