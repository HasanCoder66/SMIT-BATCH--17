import express from 'express'
import { login, signup } from '../controllers/authController.js'
import {rateLimit} from 'express-rate-limit'

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
const authRoute = express.Router()

authRoute.post("/signup", signup)
authRoute.post("/login", limiter(1, 3), login)

export default authRoute