import React from "react";

const Current = ({ placename, data }) => {
  const weatherIconUrl = `http://openweathermap.org/img/wn/${data.current.weather[0].icon}@2x.png`;

  return (
    <div className="mt-24 p-6 bg-white bg-opacity-70 rounded-lg shadow-md w-full max-w-md mx-auto">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">{placename}</h2>
          <p className="text-xs text-gray-400">Timezone: {data.timezone}</p>
        </div>
        <img src={weatherIconUrl} alt="weather icon" className="w-20 h-20" />
      </div>
      <p className="text-lg capitalize">{data.current.weather[0].description}</p>
      <p className="text-4xl font-bold">{data.current.temp.toFixed(1)}°C</p>
      <div className="grid grid-cols-3 gap-5 mt-5">
        <div>
          <p className="font-bold">Feels Like</p>
          <p>{data.current.feels_like.toFixed(1)}°C</p>
        </div>
        <div>
          <p className="font-bold">Humidity</p>
          <p>{data.current.humidity}%</p>
        </div>
        <div>
          <p className="font-bold">Cloud</p>
          <p>{data.current.clouds}%</p>
        </div>
        <div>
          <p className="font-bold">Pressure</p>
          <p>{data.current.pressure} hPa</p>
        </div>
        <div>
          <p className="font-bold">Wind Speed</p>
          <p>{data.current.wind_speed} m/s</p>
        </div>
        <div>
          <p className="font-bold">Wind Degree</p>
          <p>{data.current.wind_deg}°</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
