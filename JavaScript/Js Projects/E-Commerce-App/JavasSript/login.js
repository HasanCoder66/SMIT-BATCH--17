import { sweety } from "../DummyData/dummyData.js";

let users = JSON.parse(localStorage.getItem("users")) || [];

// console.log(users)
let email = document.getElementById("email");
let password = document.getElementById("password");
let loginForm = document.querySelector(".form");
let isUser = false;
// console.log("10 ==> per user ki halat", isUser)
// console.log(users);

const loginHandler = () => {
  // console.log("login handler chlaa =>",event )
  event.preventDefault();

  if (email.value.trim() == "" || password.value.trim() == "") {
    return sweety("error", "Oops", "Please Enter all fields!");
  }

  if (email.value.trim() && password.value.trim()) {
    // console.log(email.value)
    // console.log(password.value)
    users.forEach((user) => {
      if (user.email == email.value && user.password == password.value) {
        isUser = true;
        localStorage.setItem("isUser", JSON.stringify(isUser))
      } else {
        return sweety(
          "error",
          "User Not Found!",
          "It's seem like you have'nt register yet!"
        );
      }
    });
    //     console.log("han milgaya user ==>")
    //
    //     break;
    //   }
    // console.log(isUser)
    // for(let i =0 ; i < users.length; i++){
    //   // console.log(users[i])
    //   if(users[i].email == email.value && users[i].password == password.value){
    //     console.log("han milgaya user ==>")
    //     isUser = true;
    //     break;
    //   }else {
    //     console.log("else chl raha hai ==>")
    //   }
    // }

    if (isUser) {
      sweety("success", "Login", "Login Successfully");

      setTimeout(() => {
        window.location.href = "../index.html";
      }, 1500);
    }
  }

  // if (!emailRegex.test(email.value)) {
  //   return sweety("error", "Oops", "Please Enter a valid email");
  // }
};

loginForm.addEventListener("submit", loginHandler);
