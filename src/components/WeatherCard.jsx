import React from "react";

const WeatherCard = ({ data }) => {
  const weatherIconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  return (
    <div className="mt-24 p-6 bg-white rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">{data.name}</h2>
        <img src={weatherIconUrl} alt="weather icon" className="w-16 h-16" />
      </div>
      <p className="text-lg capitalize">{data.weather[0].description}</p>
      <p className="text-4xl font-bold">{data.main.temp.toFixed(1)}°C</p>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold">Feels Like</p>
          <p>{data.main.feels_like.toFixed(1)}°C</p>
        </div>
        <div>
          <p className="font-bold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-bold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
      <div className="flex justify-between mt-4">
        <div>
          <p className="font-bold">Min Temp</p>
          <p>{data.main.temp_min.toFixed(1)}°C</p>
        </div>
        <div>
          <p className="font-bold">Max Temp</p>
          <p>{data.main.temp_max.toFixed(1)}°C</p>
        </div>
        <div>
          <p className="font-bold">Pressure</p>
          <p>{data.main.pressure} hPa</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
