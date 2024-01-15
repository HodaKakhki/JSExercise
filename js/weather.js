let citiesData = {
  tehran: {
    city: "Tehran",
    temp: 12,
    weather: "Sunny",
    humidity: 23,
    windspeed: 40,
  },
  shiraz: {
    city: "Shiraz",
    temp: 9,
    weather: "windy",
    humidity: 20,
    windspeed: 44,
  },
  tabriz: {
    city: "Tabriz",
    temp: 2,
    weather: "rainy",
    humidity: 25,
    windspeed: 47,
  },
  mashhad: {
    city: "Mashhad",
    temp: 15,
    weather: "cloudy",
    humidity: 43,
    windspeed: 50,
  },
  esfahan: {
    city: "Esfahan",
    temp: 18,
    weather: "snowy",
    humidity: 33,
    windspeed: 60,
  },
};

let $ = document;
let searchBtn = $.getElementById("search");
let searchBar = $.querySelector(".search-bar");

searchBtn.addEventListener("click", function () {
  let searchBarValue = searchBar.value;
  let mainCityDatas = citiesData[searchBarValue];
  if (mainCityDatas) {
    $.querySelector(".city").innerHTML = mainCityDatas.city;
    $.querySelector(".temp").innerHTML = mainCityDatas.temp;
    $.querySelector(".description").innerHTML = mainCityDatas.weather;
    $.querySelector(".humidity").innerHTML = "Humidity : " + mainCityDatas.humidity;
    $.querySelector(".wind").innerHTML = "Wind speed : " + mainCityDatas.windspeed + 'km/h';

    $.querySelector(".weather").classList.remove("loading");
  } else {
      
      alert("please select your city!")
  }
});
