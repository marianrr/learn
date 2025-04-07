import express from 'express'
const router = express.Router()
import path from 'path'
const __dirname = import.meta.dirname
router.use(express.static('public'))
router.use(express.json())
router.use(express.urlencoded({ extended: true }))
import dotenv from 'dotenv'
dotenv.config()
const ACCESS_TOKEN = process.env.ACCESS_TOKEN



let dod = []
router.get('/miau', (req, res) => {

    res.status(200).json(dod)
})
router.get('/hau', (req, res) => {

    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'hau.html'))
})

router.post('/miau', (req, res) => {
     dod = req.body
    console.log('dod este: ', dod)
    res.status(200).json(dod)
})


router.get('/notes/:user', (req, res) => {
    let name = req.params.user
    
    console.log("User is ", name)
    let user2 = users.find(user => user.name === name)
    console.log('User2 is: ', user2)
    fetch('http://localhost:3000/miau', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
          },

        body: JSON.stringify(user2)
    })
    res.redirect('../hau')

})

router.post('/login', (req, res) => {
    const { name, password } = req.body
    console.log("Name and password are: ", name, password)
    res.redirect(`/notes/${name}`)
})

router.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '..', 'public', 'home.html'))
})

export default router