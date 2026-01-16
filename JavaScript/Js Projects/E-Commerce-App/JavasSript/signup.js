// console.log("javascript is running ==>")

import { sweety } from "../DummyData/dummyData.js";

// Variables ==>
let firstName = document.getElementById("firstName");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirmPassword");
let formSubmit = document.getElementById("formSubmit");
let existUser = false;
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// let users = JSON.parse(localStorage.getItem("users")) || []

let users = JSON.parse(localStorage.getItem("users")) || [];

// Fucntions ==>
const signUpHandler = (event) => {
  event.preventDefault();
  //   console.log();
  if (
    firstName.value.trim() == "" ||
    lastName.value.trim() == "" ||
    email.value.trim() == "" ||
    password.value.trim() == "" ||
    confirmPassword.value.trim() == ""
  ) {
    return sweety("error", "Oops", "Please Enter all fields!");
  }

  if (password.value.length < 8 || confirmPassword.value.length < 8) {
    return sweety("error", "Oops", "Password at least 8 characters!");
  }

  if (!emailRegex.test(email.value)) {
    return sweety("error", "Oops", "Please Enter a valid email");
  }

  if (password.value != confirmPassword.value) {
    sweety("error", "Oops", "Password or Confirm Password are not Matched!");
  }

  users.find((item) => {
    if (item.email == email.value) {
      existUser = true;
    }
  });

  if (existUser) {
    return sweety("error", "Oops", "This user is already register");
  }

  let userObj = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    password: password.value,
    cPassword: confirmPassword.value,
  };

  // console.log("mai agy chlaa ==>", userObj);
  users.push(userObj);
  // console.log(users, "Users Array ==> ");
  localStorage.setItem("users", JSON.stringify(users));

  // console.log(JSON.parse(localStorage.getItem("users"))[0])

  sweety(
    "success",
    "Sucessfully signup",
    "Congratulations Signup Successfully"
  );

  setTimeout(() => {
    window.location.href = "../Pages/login.html";
  }, 1500);

  formSubmit.reset();
  // console.log("mai chl raha hon", event.target)
  // console.log("check pass or confirm pass ==>",password.value != confirmPassword.value)
};

formSubmit.addEventListener("submit", signUpHandler);
