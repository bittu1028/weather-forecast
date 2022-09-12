import React, { useCallback, useEffect, useState } from "react";
import Header from "../components/header/Header";
import Weather from "../components/weather/Weather";
import Forecast from "../components/forecast/Forecast";
import Loader from "../shared/loader/Loader";
import { ErrorBoundary } from "react-error-boundary";
import { Error, ErrorHandler } from "../shared/error/Error";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../reducers/store";
import { fetchWeather } from "../reducers/fetchWeather";
import { NotFoundError } from "../shared/error/NotFound";

function HomePage() {
  const dispatch = useDispatch<AppDispatch>();
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCelcius, setIsCelcius] = useState<boolean>(false);
  const { 
    currentWeather, 
    forecast, 
    isLoading, 
    cityInfo, 
    isError,
    errorMessage 
  } =
  useSelector((state: RootState) => state.weather);

  const onSearchQueryChange = (e: any) => {
    const input = e.target.value.toLowerCase().trimStart();
    setSearchQuery(input);
  };

  const getWeatherData = useCallback(async (location: string) => {
    dispatch(fetchWeather(location));
  }, []);

  useEffect(() => {
    getWeatherData("Sydney");
  }, []);

  const onSearchWeather = () => {
    if (searchQuery.length !== 0 && !isLoading) {
      getWeatherData(searchQuery);
    }
  };

  const onKeyEnter = (e: any) => {
    if (e.keyCode === 13) {
      onSearchWeather();
    }
  };

  const onToggleFahrenheit = () => {
    setIsCelcius(!isCelcius);
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
        <div className="app-content">
          {
            isError ? <NotFoundError errorMessage={errorMessage}/> : null
          }
          {!isLoading && currentWeather && cityInfo && !isError && (
            <React.Fragment>
              <Weather
                onToggle={onToggleFahrenheit}
                weather={currentWeather}
                cityInfo={cityInfo}
              />
              {forecast.length !== 0 && <Forecast forecast={forecast} />}
            </React.Fragment>
          )}
        </div>
      </ErrorBoundary>
    </>
  );
}

export default HomePage;
