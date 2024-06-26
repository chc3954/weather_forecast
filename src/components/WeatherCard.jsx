import React from "react";
import Current from "./Current";
import Hourly from "./Hourly";
import Daily from "./Daily";

const WeatherCard = ({ placename, data }) => {
  console.log("Data: ", data);

  return (
    <div className="grid grid-cols-2 gap-10 mx-20">
      <Current placename={placename} data={data} />
      <Hourly data={data.hourly} />
      <Daily data={data.daily} />
    </div>
  );
};

export default WeatherCard;
