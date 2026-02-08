// console.log("Hello World!")
var forward = 0;

function fight () {
    console.log(event.keyCode, event.key)
    var ironMan = document.getElementById("iron-man")
    // console.log(ironMan.style.left)

    if( event.keyCode == 68 && forward < 1000) {
        forward = forward + 30
        ironMan.src = "assets/iron-walk.gif"
        ironMan.style.left = forward + "px"
        // ironMan.style.backgroundColor = "blue"
        // ironMan.style.width = "300px"
        // ironMan.style.height = "300px"
    }
    if( event.keyCode == 65 && forward > 0) {
        forward = forward - 30
        ironMan.src = "assets/iron-walk.gif"
        ironMan.style.left = forward + "px"
        // ironMan.style.width = "300px"
        // ironMan.style.height = "300px"
    }

    if(event.keyCode == 32) {
        ironMan.src = "assets/iron-gem.gif"
        ironMan.style.width = "300px"
        ironMan.style.height = "300px"
    }
}

window.onkeyup = fight