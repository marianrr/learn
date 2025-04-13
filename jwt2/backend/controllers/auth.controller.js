
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()
const ACCESS_TOKEN = process.env.ACCESS_TOKEN
const REFRESH_TOKEN = process.env.REFRESH_TOKEN

const generateTokens = (id) => {
    const access_token = jwt.sign({ id }, ACCESS_TOKEN, { expiresIn: '15m' })
    const refresh_token = jwt.sign({ id }, REFRESH_TOKEN, { expiresIn: '7d' })
    return { access_token, refresh_token }
}

const generateRefreshToken = (id, refresh_token) => {
    rt.push({ [`refresh_token:${id}`]: refresh_token })
    console.log("rt este: ", rt)
}

const generateCookies = (res, access_token, refresh_token) => {
    res.cookie("accessToken", access_token, {
        httpOnly: true, //prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',    // prevent CSRF attacks, cross-site request forgery attack
        maxAge: 15 * 60 * 1000
    })
    res.cookie("refreshToken", refresh_token, {
        httpOnly: true, //prevent XSS attacks, cross site scripting attack
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'strict',    // prevent CSRF attacks, cross-site request forgery attack
        maxAge: 7 * 24 * 60 * 60 * 1000
    })
}

let users = [
    { name: "marian", password: "12", id: 1 },
    { name: "ionut", password: "34", id: 2 },
    { name: "catalin", password: "56", id: 3 },
]
let i = 3
let rt = [1, 2,]

const signup = async (req, res) => {

    try {
        const { name, password } = req.body
        console.log("userul este: ", name, password)
        let user = users.find(user => user.name === name)
        if (user) {
            res.status(400).json({ message: "User already exists!" })
        } else {
            const user = { name: name, password: password, id: ++i }
            users.push(user)
            console.log("Userii sunt: ", users)

            // authenticate
            const { access_token, refresh_token } = generateTokens(user.id)
            generateRefreshToken(user.id, refresh_token)
            generateCookies(res, access_token, refresh_token)


            res.status(201).json({
                user: {
                    id: user.id,
                    name: user.name,
                }, message: "User created successfully."
            })
        }
    } catch (error) {
        console.log(error.message)
        res.status(500).json({ message: error.message })
    }



}
const login = async (req, res) => {
    res.status(200).send("Welcome to login page!")
}
const logout = async (req, res) => {
    try {
        const refreshToken1 = req.cookies.refreshToken
        console.log("Refresh tokenul este: ", refreshToken1)
        const decoded = jwt.verify(refreshToken1, REFRESH_TOKEN)
        console.log('Decoded este: ', decoded)
        const rt2 = rt.map(user => {
            if (user[`refresh_token:${decoded.id}`]) {
                delete user[`refresh_token:${decoded.id}`]
                return
            }
            return user
        })
        console.log('rt sters este: ', rt2.filter(elem => elem !== undefined))
        res.status(200).send("Welcome to logout page!")
    } catch (error) {
        console.log(error)
    }



}


export {
    signup, login, logout
}