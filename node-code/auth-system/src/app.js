import express from 'express'
import dns from 'node:dns'
import dotenv from 'dotenv'


dotenv.config()
dns.setServers(["1.1.1.1", "8.8.8.8"])



import { errorMiddleware } from './middleware/middleware.js'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'

export const app = express()
app.use(express.json())

app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)








app.use(errorMiddleware)