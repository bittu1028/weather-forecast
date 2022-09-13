import React, { memo } from 'react';
import {
  H2,
  H4,
  StyledHeader,
  StyledLocation,
  StyledTemperatureInfoContainer,
  StyledWeatherContainer,
  StyledTemperatureWrapper,
  StyledWeatherWrapper,
  TemperatureContainer,
  StyledImage,
} from './StyledWeather';
import { IWeatherProp } from './Weather.type';

const Weather = ({ weather, cityInfo }: IWeatherProp) => {
  const { currentTemp, weatherInfo, wind } = weather;
  return (
    <StyledWeatherContainer>
      <StyledLocation>
        <H2>
          {cityInfo?.name}, {cityInfo?.country}
        </H2>
      </StyledLocation>
      <StyledWeatherWrapper>
        <StyledTemperatureWrapper>
          <StyledImage src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`} alt='Icon' />
          {/* <i className={`wi ${weatherbitIcons[weatherIconCode]}`} /> */}
          <TemperatureContainer>
            <StyledHeader>
              {currentTemp?.temp} 
            </StyledHeader>
          </TemperatureContainer>
        </StyledTemperatureWrapper>
        <StyledTemperatureInfoContainer>
          <H4>
            <span>Feels Like:</span>{currentTemp?.feels_like}
          </H4>
          <H4>
            <span>Weather:</span> {weatherInfo}
          </H4>
          <H4>
            <span>Wind Speed:</span> {wind.speed} km/h
          </H4>
          <H4>
            <span>Humidity:</span> {currentTemp?.humidity}%
          </H4> 
          <H4>
            <span>Max:</span> {currentTemp?.temp_max}
          </H4>
        </StyledTemperatureInfoContainer>
      </StyledWeatherWrapper>
    </StyledWeatherContainer>
  );
};

export default memo(Weather);
