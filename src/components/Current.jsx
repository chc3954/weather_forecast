import React from "react";
import getWeatherIcon from "../utils/functions";

const Current = ({ placename, data }) => {
  return (
    <div className="p-6 bg-white bg-opacity-70 rounded-lg shadow-md w-full ml-auto max-w-lg">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h2 className="text-2xl font-bold">{placename}</h2>
          <p className="text-xs text-gray-400">Timezone: {data.timezone}</p>
        </div>
        <img
          src={getWeatherIcon(data.current.weather[0].icon)}
          alt="weather icon"
          className="w-20 aspect-square"
        />
      </div>
      <p className="text-lg capitalize">
        {data.current.weather[0].description}
      </p>
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
          <p className="font-bold">Wind</p>
          <p>
            {data.current.wind_deg}° / {data.current.wind_speed}m/s
          </p>
        </div>
        <div>
          <p className="font-bold">Precipitation</p>
          <p>{data.current.rain ? data.current.rain["1h"] : 0} mm/h</p>
        </div>
      </div>
    </div>
  );
};

export default Current;
