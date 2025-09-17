function abc(a) {
  alert(a);
}

function imageChange(e) {
  // console.log(e)
e.style.border = "20px solid red"
  e.src =
    "https://www.animatedimages.org/data/media/67/animated-car-image-0021.gif";
}

function clearImage(e) {
  e.style.border = ""
    e.src =
    "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
}


function abc (e) {
// console.log(event.key)
// if(event.key === "Enter" ) {
//     console.log("Submit")
// }

e.style.backgroundColor = "blue"


}


// function xyz (e) {
//     console.log(e)
// }




function submitForm () {

   var email = document.getElementById("email")
   var pass = document.getElementById("pass")
    console.log("Email ==>",email.value)
    console.log("Pass ===>", pass.value)
}