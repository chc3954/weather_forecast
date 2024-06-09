import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";

const App = () => {
  const [weatherData, setWeatherData] = useState(null);
  const [location, setLocation] = useState("");

  const fetchWeather = async (location) => {
    const apiKey = import.meta.env.VITE_OPEN_WEATHER;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    try {
      const response = await axios.get(url);
      setWeatherData(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setWeatherData(null);
    }
  };

  const handleSearch = (location) => {
    setLocation(location);
    fetchWeather(location);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100">
      <SearchBar onSearch={handleSearch} />
      {weatherData && <WeatherCard data={weatherData} />}
    </div>
  );
};

export default App;
