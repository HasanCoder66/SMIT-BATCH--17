import express from 'express'
import { updateUser } from '../controllers/userController.js'


const userRoute = express.Router()

userRoute.put("/", updateUser)

export default userRoute