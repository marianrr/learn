import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
const app = express()
const PORT = process.env.PORT
import homeRouter from './routes/Home.js'
app.use('/', homeRouter)

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}.`)
})