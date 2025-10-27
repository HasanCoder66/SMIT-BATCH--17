// console.log("js running --->")



// let studentObj = {
//     name: "Abdullah",
//     email: "abdullah@gmail.com",
//     subj: ["HTML", "CSS", "JavaScript"],
//     hobbies: []
// }




// studentObj.class = "Modern Web & App"

// studentObj.class = {
//     className : "Modern Web & App Development",
//     timings : "7 to 9PM"
// }

// delete studentObj.subj[0]
// console.log("Student Object --->",studentObj)

// console.log("s" in studentObj)


// console.log("Student Object --->", studentObj.skills)
// console.log("Student Object --->", studentObj.hobbies[0])
// console.log("Student Object --->",studentObj.subj.pop())
// console.log("Student Object --->",studentObj.subj.unshift("JavaScript"))
// console.log("Student Object --->",studentObj.subj)







// let personData = {
//     firstName : "Hasan",
//     lastName : "Ashraf",
//     userDetail : {
//         firstName : "Abdullah",
//         lastName :"Shaikh",
//         getFullName : function () {
//             return this.firstName + this.lastName
//          }
//     },

// }

// console.log(personData.userDetail.getFullName())


// function getFullName (a, b) {
//     return a + b
// }


// console.log(getFullName("Hasan", "Ashraf"))



// constructor function 

// function Plan (plan, pesy) {
// this.plan = plan
// this.monthly = pesy
// }

// let basic = new Plan("Basic", 4)
// let premium = new Plan("premium", 8)
// let ultimate = new Plan("ultimate", 12)
// console.log( "Packages basic -->", basic)
// console.log( "Packages premium -->", premium)
// console.log( "Packages ultimate -->" , ultimate)






// function plan(packageName,
//     monthlyPay) {
//     return {
//         name: packageName,
//         monthly: monthlyPay
//     }
// }


// console.log(plan("Basic", 5))



// function FullName () {
//     this.firstName = "Hasan";
//     this.lastName = "Ashraf";

//     this.getFullName = function (firstName, lastName) {
//         return firstName + " " + lastName
//     }
// }


// let getFullName = new FullName()

// console.log(getFullName.getFullName("Hasan", "Ashraf"))