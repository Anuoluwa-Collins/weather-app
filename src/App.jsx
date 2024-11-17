import React, { useEffect, useState } from "react";
import Main from "./componets/Main";
import Sidebar from "./componets/sidebar";
import "./App.css";

function App() {
  const [city, setCity] = useState("London"); // Default city
  const [forecastData, setForecastData] = useState(null);
  const [error, setError] = useState(null);
  const API_KEY = "3dcda70a23b1e98ae212b35307a475df";

  useEffect(() => {
    const fetchWeatherData = async () => {
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}&units=metric`
        );

        if (!response.ok) {
          throw new Error(`City not found: ${city}`);
        }

        const data = await response.json();
        setForecastData(data.list); // Set the forecast data
        setError(null); // Clear any previous errors
      } catch (err) {
        setError(err.message);
        setForecastData(null);
      }
    };

    fetchWeatherData();
  }, [city, API_KEY]);

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleCitySubmit = (event) => {
    event.preventDefault();
    // Fetch data will automatically trigger due to the `city` dependency in useEffect
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 w-full min-h-screen text-gray-500 sm:pt-20">
      {/* Input Section for City */}
      <div className="col-span-3 flex justify-center p-4">
        <form onSubmit={handleCitySubmit} className="flex space-x-2">
          <input
            type="text"
            value={city}
            onChange={handleCityChange}
            placeholder="Enter city name"
            className="p-2 border rounded"
          />
          <button type="submit" className="p-2 bg-blue-500 text-white rounded">
            Search
          </button>
        </form>
      </div>

      {/* Weather Data Display */}
      {error ? (
        <div className="col-span-3 text-center text-red-500">{error}</div>
      ) : forecastData ? (
        <>
          <div className="col-span-2 flex flex-col justify-start">
            <Main forecastData={forecastData.slice(0, 5)} />
          </div>
          <div className="col-span-1 flex flex-col justify-start">
            <Sidebar forecastData={forecastData.slice(0, 8)} />
          </div>
        </>
      ) : (
        <div className="col-span-3 text-center">Loading weather data...</div>
      )}
    </div>
  );
}

export default App;