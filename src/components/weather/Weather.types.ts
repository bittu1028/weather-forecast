import { City, CurrentWeather } from '../../models/weather.model';

export interface WeatherProp {
    onToggle: () => void;
    weather: CurrentWeather;
    isCelcius?: boolean;
    cityInfo?: City;
}