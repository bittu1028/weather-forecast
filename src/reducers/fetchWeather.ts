import { createAsyncThunk } from '@reduxjs/toolkit';
import { City, CurrentWeather, List, Root } from '../models/weather.model';
import { getCurrentWeatherData, getForecastData } from '../services/weatherService';

export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async (city: string, { dispatch, rejectWithValue, fulfillWithValue }) => {
    try {
      const res = await Promise.all([getCurrentWeatherData(city), getForecastData(city)]);

      if (res[0].cod === 200) {
        return res;
      }
      return rejectWithValue(res[0].message);
    } catch {
      console.log('res');
      return rejectWithValue('Error');
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

  const transformedCurrentWeather : CurrentWeather = {
      currentTemp : weather.main,
      ts : weather.dt,
      wind : weather.wind,
      weatherInfo : weather.weather[0].main,
      icon : weather.weather[0].icon,
      time : weather.dt_txt,
  }

  const transformList: CurrentWeather[]  = forecast?.list.map((item: List) => (
        { 
            currentTemp : item.main,
            ts : item.dt,
            wind : item.wind,
            weatherInfo : item.weather[0].main,
            icon : item.weather[0].icon,
            time : item.dt_txt,
        }
));

  return {
    weather: transformedCurrentWeather,
    forecast:transformList,
    cityInfo: forecast.city
  };
};