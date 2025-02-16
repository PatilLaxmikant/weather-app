import React, { useState } from "react";
import {
    WiDaySunny,
    WiCloud,
    WiRaindrop,
    WiRain,
    WiSnow,
    WiStrongWind,
    WiHumidity,
} from "react-icons/wi";
import "./Weather.css";

const Weather = () => {
    const [city, setCity] = useState("");
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const getWeatherIcon = (weather) => {
        switch (weather) {
            case "Clear":
                return <WiDaySunny size={50} />;
            case "Clouds":
                return <WiCloud size={50} />;
            case "Rain":
                return <WiRain size={50} />;
            case "Drizzle":
                return <WiRaindrop size={50} />;
            case "Snow":
                return <WiSnow size={50} />;
            default:
                return <WiDaySunny size={50} />;
        }
    };

    const handleKeyDown = (event) => {
        if (event.key === "Enter") {
            searchWeather();
        }
    };


    const searchWeather = async () => {
        if (!city) {
            setError("Please enter a city name.");
            return;
        }

        setLoading(true);
        setError("");

        try {
            const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_API}&units=metric`;
            const response = await fetch(url);
            const data = await response.json();
            if (data.cod === 200) {
                setWeatherData(data);
            } else {
                setError("City not found. Try another one.");
            }
        } catch (err) {
            setError("Failed to fetch weather data.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="weather-container">
            <h1>Weather App</h1>
            
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Enter city name..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    onKeyDown={handleKeyDown}
                />

                <div onClick={searchWeather}>
                    <button className="search-button">Search</button>
                </div>
            </div>

            {loading && <p className="loading">Loading...</p>}
            {error && <p className="error">{error}</p>}

            {weatherData && (
                <div className="weather-icon">
                    <div className="icon">
                        {getWeatherIcon(weatherData.weather[0].main)}
                        <p>{weatherData.weather[0].main}</p>
                    </div>

                    <div className="weather-info">
                        <h2 className="location">{weatherData.name}</h2>
                        <p className="temp">{weatherData.main.temp}°C</p>
                    </div>
                    {/* <p className='time'>
                        <span>{moment().format('dddd MMM YYYY')}</span>
                    </p> */}
                    

                    <div className="weather-data">
                        <div className="col">
                            <div className="icon">
                                <WiHumidity size={40} />
                            </div>
                            <p>{weatherData.main.humidity}%</p>
                            <span>Humidity</span>
                        </div>
                        <div className="col">
                            <div className="icon">
                                <WiStrongWind size={40} />
                            </div>
                            <p>{weatherData.wind.speed} km/h</p>
                            <span>Wind Speed</span>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
};

export default Weather;
