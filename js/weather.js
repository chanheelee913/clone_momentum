function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const API_KEY = "edc8f7b2ffbe8213260dbaef748c1fce";
    
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}`;
    fetch(url).then(response => response.json()).then(data => {
        console.dir(data);

        const city = document.querySelector("#city");
        const weather = document.querySelector("#weather");
        const temp = document.querySelector("#temperature");
        
        const kelv = parseFloat(data.main.temp);
        const cels = (kelv-273.15).toFixed(1,"0");
        

        city.innerText = data.name;
        weather.innerText = data.weather[0].main;
        temp.innerText = cels;
    });
    console.log(url);
}

function onGeoError() {
    alert("Cant find your location")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);