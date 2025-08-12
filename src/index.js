let city = document.querySelector(".city-input");
let displayedCity = document.querySelector(".display-city");
let search = document.querySelector(".search-btn");
let weatherIcon = document.querySelector(".weather-icon");
let humidity = document.querySelector(".humidity");
let windSpeed = document.querySelector(".wind-speed");
let temp = document.querySelector(".tremp");
let apiKey = "7bea90b2334f10d78eb1325ad837110b";

// Define an async function to fetch data
async function getWeatherData(cityName) {
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    alert(
      "Could not fetch weather data. Please check the city name and try again."
    );
    return null;
  }
}

function updateWeatherData(data) {
  if (!data) return; // Don't update if data is null

  displayedCity.textContent = data.name;
  humidity.textContent = `${data.main.humidity}%`;
  windSpeed.textContent = `${data.wind.speed} km/h`;
  temp.textContent = `${Math.round(data.main.temp)}°C`;

  switch (data.weather[0].main) {
    case "Clouds":
      weatherIcon.src = "../assets/img/clouds.png";
      break;
    case "Clear":
      weatherIcon.src = "../assets/img/clear.png";
      break;
    case "Rain":
      weatherIcon.src = "../assets/img/rain.png";
      break;
    case "Drizzle":
      weatherIcon.src = "../assets/img/drizzle.png";
      break;
    case "Mist":
      weatherIcon.src = "../assets/img/mist.png";
      break;
    case "Snow":
      weatherIcon.src = "../assets/img/snow.png";
      break;
    default:
      weatherIcon.src = "../assets/img/clear.png";
      break;
  }
}

addEventListener("DOMContentLoaded", async () => {
  const berlinData = await getWeatherData("berlin");
  updateWeatherData(berlinData);
});
addEventListener("keydown", async (event) => {
  if (event.key === "Enter") {
    const cityValue = city.value.trim();
    if (cityValue === "") {
      alert("Please enter a city name");
      return;
    }
    const weatherData = await getWeatherData(cityValue);
    updateWeatherData(weatherData);
  }
});
search.addEventListener("click", async () => {
  const cityValue = city.value.trim();
  if (cityValue === "") {
    alert("Please enter a city name");
    return;
  }
  const weatherData = await getWeatherData(cityValue);
  updateWeatherData(weatherData);
});

const themeSwitcher = document.querySelector(".theme-switcher");
const themeSwitcherText = document.querySelector(".theme-switcher p");

themeSwitcher.addEventListener("click", () => {
  const html = document.documentElement;
  html.classList.toggle("dark");
  if (html.classList.contains("dark")) {
    localStorage.setItem("color-theme", "dark");
    themeSwitcherText.textContent = "dark";
  } else {
    localStorage.setItem("color-theme", "light");
    themeSwitcherText.textContent = "light";
  }
});

// set the theme switcher text on page load
if (
  localStorage.getItem("color-theme") === "dark" ||
  (!("color-theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  themeSwitcherText.textContent = "dark";
} else {
  themeSwitcherText.textContent = "light";
}
