console.log("JavaScript Running -->")

// setTimeout(function () {
//     window.location.href = "/about.html"
// }, 2500)
console.log()
// function sum(a, b) {
//      a + b
// }


// console.log(sum(12, 23))



function Sum() {
    this.name = "Hasan",
        this.lastName = "ashraf",
        this.getFullName = function (a, b) {
            return a + " " + b
        }
}

let constructorFunc = new Sum()
console.log(constructorFunc.getFullName("Ayan", "Faheem"))


// let obj = {
//     name : "hasan",
//     lastName : "ashraf",
//     getFullName : function (a,b) {
//          a + " " + b
//     }
// }

// console.log(obj.getFullName("Hasan", "Ashraf"))

// window.location.replace("/about.html")
// window.location.assign("/about.html")
// window.location.reload(false)



// let openW = window.open()

// let htmlData = `<h1>Hello World! </h1>`

// // console.log()
// window.open(document.writeln(htmlData))

let age = 16

function ageChecker() {
    try {
        if (age < 18) {
            // console.log("age bari hai")
            throw "Bary hoky aou"
        }
    }
    catch (err) {
        console.log("Error Mil raha hai", err)
    }
}

ageChecker()




function checkPassword() {
    try {
        var pass = "165";
        if (pass.length < 8) {
            throw "Please enter at least 8 characters.";
        }
      
    }
    catch (err) {
        alert(err);
    }
}

// checkPassword()

console.log()

let btn = document.getElementsByTagName("button")[0]

function myAlert(){
    alert("click howa")
}
btn.onclick = myAlert

