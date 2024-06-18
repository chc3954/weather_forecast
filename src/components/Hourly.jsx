import React from "react";

const Hourly = ({ data }) => {
  /**
   * Gets a icon image through url
   * @param {string} icon
   * @returns param for Icon url
   */
  const getWeatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="p-5 bg-white bg-opacity-70 rounded-lg shadow-md w-full max-w-lg overflow-x-auto">
      <div className="flex flex-nowrap">
        {Object.values(data)
          .slice(0, 23)
          .map((d) => {
            const time = new Date(d.dt * 1000);
            const hour = ("0" + time.getHours()).slice(-2);
            const minute = ("0" + time.getMinutes()).slice(-2);

            return (
              <article key={d.dt} className="ml-3 pr-7 grid grid-rows-5 items-center">
                <div className="font-black text-lg">
                  {hour}:{minute}
                </div>
                <div className="row-span-2 self-start">
                  <img
                    src={getWeatherIcon(d.weather[0].icon)}
                    alt="weather icon"
                    className="w-16 aspect-square"
                  />
                  <div className="text-xs text-center capitalize">{d.weather[0].description}</div>
                </div>
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
