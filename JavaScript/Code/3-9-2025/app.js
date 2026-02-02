// console.log(Math.round(Math.random() * 10))

// var num = 10.45465

// console.log(num.toFixed(10))

// console.log(10 - "ali")

// var date = Date.now()
// var ramadanDate = new Date("22 aug 2003")
// var currentDat = new Date()
// var month = ["jan", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat","","sep"]
// var name = 

// var date = new Date().getTime()

// var diff 

// date.setDate("10")
// date.setFullYear("2010")
// date.setMonth("7")
// console.log(date)



var currentDate = new Date()
var ramadanDate = new Date("February 18, 2026")


var diff = ramadanDate.getTime() - currentDate.getTime()

var day = Math.round(diff / (1000 * 60 * 60 *24))
var month = Math.round( diff/(1000 * 60 * 60 *24 * 30))
// var week = Math.round( diff/(1000 * 60 * 60 *24 * 7))
// day -= month*30
// var week = Math.round(day / 7);
// day = week 
console.log("month ==>",month)
console.log("week ==>",month)
console.log("days ==>",day)

// console.log(diff)
// console.log(ramadanDate)