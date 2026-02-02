import { signupHandler } from "./firebase.js";

let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupBtn = document.querySelector("#signupBtn");



signupBtn.addEventListener("click", () => {
  // console.log("btn click howaa ===>")
  signupHandler(email.value, password.value);
});
