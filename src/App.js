import React from 'react';
import WeatherCard from './components/WeatherCard';
import './App.css';

function App() {
  const cities = ['Eilat', 'London', 'New York', 'Alaska'];

  return (
    <div className="App">
      <h1>מזג האוויר מסביב לעולם</h1>
      <div className="card-container">
        {cities.map((city, index) => (
          <WeatherCard key={index} city={city} />
        ))}
      </div>
    </div>
  );
}

export default App;
