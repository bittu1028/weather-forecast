import { createAsyncThunk } from '@reduxjs/toolkit';
import { City, CurrentWeather, List, Root } from '../models/weather.model';
import {
  getCurrentWeatherData,
  getForecastData,
} from '../services/weatherService';

// fetching current weather data and forecast data parallely
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { rejectWithValue }) => {
    try {
      const res = await Promise.all([
        getCurrentWeatherData(city),
        getForecastData(city),
      ]);
      // success
      if (res[0].cod === 200 && res[1].cod === '200') {
        return res;
      }
      // not found
      if (res[0].cod === 404 || res[0].cod === '404') {
        return rejectWithValue(res[0].message);
      }
      // some error occured
      if (res[0].cod > 400 || res[1].cod > 400) {
        return rejectWithValue('Something Went Wrong');
      }
    } catch {
      return rejectWithValue('Error');
    }
  }
);

// transforming weather data to desired formmat
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
  };

  const finalForecastData: CurrentWeather[] = [];
  let currentDate:Date =  new Date();

  forecast?.list.forEach((item: List) => {
      // since we have to pay api for daily call i am fetching 3 hours interval data for 5 days 
      // filter hourly data just to display daily data
      const foreCastDate = new Date(item.dt * 1000);
      if(foreCastDate > currentDate) {
        currentDate = foreCastDate;
        finalForecastData.push({
          currentTemp: item.main,
          ts: item.dt,
          wind: item.wind,
          weatherInfo: item.weather[0].main,
          icon: item.weather[0].icon,
        })
      }
      
  });
  return {
    weather: transformedCurrentWeather,
    forecast: finalForecastData,
    cityInfo: forecast.city,
  };
};
