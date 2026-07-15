import express from 'express'
import { updateUser, getAllUser } from '../controllers/userController.js'


const userRoute = express.Router()

userRoute.put("/", updateUser)
userRoute.get("/", getAllUser)

export default userRoute