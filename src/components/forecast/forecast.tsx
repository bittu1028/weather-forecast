import React from 'react';
import { weatherbitIcons } from '../../helpers/icons';
import { CurrentWeather } from '../../models/weather.model';
import { StyledForecastContainer, StyledForecastDate, StyledForecastItem, StyledForecastTemp } from './StyledForecast';

interface IForeCast {
    forecast: CurrentWeather[];
    isCelcius?: boolean;
}

const Forecast = ({ forecast, isCelcius=true } : IForeCast) => {
  const day:any = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
  };

  return (
    <StyledForecastContainer>
      {forecast.map((data:CurrentWeather, index: number) => {
        const dayCode = new Date(data.time).getDay();
        return index !== 0 && (
          <StyledForecastItem 
              key={data.ts}
          >
            {/* <i className={`wi ${weatherbitIcons[data.weather.icon]}`}></i> */}
            <StyledForecastDate>{day[dayCode]}</StyledForecastDate>
            <StyledForecastTemp>
              {isCelcius ? data.currentTemp.temp : Math.round((data.currentTemp.temp * (9 / 5)) + 32)}<span>°</span>
            </StyledForecastTemp>
          </StyledForecastItem>
        );
      })}
    </StyledForecastContainer>
  );
};

export default Forecast;