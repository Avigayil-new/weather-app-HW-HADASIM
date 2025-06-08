import axios from 'axios';

const apiKey = '8ee633956bad6ae1965b557a94ecfcba';
const proxy = 'https://cors-anywhere.herokuapp.com/';

export const fetchWeather = async (city) => {
  const url = `${proxy}https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=he`;
  const res = await axios.get(url);
  return res.data;
};