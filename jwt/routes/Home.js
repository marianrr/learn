import express from 'express'
const router = express.Router()
router.use(express.static("public"))
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/', (req, res) => {
    res.status(200).json({ "kikila": "dodo" })
})

export default router