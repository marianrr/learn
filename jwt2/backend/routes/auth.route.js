import express from 'express'
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname
router.use(express.static('public'))
import { signup, login, logout } from '../controllers/auth.controller.js'
import cookieParser from 'cookie-parser'
router.use(cookieParser())

router.post('/signup', signup)
router.post('/login', login)
router.post('/logout', logout) 


export default router