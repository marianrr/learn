import express from 'express'
const router = express.Router()
import dotenv from 'dotenv'
dotenv.config()
import path from 'path'
const __dirname = import.meta.dirname
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
const ACCESS_TOKEN = process.env.ACCESS_TOKEN

let users = []
let i = 0

router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded({ extended: true }))

router.get('/protected', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})
router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})
router.post('/login', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})
router.post('/logout', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})
router.post('/signup', async (req, res) => {
    const { name, password } = req.body
    let id = ++i
    const salt = await bcrypt.genSalt(10);

    let passwordHashed = await bcrypt.hash(password, salt)
    const token = jwt.sign({ id }, ACCESS_TOKEN, { expiresIn: "7d" })
    let user = { name: name, password: passwordHashed, id }
    users.push(user)
    console.log(user)
    console.log(users)
    res.cookie("accessToken", token, {
        httpOnly: true,
        sameSite: "strict",
        secure: false,
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
    res.status(200).json(users)
})



export default router

