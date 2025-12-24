async function getData() {
  let apiKey = "1961cb0636e18f447e100c1a0841727b";
  let cityName = document.getElementById("cityInput").value;

  let cityHead = document.getElementById("cityName");


  let response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`
  );

  const data = await response.json();
  console.log(data);

  const {name,base, main} = data

  console.log(name, base, main) 

cityHead.innerHTML = data.name


}
