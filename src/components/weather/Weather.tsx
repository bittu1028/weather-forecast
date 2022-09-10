import React from 'react';
import { City, CurrentWeather } from '../../models/weather.model';
import { H2, H4, StyledHeader, StyledLocation, StyledTemperatureInfoContainer, StyledWeatherContainer, StyledWeatherWrapper, TemperatureContainer } from './StyledWeather';

 
interface WeatherProp {
  onToggle: () => void;
  weather: CurrentWeather;
  isCelcius?: boolean;
  cityInfo?: City;
}

const Weather = ({
  onToggle, 
  weather, 
  isCelcius = true, 
  cityInfo
}: WeatherProp)  => {
  const {
    currentTemp,
    weatherInfo,
    time,
    wind,
  } = weather;

  const countryFlagsUrl = 'https://www.countryflags.io/';

  return (
    <StyledWeatherContainer>
      <StyledWeatherWrapper>
        {/* <i className={`wi ${weatherbitIcons[weatherIconCode]}`} /> */}
        <TemperatureContainer>
          <StyledHeader>
            {isCelcius ? `${currentTemp?.temp} °C` : `${currentTemp?.temp} °F`} 
          </StyledHeader>
            <div 
                className="temperature-toggle" 
                onClick={onToggle}
                style={{
                  color: isCelcius ? 'rgba(255, 255, 255, .7)' : '#adff2f'
                }}
            >
              <span>{isCelcius ? '°F' : '°C' }</span>
            </div>
        </TemperatureContainer>
      </StyledWeatherWrapper>
      <StyledTemperatureInfoContainer>
        <StyledLocation>
          <H2>{cityInfo?.name}, {cityInfo?.country}</H2>
          <img src={`${countryFlagsUrl}/${cityInfo?.country}/shiny/64.png`} alt=""/>
        </StyledLocation>
        <H4>
          <span>Timezone:</span> {cityInfo?.country}
        </H4>
        <H4>
          <span>Weather:</span> {weatherInfo}
        </H4>
        <H4><span>Wind Speed:</span> {wind.speed} km/h</H4>
        <H4><span>Humidity:</span> {currentTemp?.humidity}%</H4>
        <H4><span>Date:</span> {time}</H4>
      </StyledTemperatureInfoContainer>
    </StyledWeatherContainer>
  );
}

export default Weather;