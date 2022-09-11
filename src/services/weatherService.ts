import { List, Root } from "../models/weather.model";

const MAPBOX_BASE = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const WEATHER_BASE = 'https://api.openweathermap.org/data/2.5/forecast?q=Sydney&appid=450a9d622a56bff861d328ffbea10a4b&units=metric&exclude=hourly&cnt=5';


export const getWeather = async (location:string) => {
    const URL = WEATHER_BASE
    const weatherResult = await fetch(URL).then(data => data.json()).then(result => result);
    const transformList  = weatherResult?.list.map((item: List) => (
      { 
        currentTemp : item.main,
        ts : item.dt,
        wind : item.wind,
        weatherInfo : item.weather[0].main,
        icon : item.weather[0].icon,
        time : item.dt_txt,
      }
    ));
    return {city: weatherResult.city, list: transformList};
}