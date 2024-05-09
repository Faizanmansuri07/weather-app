const apiKey = "3e2e6a7a21d74160b8c806443862de09";
const apiurl ="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const img = document.querySelector("#imega");
const searchBox = document.querySelector("#city");
const searchBtn = document.querySelector("#search");
const winfo = document.querySelector("#w-name");
async function checkWeather(city){

    
    const response = await fetch(apiurl + city + `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);

     if(searchBox.value !== "") {
        
     
    document.querySelector("#place").innerHTML = data.name;
    document.querySelector("#temp").innerHTML = `${data.main.temp} C`;
    document.querySelector("#humanity").innerHTML =`${data.main.humidity} %`
    document.querySelector("#wind").innerHTML = data.wind.speed;
    
     } else{
         alert("please Enter Valid city");

     }
    if(data.weather[0].main ==="Clear") {
        img.src="clear.png"
    }
    else if(data.weather[0].main ==="Clouds") {
        img.src = "clouds.png";
    }
    else if(data.weather[0].main ==="Drizzle") {
        img.src = "drizzle.png";
    }
    else if(data.weather[0].main ==="Mist") {
        img.src = "mist.png";
    }
    else if(data.weather[0].main ==="Rain") {
        img.src = "rain.png";
    }
    else if(data.weather[0].main ==="Snow") {
        img.src = "snow.png";
    }
    else if(data.weather[0].main ==="Wind") {
        img.src = "wind.png";
    }
    winfo.innerHTML = data.weather[0].main;
    document.querySelector(".info").style.display = "block";

}
searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
})
