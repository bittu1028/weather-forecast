import React, { useState, useEffect } from 'react';

// import Wrapper from './Wrapper';

import { getWeather } from '../../services/weatherService';

import StyledWeather from './StyledWeather';
import { weatherbitIcons } from '../../helpers/icons';
import { City, CurrentWeather } from '../../models/weather.model';

 
interface Weather {
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
}: Weather)  => {
  const {
    currentTemp,
    weatherInfo,
    time,
    wind,
  
  } = weather;



  const countryFlagsUrl = 'https://www.countryflags.io/';

  return (
    <div className="weather">
      <div className="weather-wrapper">
        {/* <i className={`wi ${weatherbitIcons[weatherIconCode]}`} /> */}
        <div className="temperature-control">
          <h1 className="weather-temp">
            {isCelcius ? `${currentTemp?.temp} °C` : `${currentTemp?.temp} °F`} 
          </h1>
            <div 
                className="temperature-toggle" 
                onClick={onToggle}
                style={{
                  color: isCelcius ? 'rgba(255, 255, 255, .7)' : '#adff2f'
                }}
            >
              <span>{isCelcius ? '°F' : '°C' }</span>
            </div>
        </div>
      </div>
      <div className="temperature-info">
        <div className="location">
          <h2>{cityInfo?.name}, {cityInfo?.country}</h2>
          <img src={`${countryFlagsUrl}/${cityInfo?.country}/shiny/64.png`} alt=""/>
        </div>
        <h4 style={{textTransform: 'capitalize'}}>
          <span>Timezone:</span> {cityInfo?.country}
        </h4>
        <h4 style={{textTransform: 'capitalize'}}>
          <span>Weather:</span> {weatherInfo}
        </h4>
        <h4><span>Wind Speed:</span> {wind.speed} km/h</h4>
        <h4><span>Humidity:</span> {currentTemp?.humidity}%</h4>
        <h4><span>Date:</span> {time}</h4>
      </div>
    </div>
  );
}

export default Weather;