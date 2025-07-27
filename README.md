# Weather App

This is a simple web application that displays the current weather for a specified city. It's built with HTML, CSS (Tailwind CSS), and JavaScript.

## Features

*   **City Search:** Users can search for a city to get its current weather.
*   **Default City:** By default, the weather for Berlin is displayed.
*   **Weather Details:** The app shows temperature, humidity, and wind speed.
*   **Dynamic Weather Icons:** The icon changes based on the weather conditions (e.g., clouds, rain, clear sky).
*   **Dark Mode:** The application supports a dark theme.

## How It Works

The project is divided into two main files: `index.html` for the structure and `index.js` for the functionality.

### `index.html` (The Structure)

This file sets up the user interface of the weather app.

*   **Basic HTML Structure:** It starts with a standard HTML5 boilerplate.
*   **Styling:** It links to `output.css`, which is the compiled Tailwind CSS file. It also includes Font Awesome for icons.
*   **Dark Mode Script:** There's a small script in the `<head>` to check the user's system preference or saved theme for dark mode and applies it before the page loads to prevent a "flash of unstyled content."
*   **Main Container:** The `<section>` element is the main container for the app, styled with a gradient background.
*   **Search Bar:**
    *   An `<input>` field with the class `city-input` allows users to type in a city name.
    *   A search button (`<a>` tag with class `search-btn`) with a magnifying glass icon triggers the weather search.
*   **Weather Display:**
    *   An `<img>` with the class `weather-icon` shows an image representing the current weather.
    *   Headings (`<h1>`) display the temperature (`.tremp`), city name (`.display-city`), humidity (`.humidity`), and wind speed (`.wind-speed`).
*   **Scripts:**
    *   It includes the `axios` library for making HTTP requests to the weather API.
    *   The main logic is in `index.js`, which is loaded as a module.

### `index.js` (The Functionality)

This file contains the JavaScript code that makes the app work.

*   **Element Selection:** It starts by selecting all the necessary HTML elements from the page (like the input field, search button, and weather display elements) and storing them in variables.
*   **API Key:** It stores the API key for the OpenWeatherMap API.
*   **`getWeatherData(cityName)` function:**
    *   This is an `async` function, which means it can perform operations without blocking the rest of the code.
    *   It takes a `cityName` as an argument.
    *   It constructs the API URL with the city name and API key.
    *   It uses `axios.get()` to send a request to the OpenWeatherMap API.
    *   If the request is successful, it returns the weather data.
    *   If there's an error (e.g., the city is not found), it logs the error to the console and shows an alert to the user.
*   **`updateWeatherData(data)` function:**
    *   This function takes the weather `data` received from the API.
    *   It updates the text content of the HTML elements to display the city name, humidity, wind speed, and temperature.
    *   It uses a `switch` statement to check the main weather condition (e.g., "Clouds", "Clear", "Rain") and updates the `src` attribute of the `weather-icon` to show the corresponding image.
*   **Event Listeners:**
    *   **`DOMContentLoaded`:** When the page first loads, it calls `getWeatherData("berlin")` to fetch and display the weather for Berlin.
    *   **`keydown`:** It listens for the "Enter" key. If the user presses "Enter" in the input field, it gets the city name from the input, calls `getWeatherData`, and then `updateWeatherData`.
    *   **`click`:** It listens for a click on the search button. When clicked, it does the same thing as the "Enter" key press.

## How to Run the Project

1.  Clone this repository.
2.  Open the `src/index.html` file in your web browser.

That's it! You should see the weather app running.
