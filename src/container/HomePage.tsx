import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
// import './App.css';
import Header from "../components/header/Header";
import Weather from "../components/weather/Weather";
import { getWeather } from "../services/weatherService";
import { City, CurrentWeather } from "../models/weather.model";
import Forecast from "../components/forecast/Forecast";
import Loader from "../shared/loader/Loader";

function HomePage() {
  const [isSearching, setIssearching] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather | null>(
    null
  );
  const [forecast, setForecast] = useState<CurrentWeather[]>([]);
  const [cityInfo, setCityInfo] = useState<City | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [isCelcius, setIsCelcius] = useState<boolean>(false);

  const onSearchQueryChange = (e: any) => {
    const input = e.target.value.toLowerCase().trimStart();
    setSearchQuery(input);
  };

  useEffect(() => {
    setIssearching(false);
  }, []);

  const fetchWeather = async (location: string) => {
    try {
      const data = await getWeather(location);
      setCurrentWeather(data.list[0]);
      setForecast(data.list);
      setCityInfo(data.city);
      setIssearching(false);
    } catch (e) {
      setIssearching(false);
    }
  };

  useEffect(() => {
    fetchWeather("Sydney");
  }, []);

  const onSearchWeather = () => {
    if (searchQuery.length !== 0 && !isSearching) {
      setIssearching(true);
      fetchWeather(searchQuery);
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
        {isSearching && <Loader />}
        <Header
          isSearching={isSearching}
          onChange={onSearchQueryChange}
          onKeyDown={onKeyEnter}
          onSearchWeather={onSearchWeather}
          searchQuery={searchQuery}
        />
        <div className="app-content">
          {!isSearching && currentWeather && cityInfo && (
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
        {/* <Weather /> */}
    </>
  );
}

export default HomePage;
