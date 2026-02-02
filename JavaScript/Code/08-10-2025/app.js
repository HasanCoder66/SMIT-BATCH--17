// console.log("Hello World!")

// how to create element using js

var p = document.createElement("p")
var parent = document.getElementById("parent")

var text = document.createTextNode("My Name is Hasan")
// console.log(text)


// console.log(p.innerHTML = "my name is hasan")

p.appendChild(text)
parent.appendChild(p)
console.log(p)



parent.remove()


var ul = document.getElementById("ul")
// console.log("ul ==> " , ul.hasAttribute("href"))
// console.log("ul ==> " , ul.setAttribute("class" , "hasan"))
// console.log("ul ==> " , ul.getAttribute("class" ))
// console.log("ul ==> " , ul.children[0].attributes)

// for (var i = 0; i < ul.children.length; i++) {
//     console.log(ul.children[i].style.listStyleType = "square")
// }

// var allParas = document.getElementsByTagName("p")
// console.log(allParas[1].innerHTML = "Hasan")
// console.log(allParas[1])
// console.log(allParas[1].innerHTML = "Hasan")




// document.children[0].children[1].children[0].children[0].children[0]


// ke agar junk artifect hai to kia return kery ga 3 
// ke agar junk artifect nhi hai to kia return kery ga 1 

// document.childNodes[1].childNodes[1].nodeType

// document.childNodes[1].childNodes[1].nodeName