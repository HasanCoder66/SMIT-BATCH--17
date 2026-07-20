import express from 'express'
import http from 'http'
import { Server } from 'socket.io';

const app = express()
app.use(express.static("public"))
const server = http.createServer(app);

const io = new Server(server)
let users = [];


io.on("connection", (socket) => {
    console.log(socket.id);

    socket.on("message", (data) => {
        console.log(data);

        io.emit("user-message", data)
        // io.emit("send-message-to-all", data)
    })

    socket.on("join-user", (joinUserName) => {
        users.push({
            id: socket.id,
            userName: joinUserName
        });

        io.emit("online-users", users.length)
        io.emit("joined-user", joinUserName)
    })


    socket.on("disconnect", () => {

        const findleftUser = users.find((user) => user.id === socket.id);

        users = users.filter((user) => user.id !== socket.id)
        io.emit("online-users", users.length)

        if (findleftUser) {
            io.emit("left-user", findleftUser.userName)
        }


    })

    socket.on("typing", (typist) => {
        socket.broadcast.emit("typing-user", typist)
    })


})

server.listen(5500, () => {
    console.log(`Server is running on port 5500`);
})