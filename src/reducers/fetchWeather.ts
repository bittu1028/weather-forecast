import { createAsyncThunk } from "@reduxjs/toolkit";
import { City, CurrentWeather, List, Root } from "../models/weather.model";
import {
  getCurrentWeatherData,
  getForecastData,
} from "../services/weatherService";

export const fetchWeather = createAsyncThunk(
  "weather/fetchWeather",
  async (city: string, { rejectWithValue }) => {
    try {
      const res = await Promise.all([
        getCurrentWeatherData(city),
        getForecastData(city),
      ]);

      if (res[0].cod === 200 && res[1].cod === "200") {
        return res;
      }

      if (res[0].cod === 404 || res[0].cod === "404") {
        return rejectWithValue(res[0].message);
      }

      if (res[0].cod > 400 || res[1].cod > 400) {
        return rejectWithValue("Something Went Wrong");
      }
    } catch {
      return rejectWithValue("Error");
    }
  }
);

export const transformWeatherData = (
  res: any
): {
  weather: CurrentWeather;
  forecast: CurrentWeather[];
  cityInfo: City;
} => {
  const weather = res[0] as List;
  const forecast = res[1] as Root;

  const transformedCurrentWeather: CurrentWeather = {
    currentTemp: weather.main,
    ts: weather.dt,
    wind: weather.wind,
    weatherInfo: weather.weather[0].main,
    icon: weather.weather[0].icon,
    time: weather.dt_txt,
  };

  const finalForecastData: CurrentWeather[] = [];
  let currentDate:number =  new Date().getDate();

  forecast?.list.forEach((item: List) => {
      const foreCastDate = new Date(item.dt * 1000).getDate();
      console.log(foreCastDate, currentDate);
      if(foreCastDate > currentDate) {
        currentDate = foreCastDate;
        finalForecastData.push({
          currentTemp: item.main,
          ts: item.dt,
          wind: item.wind,
          weatherInfo: item.weather[0].main,
          icon: item.weather[0].icon,
          time: item.dt_txt,
        })
      }
      
  });

  return {
    weather: transformedCurrentWeather,
    forecast: finalForecastData,
    cityInfo: forecast.city,
  };
};
