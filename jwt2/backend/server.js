import express from 'express'
const app = express()
import dotenv from 'dotenv'
dotenv.config()
const PORT = process.env.PORT || 5000
import authRoutes from './routes/auth.route.js'
app.use(express.json())

app.use('/api/auth', authRoutes)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})