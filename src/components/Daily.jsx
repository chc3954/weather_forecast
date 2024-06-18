import React from "react";

const Daily = ({ data }) => {
  /**
   * Gets a icon image through url
   * @param {string} icon
   * @returns param for Icon url
   */
  const getWeatherIcon = (icon) => `http://openweathermap.org/img/wn/${icon}@2x.png`;

  return (
    <div className="col-span-2 px-6 bg-white bg-opacity-70 rounded-lg shadow-md w-full mx-auto max-w-[66.5rem] overflow-x-auto">
      <div className="w-full flex gap-5 justify-between">
        {Object.values(data).map((d) => {
          const time = new Date(d.dt * 1000);
          const month = time.getMonth();
          const date = time.getDate();

          return (
            <article key={d.dt} className="grid grid-rows-3 justify-items-center items-center">
              <div className="font-black text-lg">
                {month}.{date}
              </div>
              <div>
                <img
                  src={getWeatherIcon(d.weather[0].icon)}
                  alt="weather icon"
                  title={d.summary}
                  className="w-20 aspect-square"
                />
                <div className="text-center text-xs capitalize">{d.weather[0].description}</div>
              </div>
              <div className="text-xs">
                <span className="font-bold text-blue-600">{d.temp.min.toFixed(1)}°C</span>
                <span className="border border-slate-400 rounded-full m-[3px]"></span>
                <span className="font-bold text-red-600">{d.temp.max.toFixed(1)}°C</span>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Daily;
