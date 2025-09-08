// console.log("Hello World!")

// var userInput = prompt("Enter Your Name")
// console.log(userInput)

function submitForm() {
  // alert("Submit")

  var myName = document.getElementById("name");
  var email = document.getElementById("email");

  if (myName.value.trim() && email.value.trim()) {
    console.log(myName.value);
    console.log(email.value);
  } else {
    console.log("Please a enter a value");
  }
}


// var text = "my name is hasan ashraf hasan"
// console.log(text.replace(/hasan/g, "ahsan" ))
// submitForm()

