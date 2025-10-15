let colorsName = ["purple", "orange", "blue", "beige", "cyan", "red", "pink"]
function changeBg() {
    var randomNum = Math.floor(Math.random() * colorsName.length)
    document.body.style.backgroundColor = colorsName[randomNum]
    document.getElementsByTagName("span")[0].innerText = colorsName[randomNum]
}