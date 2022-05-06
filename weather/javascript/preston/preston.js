!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0];if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src="https://weatherwidget.io/js/widget.min.js";fjs.parentNode.insertBefore(js,fjs);}}(document,"script","weatherwidget-io-js");
async function getWeather() {
    let response = await fetch("https://api.openweathermap.org/data/2.5/weather?id=5604473&exclude=sys,timezone&units=imperial&appid=b0d07380ce5ea2770c47bb85b41d4544");
    let data = await response.json();
    let windchill = 35.74 + (0.6215*data.main.temp) - (35.75*(data.wind.speed**0.16)) + (0.4275*data.main.temp*(data.wind.speed**0.16))
    document.getElementById("wind-speed").innerText = "Wind Speed: " + data.wind.speed + " MPH"
    document.getElementById("humidity").innerText = "Humidity: " + data.main.humidity + "%"
    document.getElementById("wind-chill").innerText = "Wind Chill: " + Math.round(windchill) + "\u00B0 F"
}
getWeather()

