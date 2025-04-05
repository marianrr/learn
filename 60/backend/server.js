import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT || 5000
import authRoutes from './routes/auth.route.js'
import { connectDB } from './lib/db.js'
import cookieParser from 'cookie-parser'

app.use(express.json())
app.use(cookieParser())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
    connectDB()
})