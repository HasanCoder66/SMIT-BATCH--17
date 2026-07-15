import express from 'express'
import dns from 'node:dns'
import dotenv from 'dotenv'
import { rateLimit } from 'express-rate-limit'

dotenv.config()
dns.setServers(["1.1.1.1", "8.8.8.8"])



import { errorMiddleware } from './middleware/middleware.js'
import authRoute from './routes/authRoute.js'
import userRoute from './routes/userRoute.js'
import helmet from 'helmet'

export const app = express()
export const limiter = (min, apiLimit) => {
    // console.log(min, apiLimit);
   return rateLimit({
        windowMs: min * 60 * 1000, // 15 minutes
        limit : apiLimit, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
        standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
        legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
        ipv6Subnet: 56, // Set to 60 or 64 to be less aggressive, or 52 or 48 to be more aggressive
        // store: ... , // Redis, Memcached, etc. See below.
    })
}


app.use(express.json())
app.use(helmet())
// app.use(limiter)
app.use("/api/auth", authRoute)
app.use("/api/user", userRoute)

app.get("/api/janii", limiter (1, 10), (req, res) => {
    return res.status(200).json({
        status: true,
        message: "sabh chill haiii!",
    })
})






app.use(errorMiddleware)