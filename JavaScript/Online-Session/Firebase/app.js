import { addUserData, getCurrentUser, signupHandler } from "./firebase.js";



let username = document.querySelector("#username");
let email = document.querySelector("#email");
let password = document.querySelector("#password");
let signupBtn = document.querySelector("#signupBtn");


getCurrentUser()


signupBtn.addEventListener("click", () => {
  // console.log("btn click howaa ===>")
  signupHandler(username.value ,email.value, password.value);
  // addUserData()
});
