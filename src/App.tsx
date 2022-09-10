import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
// import './App.css';
import './styles/style.scss';
import Header from './components/header/Header';
import Weather from './components/weather/Weather';
import { getWeather } from './services/weatherService';
import { City, CurrentWeather } from './models/weather.model';
import Forecast from './components/forecast/forecast';

function App() {
  const [isSearching, setIssearching] = useState<boolean>(true);
  const [currentWeather, setCurrentWeather] = useState<CurrentWeather |  null>(null);
  const [forecast, setForecast] = useState<CurrentWeather[]>([]);
  const [cityInfo, setCityInfo] = useState<City |  null>(null);
  const [transformedWeatherData, setTransformedWeatherData] = useState<any>({});
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [searchStatus, setSearchStatus] = useState<boolean>(false);
  const [isCelcius, setIsCelcius] = useState<boolean>(false);

  const onSearchQueryChange = (e: any) => {
    const input = e.target.value.toLowerCase().trimStart();
    setSearchQuery(input);
  };


  useEffect(() => {
    setIssearching(false);
  }, []);

  const fetchWeather = async () => {
    const data =  await getWeather('sydney');
    setCurrentWeather(data.list[0]);
    setForecast(data.list);
    setCityInfo(data.city);
  }

  
  useEffect(() => {
      fetchWeather();
  }, []);

  

  const searchCityWeather = async () => {
    // try {
    //   const weather = await fetchForecast(searchQuery);

    //   this.setCurrentWeather(weather);
    // } catch (e) {
    //   this.setState({ 
    //     searchStatus: 'Location not found',
    //     isSearching: false 
    //   });
    // }
  };
  
  const onSearchWeather = () => {
    if (searchQuery.length !== 0 && !isSearching) {
      setIssearching(true);
      searchCityWeather();
    }
  };

  const onKeyEnter = (e:any) => {
    if(e.keyCode === 13) {
      onSearchWeather();
    }
  }

  const onToggleFahrenheit = () => {
    setIsCelcius(!isCelcius);
  };


  return (
    <div className="App">
         <Header
              isSearching={isSearching}
              onChange={onSearchQueryChange}
              onKeyDown={onKeyEnter}
              onSearchWeather={onSearchWeather}
              searchQuery={searchQuery}
          />
           <div className="app-content">
              {(!isSearching && currentWeather && cityInfo) && (
                <React.Fragment>
                  <Weather 
                      onToggle={onToggleFahrenheit}
                      weather={currentWeather} 
                      cityInfo={cityInfo} 
                  />
                  {forecast.length !== 0 && (
                    <Forecast 
                        forecast={forecast} 
                    />
                  )}
                </React.Fragment>
              )}
          </div>
          {/* <Weather /> */}
    </div>
  );
}

export default App;
