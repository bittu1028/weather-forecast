import { CurrentWeather } from '../../models/weather.model';

export interface IForeCastProps {
  forecast: CurrentWeather[];
}
export interface  Iday  {
  [key: number]: string ;
};