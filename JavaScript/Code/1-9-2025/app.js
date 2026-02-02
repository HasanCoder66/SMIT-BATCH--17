// console.log("Hello World")

// Mubarak ho aap sabh ko jo pass hogaye achy numbers sy =>

var randomValue = "@$#%^&*()_6744akl;sdfl;asd";

var pass = "";

for (var i = 0; i <= 8; i++) {
  var ranNum = Math.floor(Math.random() * randomValue.length );
  pass += randomValue[ranNum];
  //    console.log(ranNum)
}

console.log("Your Random Password ==>", pass);
