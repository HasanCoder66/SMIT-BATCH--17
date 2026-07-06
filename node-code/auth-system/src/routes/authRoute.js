import express from 'express'
import { login, signup } from '../controllers/authController.js'


const authRoute = express.Router()

authRoute.post("/signup", signup)
authRoute.post("/login", login)

export default authRoute