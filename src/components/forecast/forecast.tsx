import React from 'react';
import { weatherbitIcons } from '../../helpers/icons';
import { CurrentWeather } from '../../models/weather.model';

interface IForeCast {
    forecast: CurrentWeather[];
    isCelcius?: boolean;
}

const Forecast = ({ forecast, isCelcius=true } : IForeCast) => {
  const day:any = {
    0: 'SUN',
    1: 'MON',
    2: 'TUE',
    3: 'WED',
    4: 'THU',
    5: 'FRI',
    6: 'SAT'
  };

  return (
    <div className="forecast">
      {forecast.map((data:CurrentWeather, index: number) => {
        const dayCode = new Date(data.time).getDay();
        return index !== 0 && (
          <div 
              className="forecast__item"
              key={data.ts}
          >
            {/* <i className={`wi ${weatherbitIcons[data.weather.icon]}`}></i> */}
            <h5 className="forecast-date">{day[dayCode]}</h5>
            <h2 className="forecast-temp">
              {isCelcius ? data.currentTemp.temp : Math.round((data.currentTemp.temp * (9 / 5)) + 32)}<span>°</span>
            </h2>
          </div>
        );
      })}
    </div>
  );
};

export default Forecast;