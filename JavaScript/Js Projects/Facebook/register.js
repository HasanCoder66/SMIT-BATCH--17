// console.log("Running ->");

function emptyFields(firstName, surName, email, password, date, month, year) {
    console.log("empty wala chl raha hai -->")
    document.querySelector("#firstName").value = ""
    document.querySelector("#surName").value = "",
        document.querySelector("#email").value = "",
        document.querySelector("#password").value = ""
        document.querySelector("#date").value = "",
        document.querySelector("#month").value = "",
        document.querySelector("#month").value = "",
        month.value = "",
        year = ""

    console.log(firstName.value)
}

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
    let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    let userGender = ""
    let genderChecked;   // undefined
    let userData = {
        firstName: firstName,
        surName: surName,
        email: email,
        password: password,
        gender: "",
        dob: `${date}-${month}-${year}`
    }

    for (let i = 0; i < gender.length; i++) {
        if (gender[i].checked) {
            genderChecked = gender[i].checked
            userGender = gender[i].value
            userData.gender = userGender
        }
    }
    if (firstName.trim() == "" || surName.trim() == "") {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please Enter Your Full Name!",
        });
        return
    }

    if (date == "Date" || month == "Month" || year == "Year") {
        Swal.fire({
            icon: "error",
            title: "Select your Dob",
            text: "Please Enter Your Complete DOB!",
        });
        return
    }

    if (!genderChecked) {
        // console.log(genderChecked)
        Swal.fire({
            icon: "error",
            title: "Select Your Gender...",
            text: "Please Enter Your Gender!",
        });
        return
    }

    if (password.length < 8) {
        Swal.fire({
            icon: "error",
            title: "Week Password",
            text: "Password sholud be at lease 8 characters!",
        });
    }

    if (!emailPattern.test(email)) {
        Swal.fire({
            icon: "error",
            title: "Invalid Email...",
            text: "Please Enter a correct Email!",
        });
        return
    }


    let usersArr = localStorage.getItem("usersData") || []
    // console.log("local storage sai data araha hai -->",usersArr)
    let parseStorageData = JSON.parse(usersArr)

    usersArr = parseStorageData

    usersArr.push(userData)

    localStorage.setItem("usersData", JSON.stringify(usersArr))

    Swal.fire({
        icon: "success",
        title: "Registration Completed!",
        text: "Thank you for your signup!",
    });

    emptyFields(firstName, surName, email, password, date, month, year)

}