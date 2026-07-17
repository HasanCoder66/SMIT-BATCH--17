const socket = io();
// console.log("user connected...");


const input = document.getElementById("input")
const btn = document.getElementById("btn")
const messagesArea  = document.getElementById("messagesArea");


const sendMessage = () => {
    console.log("click how...", input.value);

    socket.emit("message", input.value)
    socket.on("user-message", (data) => {
        console.log(data);
        const li = document.createElement("li")
        li.append(data)
        messagesArea.appendChild(li)

        // li.innerHTML = ""
        // console.log(data);
    })
}


btn.addEventListener("click", () => {
    sendMessage()
})