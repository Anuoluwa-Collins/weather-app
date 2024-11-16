import React, { useEffect, useState } from "react";
import Main from "./componets/Main";
import Sidebar from "./componets/Sidebar";
import "./App.css";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [forecastData, setForecastData] = useState(null);
  const API_KEY = "3dcda70a23b1e98ae212b35307a475df";
  const CITY = "ilorin";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        // Fetch current weather
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const weather = await weatherResponse.json();

        // Fetch hourly forecast
        const forecastResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${CITY}&appid=${API_KEY}&units=metric`
        );
        const forecast = await forecastResponse.json();

        // Update state
        setWeatherData(weather);
        setForecastData(forecast.list.slice(0, 6)); // Get 6 upcoming hourly data points
      } catch (error) {
        console.error("Error fetching weather data:", error);
      }
    };

    fetchWeatherData();
  }, [API_KEY]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 w-full min-h-screen text-gray-500 sm:pt-20">
      <div className="col-span-2 flex flex-col justify-start">
        <Main weatherData={weatherData} />
      </div>
      <div className="col-span-1 flex flex-col justify-start">
        <Sidebar forecastData={forecastData} />
      </div>
    </div>
  );
}

export default App;
