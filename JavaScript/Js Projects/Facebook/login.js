// console.log(JSON.parse(localStorage.getItem("usersData"))[0].firstName)

let allUsers = JSON.parse(localStorage.getItem("usersData"))
// console.log(allUsers)
let loginBtn = document.querySelector(".login")
loginBtn.onclick = loginHandler

let user = false;
let userPassword = false;
// loginBtn.addEventListener("click", loginHandler)
// console.log(loginBtn)

function loginHandler () {
    let email = document.getElementById("email")
    let password = document.getElementById("password")
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
if(!emailPattern.test(email.value)){
return Swal.fire({
    icon: "error",
    title: "Invalid Email...",
    text: "Please Enter a correct Email!",
});
}

    for(let i = 0; i < allUsers.length; i++){
        // console.log(allUsers[i].email)
        if(allUsers[i].email == email.value && allUsers[i].password == password.value){
            user = true
        }
    }
    // console.log(email)
    // console.log(password)

    console.log(user)

    email.value = "";
    password.value = ""

}
