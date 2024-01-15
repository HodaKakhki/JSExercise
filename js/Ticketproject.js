let countrySelectBox = document.querySelector(".countrySelect");
let citySelectBox = document.querySelector(".citySelect");
let countriesCitites = {
  Iran: ["Tabriz", "Tehran", "Shiraz", "Esfahan", "Mashhad"],
  Turkey: ["Istanbul", "Ezmir", "Ankara", "Istabul"],
  Us: ["Los Angles", "San Francisco", "Chicago"],
};
countrySelectBox.addEventListener("change", function () {
  if (countrySelectBox.value === "Please Select") {
    citySelectBox.innerHTML += "<option>Select City</option>";
  } else {
    let mainCountryName = countrySelectBox.value;
    let mainCounteryCities = countriesCitites[mainCountryName];
    if (mainCounteryCities) {
      citySelectBox.innerHTML = "";
      mainCounteryCities.forEach(function (city) {
        citySelectBox.innerHTML += "<option>" + city + "</option>";
      });
    } else {
      citySelectBox.innerHTML = "<option>No cities available</option>";
    }
  }
});
