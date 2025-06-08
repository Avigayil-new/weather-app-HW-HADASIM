import React, { useEffect, useState } from 'react';
import { fetchWeather } from '../services/WeatherContext';
import WeatherInfo from './WeatherInfo';
import '../css/WeatherCard.css';

const WeatherCard = ({ city }) => {
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await fetchWeather(city);
        setWeatherData(data);
      } catch (err) {
        console.error('שגיאה בשליפת מזג האוויר:', err);
        setError('לא ניתן לטעון את מזג האוויר.');
      }
    };
    getData();
  }, [city]);

  if (error) return <div className="weather-card error">{error}</div>;
  if (!weatherData) return <div className="weather-card loading">טוען מזג אוויר עבור {city}...</div>;

  return (
    <div className="weather-card">
      <WeatherInfo
        name={weatherData.name}
        description={weatherData.weather[0].description}
        temp={weatherData.main.temp}
        feelsLike={weatherData.main.feels_like}
        humidity={weatherData.main.humidity}
      />
    </div>
  );
};

export default WeatherCard;