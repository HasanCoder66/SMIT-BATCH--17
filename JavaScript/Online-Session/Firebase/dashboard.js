import { getCurrentUser, logoutHandler } from "./firebase.js"

getCurrentUser()



let logoutBtn = document.querySelector("#logoutBtn")

logoutBtn.addEventListener("click", () => {
    
    logoutHandler()
})