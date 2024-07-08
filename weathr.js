let lcn = document.querySelector("#location");
let btn = document.querySelector(".enter");
const key = "942a25d4ae316af1c95199044732c3fd";


let fects = document.querySelector("#fects");
let getdata =  document.querySelector("#getdata");
let er = document.querySelector(".er");
let val = document.querySelector(".val");
let cityLoc = document.querySelector("#city");
let humidity = document.querySelector("#Humidity");
let tem = document.querySelector("#tem");
let ws = document.querySelector("#ws");
let disc = document.querySelector("#disc");
let vbt = document.querySelector("#vbt");


const getfact = async () => {
    city = lcn.value;
    const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;
    let promis = await fetch(URL);
    let data = await promis.json();
    let err = data.cod;
    console.log(err);
    console.log(data);
    if ( err == 404) {
        
        er.style.display = "block";
        val.style.disppay = "none";
    }
    else {
        cityLoc.innerHTML = "Location = " + data.name;
        humidity.innerHTML = data.main.humidity;
        tem.innerHTML = data.main.temp + "k";
        ws.innerHTML = data.wind.speed + "km/h";
        disc.innerHTML = disc.innerHTML = data.weather[0].description;
        vbt.innerHTML = data.visibility;
    }

    

}

btn.addEventListener("click",getfact);
