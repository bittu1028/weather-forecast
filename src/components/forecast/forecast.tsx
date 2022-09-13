import React, { memo } from 'react';
import { CurrentWeather } from '../../models/weather.model';
import { IForeCastProps } from './Forecast.type';
import {
  StyledForecastContainer,
  StyledForecastDate,
  StyledForecastItem,
  StyledForecastTemp,
} from './StyledForecast';

const Forecast = ({ forecast }: IForeCastProps) => {
  const day: any = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT',
  };

  return (
    <StyledForecastContainer>
      {forecast.map((data: CurrentWeather) => {
        const dayCode = new Date(data?.ts * 1000).getDay();
        return (
          <StyledForecastItem role='card-list-item' key={data.ts}>
            <StyledForecastDate>{day[dayCode]}</StyledForecastDate>
            <img src={`http://openweathermap.org/img/w/${data.icon}.png`} alt='Icon' />
            <StyledForecastDate>{data.weatherInfo}</StyledForecastDate>
            <StyledForecastTemp>
              {`${Math.round(data?.currentTemp?.temp_max)}/${Math.round(data?.currentTemp?.temp_min)}`}
            </StyledForecastTemp>
          </StyledForecastItem>
        );
      })}
    </StyledForecastContainer>
  );
};

export default memo(Forecast);
