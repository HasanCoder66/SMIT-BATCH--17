let btn = document.querySelector(".btn");
let img = document.querySelector(".card-img-top");
let title = document.querySelector(".card-title");
let cardText = document.querySelector(".card-text");

// console.log(img)
// console.log(title)
// console.log(cardText)
// console.log(btn)

const showData = (data) => {
console.log(data[0])
const {flags, name} = data[0]
// console.log(flags,"Flags ==>")
// console.log(name,"name ==>")
img.src = flags.png
cardText.innerText = flags.alt
title.innerText = name.common

}

 const getCountryDetails = async (country) => {
  // console.log(country)
  let result = await fetch(`https://restcountries.com/v3.1/name/${country}`)
  let data = await result.json()
  console.log(data)
showData(data)
};

const getDetails = (latitude, longitude) => {
  console.log(latitude, longitude);

  let apiRes = fetch(
    `https://geocode.xyz/${latitude},${longitude}?geoit=JSON&auth=108358676102951920793x73268`
  )
    .then((res) => res.json())
    .then((result) => {
      const { country } = result;
      // console.log(country)
      getCountryDetails(country);
    });

  // console.log(apiRes)
};

const getLocation = () => {
  // console.log("clicked -->")
  navigator.geolocation.getCurrentPosition(
    function (success) {
      //   console.log(success);
      const { longitude, latitude } = success.coords;
      //   console.log(longitude, latitude)
      getDetails(latitude, longitude);
    },
    function (error) {
      console.log(error);
    }
  );
};

getLocation()
// Event Listener
btn.addEventListener("click", getLocation);
