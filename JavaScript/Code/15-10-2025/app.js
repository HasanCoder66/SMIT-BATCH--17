/*console.log("Hello World!")
console.log("Hello World!")
*/

// console.log("Hello World!")
// console.log("Hello World!")


// keyword  parentheses starting, ending, changes block of code --> execution
// for (var i = 0; i <= 5; i++) {
//     console.log(i)
// }




// while 

// var i = 0;

// while (i < 5) {
//     console.log(i)
//     i++
// }




// var i = 0;

// do {
//     console.log(i)
//     i++
// } while (i < 0)


let input = document.getElementById("input")
// console.log(input.value)

// if(input.value === "") {
//     alert("Please Enter a Value")
// }else {
//     console.log(input.value)
// }

var multiLineText = `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores error ipsum sed.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores error ipsum sed.`
var shorterText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores error ipsum sed."

function seeMore() {

    let btn = document.getElementsByTagName("button")[0]
    console.log(btn)
    let paragraph = document.getElementsByTagName("p")[0]
    if(btn.innerText == "SeeMore"){
        paragraph.innerText = multiLineText
        btn.innerText = "See Less"
    } else {
        paragraph.innerText = shorterText
        btn.innerText = "SeeMore" 
    }
    // console.log(paragraph)

    // console.log()
}
