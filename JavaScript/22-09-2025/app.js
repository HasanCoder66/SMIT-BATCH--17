var pass = ""
var abc = "abcdefghijklmnopqrstuvwxyz"
var capitalAbc = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var num = '0123456789'
var specialChar = "!@#$%^&*()_+="

function passwordGenerator () {
  

    for(var i =0; i < 4; i++) {
        var random = Math.floor(Math.random() * abc.length)
        console.log(random)
        pass =  pass + abc[random]
    }
    for(var i =0; i < 4; i++) {
        var random = Math.floor(Math.random() * num.length)
        console.log(random)
        pass =  pass + num[random]
    }
    for(var i =0; i < 4; i++) {
        var random = Math.floor(Math.random() * specialChar.length)
        console.log(random)
        pass =  pass + specialChar[random]
    }
    for(var i =0; i < 4; i++) {
        var random = Math.floor(Math.random() * capitalAbc.length)
        console.log(random)
        pass =  pass + capitalAbc[random]
    }

      console.log(pass)
}


passwordGenerator()