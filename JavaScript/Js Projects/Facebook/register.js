console.log("Running ->");

function signupHandler() {
    // console.log("mai signup hon chl raha hon")
    let firstName = document.querySelector("#firstName").value
    let surName = document.querySelector("#surName").value
    let password = document.querySelector("#password").value
    let email = document.querySelector("#email").value
    let gender = document.getElementsByName("gender")
    let date = document.querySelector("#date").value
    let month = document.querySelector("#month").value
    let year = document.querySelector("#year").value

    let userGender = ""
    
    if (firstName.trim() && surName.trim()) {
        if (date && month && year) {
            if (gender) {

             }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Please Select Your Gender!",
                });
            }
        } else {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Please Enter Your Complete Date Of Birth!",
            });
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Your Name Fields!",
        });
    }

    let usersArr = localStorage.getItem("usersData") || []
    // console.log("local storage sai data araha hai -->",usersArr)
    let parseStorageData = JSON.parse(usersArr)

    usersArr = parseStorageData
    // console.log("FirstName -->",firstName)
    // console.log("FirstName -->",firstName)
    // console.log("FirstName -->",firstName)
    // console.log("FirstName -->",firstName)
    // console.log("FirstName -->",firstName)
    let userData = {
        firstName: firstName,
        surName: surName,
        email: email,
        password: password,
        gender: "",
        dob: `${date}-${month}-${year}`
    }

    usersArr.push(userData)
    // console.log("Users Array -->",usersArr)
    // console.log(userData)
    // console.log("Date -->",date)
    // console.log("Month -->",month)
    // console.log("year -->",year)


    // console.log(gender)

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            userGender = gender[i].value
            userData.gender = userGender
        }
    }

    console.log(userGender)
    localStorage.setItem("usersData", JSON.stringify(usersArr))
    // console.log(password)
    // console.log(email)
}