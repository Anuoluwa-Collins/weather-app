import React from "react";
import MainCards from "./MainCards";
import { Icon } from "@iconify/react";
import DarkModeToggle from "./DarkModeToggle";

const Main = ({ weatherData }) => {
  if (!weatherData) return <div>Loading...</div>;

  const { main, weather, wind, dt, name } = weatherData;
  const date = new Date(dt * 1000).toLocaleDateString();

  return (
    <div className="flex flex-col items-center justify-center font-bold">
      {/* Header section */}
      <div className="flex justify-around items-center w-full mt-4 px-8">
        <h6>{name}</h6>
        <h6>{date}</h6>
        <DarkModeToggle />
      </div>

      {/* Middle section */}
      <div className="flex flex-row items-center my-8 space-y-4">
        <div className="text-center">
          <p className="text-9xl">{Math.round(main.temp)}&deg;</p>
          <p className="text-5xl">{weather[0].main}</p>
        </div>
        <div className="text-center">
          <p className="flex items-center">
            <Icon icon="mdi:weather-dust" />
            {Math.round(wind.speed)} mph
          </p>
          <p className="flex items-center">
            <Icon icon="nimbus:drop" />
            {main.humidity}%
          </p>
        </div>
      </div>

      {/* Example cards section */}
      <div className="flex flex-row flex-wrap sm:gap-4 m-4 space-x-4 overflow-x-auto">
        <MainCards day="Today" temp={main.temp} mood={weather[0].main.toLowerCase()} />
        <MainCards day="Tomorrow" temp={main.temp + 2} mood="sunny" />
      </div>
    </div>
  );
};

export default Main;
