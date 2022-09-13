
// fetch current weather data
export const getCurrentWeatherData = async (city: string, unit: string) => {
  const url = `${process.env.REACT_APP_BASEURL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`;
  return await fetch(url)
    .then((data) => data.json())
    .then((result) => result);
};

// fetch forecast weather data
export const getForecastData = async (city: string, unit:string) => {
  const url = `${process.env.REACT_APP_BASEURL}/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=${unit}`;
  return await fetch(url)
    .then((data) => data.json())
    .then((result) => result);
};
