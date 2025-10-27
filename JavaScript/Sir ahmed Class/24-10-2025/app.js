// console.log("JavaScript Running -->")



function clickMe() {

    let cityName;
    console.log(cityName)
    console.log("mai chl raha hon --->")
     let email = document.getElementById("email")
     console.log(email.value)

     cityName = email.value

     console.log("City Name -->",cityName)
}


// function imageChange (e){
// console.log("Event -->",e)
// e.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YYh5Fk1u9VsWWr1MhkyQeOzeNbtnnMO96g&s"
// }

// function changeImage (e) {
//     console.log("Mai behtareen tareeky sai chl raha hon -->")
//     e.src = "https://media.istockphoto.com/id/814423752/photo/eye-of-model-with-colorful-art-make-up-close-up.jpg?s=612x612&w=0&k=20&c=l15OdMWjgCKycMMShP8UK94ELVlEGvt7GmB_esHWPYE="
// }




function seeMore () {
    let longText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis autem. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis autem." 
let shortText = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam voluptate perferendis autem."

    console.log("han bhaee chl rahy ho")
let paragraph = document.getElementById("paragraph")
let seeMoreBtn = document.getElementById("seeMore")
    

if(seeMoreBtn.innerText == "See More") {

// console.log()
paragraph.innerText = longText
seeMoreBtn.innerText = "See Less"
}else {
paragraph.innerText = shortText
seeMoreBtn.innerText  = "See More"
}
}