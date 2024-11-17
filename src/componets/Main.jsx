import React from "react";
import MainCards from "./MainCards";
import DarkModeToggle from "./DarkModeToggle";
import { Icon } from "@iconify/react";

const Main = ({ forecastData }) => {
  if (!forecastData || forecastData.length === 0) {
    return <div>Loading weather data...</div>;
  }

  return (
    <div className="flex flex-col items-center justify-center font-bold">
      {/* Header section */}
      <div className="flex justify-around items-center w-full mt-4 px-8">
        <h6>{forecastData[0]?.dt_txt.split(" ")[0]}</h6> {/* Display date */}
        <DarkModeToggle /> {/* Dark mode toggle button */}
      </div>

      {/* Middle section */}
      <div className="flex flex-row items-center my-8 space-y-4">
        <div className="text-center">
          <p className="text-9xl">
            {Math.round(forecastData[0].main.temp)}&deg;
          </p>
          <p className="text-5xl">{forecastData[0].weather[0].main}</p>
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

      {/* Cards section */}
      <div className="flex flex-row flex-wrap sm:gap-4 m-4 space-x-4 overflow-x-auto">
        {forecastData.map((data, index) => (
          <MainCards
            key={index}
            day={new Date(data.dt * 1000).toLocaleDateString("en-US", {
              weekday: "long",
            })}
            temp={Math.round(data.main.temp)}
            mood={data.weather[0].main.toLowerCase()}
          />
        ))}
      </div>
    </div>
  );
};

export default Main;
