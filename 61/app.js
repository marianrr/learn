import express from 'express'
const app = express()
import homeRouter from './routes/Home.js'
app.use('/', homeRouter)


app.listen(3000, () => console.log('Listening on port 3000.'))
