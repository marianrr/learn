import express from 'express'
import path from 'path'
const __dirname = import.meta.dirname
const router = express.Router()
router.use(express.static('public'))


router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})

export default router