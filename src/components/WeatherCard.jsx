import React from "react";
import Current from "./Current";

const WeatherCard = ({ placename, data }) => {
  console.log(data);
  return (
    <div className="flex items-center justify-center">
      <Current placename={placename} data={data} />
      {/* <Hourly data={data.hourly} /> */}
      {/* <Daily data={data} />  */}
    </div>
  );
};

export default WeatherCard;
