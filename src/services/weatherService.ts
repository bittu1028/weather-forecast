// import { useErrorHandler } from "react-error-boundary";
// import { List, Root } from "../models/weather.model";

const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// const handleError = function (err:any) {
//   console.warn(err);
//   return new Response(JSON.stringify({
//       code: 400,
//       message: 'Stupid network Error'
//   }));
// };

// export const getCurrentWeatherData = async (city: string) => {
//   let URL = `${BASE_URL}/weather?q=${city}&appid=450a9d622a56bff861d328ffbea10a4b&units=metric`;
//   try {
//     const currentWeather = await fetch(URL).then(data => data.json()).then(result => result).catch();
//     return {
//       currentTemp : currentWeather.main,
//       ts : currentWeather.dt,
//       wind : currentWeather.wind,
//       weatherInfo : currentWeather.weather[0].main,
//       icon : currentWeather.weather[0].icon,
//       time : currentWeather.dt_txt,
//     }
//   }
//   catch(e) {
//     console.log(e, 'error')
//   }
// };


// export const getForecastData = async (city:string = "Sydney") => {
//     const URL = `${BASE_URL}/forecast?q=${city}&appid=450a9d622a56bff861d328ffbea10a4b&units=metric&exclude=hourly&cnt=5`
//     const forecastData = await fetch(URL).then(data => data.json()).then(result => result);
//     const transformList  = forecastData?.list.map((item: List) => (
//       { 
//         currentTemp : item.main,
//         ts : item.dt,
//         wind : item.wind,
//         weatherInfo : item.weather[0].main,
//         icon : item.weather[0].icon,
//         time : item.dt_txt,
//       }
//     ));
//     return {city: forecastData.city, list: transformList};
// }



export const getCurrentWeatherData = async (city: string) => {
  let url = `${BASE_URL}/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  return await fetch(url).then(data => data.json()).then(result => result);
};

export const getForecastData = async (city: string) => {
  let url = `${BASE_URL}/forecast?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`;
  return await fetch(url).then(data => data.json()).then(result => result);
};