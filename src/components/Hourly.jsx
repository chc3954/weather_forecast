import React from "react";

const Hourly = ({ data }) => {
  const weatherIconUrl = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="p-5 bg-white bg-opacity-70 rounded-lg shadow-md w-full max-w-md overflow-x-auto">
      <div className="flex flex-nowrap">
        {Object.values(data)
          .slice(0, 23)
          .map((d) => {
            const time = new Date(d.dt * 1000);
            const hour = ("0" + time.getHours()).slice(-2);
            const minute = ("0" + time.getMinutes()).slice(-2);

            return (
              <article className="ml-3 pr-7 grid grid-rows-5 items-center">
                <img
                  src={weatherIconUrl(d.weather[0].icon)}
                  alt="weather icon"
                  className="w-20 aspect-square"
                />
                <div className="font-black text-lg">
                  {hour}:{minute}
                </div>
                <div className="text-xs text-center capitalize">{d.weather[0].description}</div>
                <div className="font-bold">{d.temp.toFixed(1)}°C</div>
                <div className="text-xs">{d.rain ? d.rain["1h"] : 0}mm/h</div>
              </article>
            );
          })}
      </div>
    </div>
  );
};

export default Hourly;
