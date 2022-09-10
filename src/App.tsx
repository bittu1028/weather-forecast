import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header';
import Weather from './components/weather/Weather';


function App() {

  const changeLocationHandler = (location: string) => {
    setCurrentLocationName(location);
  };
  
  const onSearchWeather = (location: string) => {
    // setCurrentLocationName(location);
  };
  
  const [currentLocationName, setCurrentLocationName] = useState<string>("");

  return (
    <div className="App">
         <Header
            title="testing"  
            onSearchWeather={onSearchWeather}
            onChangeCountry={changeLocationHandler}
          />
          <Weather />
    </div>
  );
}

export default App;
