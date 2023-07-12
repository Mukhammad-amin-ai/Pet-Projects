let pagoda = document.getElementById("pagoda");
let pagoda2 = document.getElementById("pagoda2");
let other = document.getElementById("other");
let humidy = document.getElementById("humidy");
let search = document.getElementById("search");
let wind = document.getElementById("wind");
let day = document.getElementById("day");
let date = document.getElementById("date");
let night = document.getElementById("night");
let chouse = document.getElementById("chouse");
let apiKey = "7c0e84adb28a4017b1951223230907";
let country = document.getElementById("city");
let error2 = document.getElementById("error");
let images = document.getElementById('images')
// let src = images.getAttribute('src')
let error1 = 1006;
let city = "DefaultCity";

async function myclick() {
  fetch(
    `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${city}&aqi=yes`
  )
    .then((response) => response.json())
    .then((data) => {
      if (data.current) {
        console.log(data.current.condition.text);
        pagoda.innerHTML = data.current.temp_c + "C";
        pagoda2.innerHTML = data.current.temp_c + "C";
        humidy.innerHTML = data.current.humidity + "%";
        wind.innerHTML = data.current.wind_kph + "km/h";
        other.innerHTML = data.location.name;
        day.innerHTML = data.forecast.forecastday[0].hour[12].temp_c + "C";
        night.innerHTML = data.forecast.forecastday[0].hour[21].temp_c + "C";
        date.innerHTML = data.location.localtime;
        if (data.current.condition.text ==='Sunny') {
          images.src ='./Images/Sun.png'
        }else if (data.current.condition.text.includes('rain' &&'light')){
          images.src ='./Images/Frame 1.png'
        }else if (data.current.condition.text.includes('rain')){
          images.src ='./Images/Rain.png'
        }else if (data.current.condition.text.includes('snow')){
          images.src ='./Images/Snow.png'
        }else if (data.current.condition.text.includes('cloudy')){
          images.src ='./Images/Cloud.png'
        }
        error2.style.display = "none";
      } else if (data.error.code) {
        error2.style.display = "flex";
      } else {
        error2.style.display = "none";
      }
    });
  chouse.style.display = "none";
}
search.addEventListener("click", myclick);
country.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    myclick();
  }
});

country.addEventListener("change", (event) => {
  city = event.target.value;
});
