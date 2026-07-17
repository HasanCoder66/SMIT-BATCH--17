import express from 'express'
import http from 'http'
import { Server } from 'socket.io';

const app = express()
app.use(express.static("public"))
const server = http.createServer(app);

const io = new Server(server)

io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("message", (data) => {
        console.log(data);

        socket.emit("user-message", data)
        // io.emit("send-message-to-all", data)
    })
})

server.listen(5500, () => {
    console.log(`Server is running on port 5500`);
})