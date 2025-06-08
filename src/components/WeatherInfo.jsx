import WeatherIcon from './WeatherIcon';
import '../css/WeatherInfo.css';

const WeatherInfo = ({ name, description, temp, feelsLike, humidity }) => (
   <div className="weather-info">
    <div className="header-row">
      <div className="text-side">
        <h2 className="city-name">{name}</h2>
        <p className="description">{description}</p>
      </div>
      <div className="icon-side">
        <WeatherIcon feelsLike={feelsLike} />
      </div>
    </div>

    <div className="weather-grid">
      <div className="weather-cell">
        <p><strong>טמפרטורה</strong><br /> {Math.round(temp)}°C</p>
      </div>
      <div className="weather-cell">
        <p><strong>תחושת טמפ'</strong><br /> {Math.round(feelsLike)}°C</p>
      </div>
      <div className="weather-cell">
        <p><strong>לחות</strong><br /> {humidity}%</p>
      </div>
    </div>
  </div>
);

export default WeatherInfo;