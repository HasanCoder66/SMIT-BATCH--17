// console.log(JSON.parse(localStorage.getItem("usersData"))[0].firstName)

let allUsers = JSON.parse(localStorage.getItem("usersData"))
// console.log(allUsers)
let loginBtn = document.querySelector(".login")
let eyeIcon = document.querySelector("#eye")
// console.log(eyeIcon)

eyeIcon.onclick = toggleEyeHandler
loginBtn.onclick = loginHandler

let user = false;
let userPassword = false;
// loginBtn.addEventListener("click", loginHandler)
// console.log(loginBtn)

function loginHandler() {
    let email = document.getElementById("email")
    let password = document.getElementById("password")

    console.log("mai chl raha hon")
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/


    // console.log(email.value)
    // console.log(password.value)

    if (email.value.trim() == "" || password.value.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Both fields Are Required...",
            text: "Please Enter Both fields!",
        });
        return
    }

    if (!emailPattern.test(email.value)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email...",
            text: "Please Enter a correct Email!",
        });
        return
    }

    for (let i = 0; i < allUsers.length; i++) {
        // console.log(allUsers[i].password)
        if (allUsers[i].email == email.value && allUsers[i].password == password.value) {
            // console.log(allUsers[i].email == email.value && allUsers[i].password == password.value)
            user = true
            break
        }
    }

    if (user) {
        Swal.fire({
            icon: "success",
            title: "Login Successfully!",
            text: "Congratulations! "


        })
        setTimeout(function () {
            window.location.href = "dashboard.html"
        }, 3000)
    } else {
        Swal.fire({
            icon: "error",
            title: "Invalid Credentials",
            text: "Please Enter a valid credentials "

        })
        return
    }
    // console.log(email)
    // console.log(password)

    console.log(user)

    email.value = "";
    password.value = ""

}


function toggleEyeHandler() {
    // console.log("mai chl raha hon")
    let password = document.getElementById("password")
    // console.log(password.value)
    // console.log(eyeIcon.className)
    if (password.value.length <= 0) {
        return Swal.fire({
            icon: "error",
            title: "Empty Password Field",
            text: "Please Enter a Password"

        })
    }

    if (password.type == "password") {
        password.type = "text"
        eyeIcon.className = "fa-solid fa-eye absolute"

    } else {
        password.type = "password"
        eyeIcon.className = "fa-solid fa-eye-slash absolute"
    }
    console.log(password.type)
}