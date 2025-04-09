import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
import homeRouter from './routes/Home.js'
const PORT = process.env.PORT

app.use('/', homeRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})