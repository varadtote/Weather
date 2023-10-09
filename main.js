// const dotenv = require('dotenv')
// require('dotenv').config()
// console.log(`This is APi key ${process.env.API_KEY}`)

const API_KEY = '894728d054834d67b7370701231509'
// get cityName from user
const info = document.querySelector(".info");
const cityName = document.querySelector(".cityName");
cityName.addEventListener("keypress", (e) => {
    if (e.key == "Enter") {
        if (cityName.value == 0) {
            alert("Enter Something");
        } else {
            getWeather(cityName.value);
        }
        info.innerText = "Loading"
    }
});




async function getWeather(city) {
    try {
        const reponse = await fetch(
            `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`
        );

        const weatherData = await reponse.json();
        console.log(weatherData)
        const temp = await weatherData.current.temp_c;
        const location = await weatherData.location.country;
        info.innerText = "";
        info.innerText += location + " " + temp + " C";




    } catch (error) {
        console.log("City Not Found");
        const info = document.querySelector(".info");
        info.innerText = "";
        info.innerText += "City Not Found";
    }
}
