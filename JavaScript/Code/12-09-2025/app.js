// console.log("Hello World")


// Function

// function myFunc (name) {
// console.log(name)
// }


// myFunc("hasan")

// var arr = []

// console.log(arr.push("hasan"))

// console.log(arr)


// var arr = []
// function myPush (name) {
// arr[arr.length] = name
// }

// myPush("Hasan")


// console.log(arr)

            // parameters
// function abc (a,b,c) {
// console.log(c)
// }


// abc(1, true, "string")

// var myName = ""

// function abc () {
//     myName = "Hasan"
// }

// abc()

// console.log(myName)

// function foo (a, b) {
//    var output = a + b
//    return output
// //    console.log(a + b)
// }

// // console.log(foo(12, 4))
// console.log(foo(21, 45) )
// console.log(foo(52, 45))
// console.log(foo(45, 45))







// Switch Statements 


// var day = ["sun","mon", "tue","wed","thus", "fri","sat"]

// var dateDay = new Date().getDay()
// console.log(day[dateDay])
// var day ="mon"
// switch (day) {

//     case "mon":
//         alert("Class")
//         // break;
//         case "tue":
//             alert("off");
//             // break
//             case "Wed":
//                 alert("Class")
//                 break

//                 default:
//                     alert("Default")
// } 



// for (var i = 0; i < 3; i++){
//     console.log(i)
// } 


/* var i =0;
while (i < 3){
    console.log(i)
    i++
} */


// var i = 0;

// do {
//     console.log(i)
//     i++
// } while(i < 0)



// var myName = "Hasan"   // my name







function submitForm () {


var userName = document.getElementById("name")

var userEmail = document.getElementById("email")

if(userEmail.value && userName.value) {
    console.log("User Email ==>",userEmail.value)
    console.log("User Name ==>",userName.value)


    userEmail.value = ""
    userName.value = ""


}

}