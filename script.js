//API CALL ADDRESS WITH MY ALI ID KEY
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?appid=89032a82291f75f0b5fc2cfbc41ec8b9&units=imperial`;

// ELEMENTS
const currentDate = document.getElementById("date");
const cityName = document.getElementById("cityName");
const currentConditions = document.getElementById("currentConditions");
const currentTemp = document.getElementById("currentTemp");
const tempLow = document.getElementById("tempLow");
const tempHigh = document.getElementById("tempHigh");


// DATE
let dateObj = new Date();
let month = dateObj.getMonth() + 1;
let day = dateObj.getDate();
let year = dateObj.getFullYear();
newdate = month + "/" + day + "/" + year;
currentDate.innerHTML = newdate;

//IMAGES
// const imageMap = {
//   "clear sky": "/images/animated/day.svg",
//   "few clouds": "/images/animated/cloudy-day-2.svg",
//   "scattered clouds": "/images/animated/cloudy-day-3.svg",
//   "broken clouds": "/images/animated/cloudy-day-3.svg",
//   "shower rain": "/images/animated/rainy-2.svg",
//   "rain": "/images/animated/rainy-5.svg",
//   "thunderstorm": "/images/animated/rain-7.svg",
//   "snow": "/images/animated/snowy-5.svg",
//   "mist": "/images/animated/rainy-2.svg",
// };

// Add a click event listener to the search button and insert code because it all has to work when the button is clicked
document.getElementById("searchButton").addEventListener("click", () => {
  //CERTAIN PARTS OF THE URL SHOULD WORK ONLY WHEN BUTTON IS CLICKED-- THAT'S WHY THERE ARE NESTED
  //ZIPCODE INPUT VALUE
  const zipCode = document.getElementById("inputField").value;
  //ADD ZIPCODE TO THE REST OF THE URL
  const fullApiUrl = `${apiUrl}&zip=${zipCode},US`;
  // fetching the data
  fetch(fullApiUrl)
    .then((response) => response.json())
    .then((data) => {
      //addresses
      const currentTempAdd = data.main.temp;
      const currentConditionsAdd = data.weather[0].description;
      const cityNameAdd = data.name;
      const tempLowAdd = data.main.temp_min;
      const tempHighAdd = data.main.temp_max;

      // Display data on html page
      cityName.innerHTML = cityNameAdd;
      currentConditions.innerHTML = currentConditionsAdd;
      currentTemp.innerHTML = currentTempAdd + "°F";
      tempLow.innerHTML = "Low: " + tempLowAdd + "°F";
      tempHigh.innerHTML = "High: " + tempHighAdd + "°F";

      //WEATHER ICONS
      // const imageSrc = imageMap[currentConditionsAdd.toLowerCase()];
      // if (imageSrc) {
      //   const weatherImage = document.getElementById("weatherImage");
      //   weatherImage.src = imageSrc;
      // }
    })
    .catch((error) => console.error("Error fetching weather data:", error));
});

