import { createSlice } from '@reduxjs/toolkit';
import { fetchWeather, transformWeatherData } from './fetchWeather';
import { City, CurrentWeather } from '../models/weather.model';

export interface WeatherState  {
  currentWeather: CurrentWeather | null;
  forecast: CurrentWeather[] | [];
  cityInfo: City | null;
  isError: boolean;
  errorMessage: string;
  isLoading: boolean;
}

const initialState: WeatherState = {
  currentWeather: null,
  forecast: [],
  cityInfo: null,
  errorMessage: '',
  isError: false,
  isLoading: false
};

const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, state => {
        state.isLoading = true
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        // transforming currentweather and forecast data
        const res = transformWeatherData(action.payload);
        state.currentWeather = res.weather;
        state.forecast = res.forecast;
        state.isError = false;
        state.errorMessage = "";
        state.cityInfo = res.cityInfo;
        state.isLoading = false;

      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.isError = true;
        state.isLoading = false;
        state.errorMessage =  action.payload as string ;
      });
  },
});

export default weatherSlice.reducer;