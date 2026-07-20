const socket = io();
// console.log("user connected...");


const chatUserName = document.getElementById("chat-userName")
const sendBtn = document.getElementById("sendBtn")
const input = document.getElementById("messageInput")
const joinBtn = document.getElementById("joinBtn")
const messagesArea  = document.getElementById("messages");
const showOnlineUsers  = document.getElementById("show-online-users");
const notify = document.getElementById("notify");


// server responds...

socket.on("user-message", (message) => {
    const li = document.createElement("li")
    li.innerHTML = message
    messagesArea.appendChild(li)
})

socket.on("online-users", (count) => {
    showOnlineUsers.innerHTML = `Online Users : ${count}`
})

socket.on("joined-user", (user) => {
    notify.innerHTML = `${user} joined chat`
})

socket.on("left-user", (leftUser) => {
    notify.innerHTML = `${leftUser} left chat`
})
socket.on("typing-user", (typist) => {
    notify.innerHTML = `${typist} is typing...`

    setTimeout(() => {
notify.innerHTML = `Notification`
    },1500)
})

const sendMessage = () => {
    console.log("click how...", input.value);

    if(chatUserName.value){
    socket.emit("message", input.value)
    input.value = ""
}else{
    alert("please join chat first..")
}

   


}

const joinUser = () => {
    if(!chatUserName.value.trim()){
        return alert("please enter a join chat name...")
    }

    socket.emit("join-user", chatUserName.value)
}


sendBtn.addEventListener("click", sendMessage)
joinBtn.addEventListener("click", joinUser)
input.addEventListener("keypress", () => {
    console.log("key pressed");

    socket.emit("typing", chatUserName.value)
})