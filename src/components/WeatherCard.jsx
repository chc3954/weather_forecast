import React from "react";

const WeatherCard = ({ data }) => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-2">{data.name}</h2>
      <p className="text-lg">{data.weather[0].description}</p>
      <p className="text-4xl font-bold">{data.main.temp.toFixed(1)}°C</p>
      <div className="grid grid-cols-2 gap-10 mt-4">
        <div>
          <p className="font-bold">Humidity</p>
          <p>{data.main.humidity}%</p>
        </div>
        <div>
          <p className="font-bold">Wind</p>
          <p>{data.wind.speed} m/s</p>
        </div>
      </div>
    </div>
  );
};

export default WeatherCard;
