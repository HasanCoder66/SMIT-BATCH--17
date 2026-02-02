// var num = 6;

// console.log(num--)
// console.log(num)

var a = 2,
  b = 1;

// var c =  a + b
// var c = ++a + b-- - a-- 
//         3   + 1   - 3
// console.log(c);
// console.log(b)


// var totalCost = (1 + 3) * 4
// console.log(totalCost)
// var message = "Enter Your Gender"
// var gender = prompt(message, "Male") 

// console.log(gender)


//keyword     //condition      // execution

// comparision operator  /// ===  , == 


// var age = prompt("Enter your Age", "22")


// var a = 2;
// var b = 1;
// if (a = b){
// console.log(a)
// alert("A and b are equal")
// }

var fullName = "Muhammad Hasan"

// if(fullName == "Muhammad" + " " + "Hasan") 
// {
//     console.log("Your name is correct")
// }
// var yourTicketNumber  = 487208;

// if (yourTicketNumber != "487208") {
//  alert("Better luck next time.");
//  }


// var age = 185;

// console.log(typeof age)
// if(age >= 0) {
//     console.log("User Register")
// }


var gender = prompt("Enter your Gender", "Male")
var message = "Not Match";

if (gender === "Male") {
    message = "Hello, Sir"
}

if (gender === "Female") {
    message = "Hello, Teacher"
}
alert(message)