console.log("JavaScript is Running --->")


let person = {
    name: "Ayan",
    lastName: "Faheem",
    age: 12,
    married: false,
    siblings: ["Abdullah"],
    class: 8,
    skills: ["HTMl", "CSS", "Bootstrap", "GitHub", "JavaScript", "Content Creator"],
}

// console.log("Ayaan ka Data -->",person.skills)  .propertyName

// console.log(person["name"])    // --> bracket notation with string "property ka naam"


// let userName = "name"
// console.log(person[userName])


// console.log(person["lastName"])



// let lastName = "alsjfda;lsjdfl"

// console.log(lastName)




// normal function 

// function abc () {
//     console.log("abc")
// }

// abc()


// Constructor function 


// function Abc (a,b) {
// // console.log(a,b)
// this.abc = a
// this.xyz = b


// }

// Abc.prototype.drive = function () {
//     console.log("gari chl rahi hai")
//     return 2 + 2
// }
// let functCall = new Abc("abc" , "xyz")

// console.log(functCall )

// console.log("constructor" in functCall)

// console.log(functCall.hasOwnProperty("drive"))


// let a = {
//     name : "hasan",
//     email :"codermhasan@gmail.com"
// }

// console.log(a)

// console.log(a.toString())



let shop = {
    clothes : {
        title : "Shirt"
    },
    shoes : {
        title : "Shoes"
    },
    cosmetics : {},
    grocery : {},
    toys : {},
    gaming : {},
    stationary : {},
    sports : {},
}


for (let key in shop){
    console.log(shop[key])
}



// for (let i =0; i < 5; i++){
//     console.log(i)
// }