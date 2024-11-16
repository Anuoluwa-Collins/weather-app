import React from "react";
import HourCards from "./hourCards";
import { Icon } from "@iconify/react";


const Sidebar = ({ forecastData }) => {
  if (!forecastData) return <div>Loading...</div>;

  return (
    <div className="flex flex-col items-center font-bold">
      <h5>Good Morning</h5>
      <h5>{new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}</h5>

      <div className="flex flex-row items-center justify-center my-4 space-y-2">
        <div className="text-center">
          <p className="text-5xl">{Math.round(forecastData[0].main.temp)}&deg;</p>
        </div>
        <div className="text-center">
          <p className="flex items-center">
            <Icon icon="mdi:weather-dust" />
            {Math.round(forecastData[0].wind.speed)} mph
          </p>
          <p className="flex items-center">
            <Icon icon="nimbus:drop" />
            {forecastData[0].main.humidity}%
          </p>
        </div>
      </div>

      <p>Feels like {Math.round(forecastData[0].main.feels_like)}&deg;</p>
      <p className="text-xl">{forecastData[0].weather[0].main}</p>

      <h4>Hourly Forecast</h4>

      {/* HourCards Section */}
      <div className="grid grid-cols-3 gap-1 m-2">
        {forecastData.map((hour, index) => (
          <HourCards
            key={index}
            hour={new Date(hour.dt * 1000).toLocaleTimeString([], { hour: "2-digit", hour12: true })}
            temp={Math.round(hour.main.temp)}
            mood={hour.weather[0].main.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
