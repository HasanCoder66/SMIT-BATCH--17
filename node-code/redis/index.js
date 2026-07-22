import express from 'express'
import { connectDb } from './db/connect.js';
import dns from 'node:dns';
import User from './models/UserSchema.js';
import { createClient } from "redis";
import dotenv from 'dotenv'

dotenv.config()
const app = express()
dns.setServers(["1.1.1.1", "8.8.8.8"]);



const redisClient = createClient({
    url: process.env.REDIS_URL
});

redisClient.on("error", (err) => {
    console.error("Redis Error:", err);
});

(async () => {
    await redisClient.connect();
    console.log("redis connected!");
})();

connectDb();

app.get("/users", async (req, res) => {

    const cacheKey = `users`;
    const redisData = await redisClient.get(cacheKey);


    if (!redisData) {
        const users = await User.find();
        await redisClient.set(cacheKey, JSON.stringify(users), { EX: 3600 }
        )
        return res.status(200).json({
            status: true,
            data: users
        })
    } else {
        return res.status(200).json({
            status: true,
            data: JSON.parse(redisData)
        })
    }


})

app.listen(5500, () => {
    console.log("server is listening on port : 5500");
})