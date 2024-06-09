import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [animationClass, setAnimationClass] = useState("");

  const fetchWeather = async (location) => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
      updateAnimation(response.data.weather[0].main);
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

  const handleSearch = (location) => {
    fetchWeather(location);
  };

  return (
    <div className={`min-h-screen bg-blue-100 ${animationClass}`}>
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col items-center justify-center">
        {weatherData && <WeatherCard data={weatherData} />}
      </div>
    </div>
  );
};

export default App;
