import React from "react";
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
} from "./StyledWeather";
import { WeatherProp } from "./Weather.types";


const Weather = ({
  onToggle,
  weather,
  isCelcius = true,
  cityInfo,
}: WeatherProp) => {
  const { currentTemp, weatherInfo, time, wind } = weather;
  return (
    <StyledWeatherContainer>
      <StyledLocation>
        <H2>
          {cityInfo?.name}, {cityInfo?.country}
        </H2>
      </StyledLocation>
      <StyledWeatherWrapper>

      <StyledTemperatureWrapper>
        <StyledImage
          src={`http://openweathermap.org/img/wn/${weather.icon}@2x.png`}
          alt="Icon"
        />
        {/* <i className={`wi ${weatherbitIcons[weatherIconCode]}`} /> */}
        <TemperatureContainer>
          <StyledHeader>
            {isCelcius ? `${currentTemp?.temp} °C` : `${currentTemp?.temp} °F`}
          </StyledHeader>
          <div
            className="temperature-toggle"
            onClick={onToggle}
            style={{
              color: isCelcius ? "rgba(255, 255, 255, .7)" : "#adff2f",
            }}
          >
            <span>{isCelcius ? "°F" : "°C"}</span>
          </div>
        </TemperatureContainer>
      </StyledTemperatureWrapper>
      <StyledTemperatureInfoContainer>
        <H4>
          <span>Timezone:</span> {cityInfo?.country}
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
      </StyledTemperatureInfoContainer>
      </StyledWeatherWrapper>

    </StyledWeatherContainer>
  );
};

export default Weather;
