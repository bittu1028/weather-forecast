import { City, CurrentWeather } from '../../models/weather.model';

export interface IWeatherProp {
  onToggle: () => void;
  weather: CurrentWeather;
  isCelcius?: boolean;
  cityInfo?: City;
}
