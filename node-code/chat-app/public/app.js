const socket = io();
// console.log("user connected...");


const input = document.getElementById("messageInput")
const sendBtn = document.getElementById("sendBtn")
const messagesArea  = document.getElementById("messages");


socket.on("user-message", (data) => {
    console.log(data);
    const li = document.createElement("li")
    li.innerHTML = data
    messagesArea.appendChild(li)

    // li.innerHTML = ""
    // console.log(data);
})

const sendMessage = () => {
    console.log("click how...", input.value);

    socket.emit("message", input.value)

   


}


sendBtn.addEventListener("click", sendMessage)