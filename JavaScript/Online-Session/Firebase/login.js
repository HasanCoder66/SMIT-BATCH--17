import { loginHandler, getCurrentUser } from "./firebase.js";


let email = document.querySelector("#email");
let password = document.querySelector("#password");
let loginBtn = document.querySelector("#loginBtn");

getCurrentUser()


loginBtn.addEventListener("click", () => {
//   console.log("btn click howaa ===>")
  loginHandler(email.value, password.value);
});
