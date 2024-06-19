import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [placename, setPlacename] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  /**
   * Fetches a weather data using coordindates
   * @param {[string, number, number]} Array placename, latitude, longitude
   */
  const fetchWeather = async ([name, lat, lon]) => {
    const API_KEY = import.meta.env.VITE_OPEN_WEATHER;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      updateAnimation(response.data.current.weather[0].main);
      setPlacename(name);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setAnimationClass("");
      setPlacename("");
    }
  };

  /**
   * Sets the background's animation by the current weather
   * @param {string} weather
   */
  const updateAnimation = (weather) => {
    switch (weather.toLowerCase()) {
      case "clear":
        setAnimationClass("sunny");
        break;
      case "clouds":
        setAnimationClass("cloudy");
        break;
      case "rain":
        setAnimationClass("rainy");
        break;
      default:
        setAnimationClass("");
        break;
    }
  };

  return (
    <div className={`min-h-screen bg-blue-100 pt-32 ${animationClass}`}>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard placename={placename} data={weatherData} />}
    </div>
  );
};

export default App;
