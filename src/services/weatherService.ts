const BASE_URL = 'https://api.openweathermap.org/data/2.5';

export const getCurrentWeatherData = async (city: string) => {
  let url = `${BASE_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  return await fetch(url).then(data => data.json()).then(result => result);
};

export const getForecastData = async (city: string) => {
  let url = `${BASE_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  return await fetch(url).then(data => data.json()).then(result => result);
};