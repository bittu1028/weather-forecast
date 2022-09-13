import React, { useCallback, useEffect, useState } from 'react';
import Header from '../../components/header/Header';
import Weather from '../../components/weather/Weather';
import Forecast from '../../components/forecast/Forecast';
import Loader from '../../shared/loader/Loader';
import { ErrorBoundary } from 'react-error-boundary';
import { Error, ErrorHandler } from '../../shared/error/Error';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../redux/store';
import { fetchWeather } from '../../redux/fetchWeather';
import { NotFoundError } from '../../shared/error/NotFound';
import { StyledContent } from './StyledHomePage';
import Units from '../../components/units/Units';

const currentCity = 'Sydney'

const HomePage = () => {
  const dispatch = useDispatch<AppDispatch>();
  // state for search query
  const [searchQuery, setSearchQuery] = useState<string>('');
  // to toggle format of temperature
  const [unit, setUnit] = useState<string>('metric');
  // reducers data
  const { currentWeather, forecast, isLoading, cityInfo, isError, errorMessage } = useSelector(
    (state: RootState) => state.weather
  );

  const onSearchQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value.toLowerCase().trimStart();
    setSearchQuery(input);
  };

  const getWeatherData = useCallback(async (location: string, currentUnit:string = unit) => {
    // dispatching action to fetch data from open weather
    dispatch(fetchWeather({location, currentUnit}));
  }, []);

  useEffect(() => {
    // defaulting value to sydney
    // future enhanncements to use current location
    getWeatherData(currentCity);
  }, []);

  const onSearchWeather = () => {
    if (searchQuery.length !== 0 && !isLoading) {
      getWeatherData(searchQuery);
    }
  };

  // call api if user press enter key on search box
  const onKeyEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.keyCode === 13) {
      onSearchWeather();
    }
  };
  
  const changeUnitSettings = (currentUnit:string) => {
    setUnit(currentUnit);
    getWeatherData(searchQuery || currentCity, currentUnit);
  };

  return (
    <>
      <ErrorBoundary FallbackComponent={Error} onError={ErrorHandler}>
        {isLoading && <Loader />}
        <Header
          isSearching={isLoading}
          onChange={onSearchQueryChange}
          onKeyDown={onKeyEnter}
          onSearchWeather={onSearchWeather}
          searchQuery={searchQuery}
        />
        <StyledContent>
          <Units 
              changeUnitSettings={changeUnitSettings}
              unit={unit}
          />
          {isError ? <NotFoundError errorMessage={errorMessage} /> : null}
          {!isLoading && currentWeather && cityInfo && !isError && (
            <React.Fragment>
              <Weather weather={currentWeather} cityInfo={cityInfo} />
              {forecast.length !== 0 && <Forecast forecast={forecast} />}
            </React.Fragment>
          )}
        </StyledContent>
      </ErrorBoundary>
    </>
  );
}

export default HomePage;
