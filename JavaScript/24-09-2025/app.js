console.log("Hello World!");


//  var text = "hasan"

//  console.log(text.charAt(0))
//  console.log(text[2])

var day = "Wed"

// if (day == "Wed") {
//     alert("Today is Weekend")
// } else if( day === "tue") {
//     alert("Today is Tuesday")
// }

// switch (day) {
//     case "Wed" :
//         alert("Today is Class");
//         break;
//     case "Thus" :
//         alert("Today is Off");
//         default :
//         console.log("Please Enter a Valid Day")
// }



// var currentDate = new Date()
// console.log(typeof currentDate.toString())



// Anonymous Function
// var submit = function () {
    // var radio = document.getElementsByName("gender")
    // console.log(radio)

    // for(var i = 0; i < radio.length; i++){
    //     // console.log(i)
    //     // console.log()

    //     if(radio[i].checked) {
    //         console.log(radio[i].value)
    //     }
    // }
// }


// Arrow Function

// var submit = () => {
    // var email = document.getElementsByClassName("email").value
    // var pass = document.getElementByClassName("password").value

//     console.log(email)
//     console.log(pass)



//     email = " "
//     pass = " "


// }





var text = "<i> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nostrum modi eaque sequi sapiente nemo repellat aspernatur ad placeat, odit possimus repellendus! Facilis quae odit nobis non quo perferendis corrupti cum. </i>"

var shortText = text.slice(0, 20)
// console.log(shortText)

var seeMore = () => {
    var paragraph =  document.getElementById("para")
    var link = document.getElementById("link")
    // console.log(link)
    // console.log(paragraph)
    // console.log()

    if(link.innerHTML === "See more") {
        paragraph.innerText = text
        paragraph.innerHTML = text
        link.innerHTML = "See Less"

    }else {
        paragraph.innerHTML = shortText
        link.innerHTML = "See more"
    }



}


function myClick () {
    var box = document.getElementById("myBox")
    console.log(box)

    // box.classList.add("hidden")
    box.classList.remove("hidden")
    // box.className += " hidden"

}