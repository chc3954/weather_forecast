import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [placename, setPlacename] = useState("");
  const [weatherData, setWeatherData] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  const fetchWeather = async ([name, lat, lon]) => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER;
    const url = `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

    try {
      const response = await axios.get(url);
      setPlacename(name);
      setWeatherData(response.data);
      updateAnimation(response.data.current.weather[0].main);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
      setAnimationClass("");
    }
  };

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
    <div className={`min-h-screen bg-blue-100 ${animationClass}`}>
      <SearchBar onSearch={fetchWeather} />
      {weatherData && <WeatherCard placename={placename} data={weatherData} />}
    </div>
  );
};

export default App;
