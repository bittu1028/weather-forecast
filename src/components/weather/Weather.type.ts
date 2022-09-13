import { City, CurrentWeather } from '../../models/weather.model';

export interface IWeatherProp {
  weather: CurrentWeather;
  cityInfo?: City;
}
