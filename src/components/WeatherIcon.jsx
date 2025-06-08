const WeatherIcon = ({ feelsLike }) => {
  if (feelsLike >= 30) return <span>🔥</span>;
  if (feelsLike >= 20) return <span>🌤️</span>;
  return <span>❄️</span>;
};

export default WeatherIcon;