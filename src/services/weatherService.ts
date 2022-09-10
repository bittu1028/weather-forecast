
const MAPBOX_BASE = 'https://api.mapbox.com/geocoding/v5/mapbox.places/';
const WEATHER_BASE = 'https://api.openweathermap.org/data/2.5/weather?q=Sydney&appid=450a9d622a56bff861d328ffbea10a4b&exclude=minutely,hourly,alerts&units=metric';



export const getGeocode = async (location:string) => {
    const URL = `${MAPBOX_BASE}${location}.json?types=place&access_token=${process.env.REACT_APP_MAP_TOKEN}`;
  
    const geocodeList = await fetch(URL)
      .then(data => data.json())
      .then(result => result.features);
  
    // The coordinates of the feature’s center in the form [longitude,latitude]
    const coordinates = geocodeList[0].center;
    // The ternary operator prevents return of placeName in non-Latin letters (places with Japanese letters for example)
    const placeName = geocodeList[0].matching_text ? geocodeList[0].matching_text : geocodeList[0].text;
  
    const state = geocodeList[0].context[0].text;
    const country = geocodeList[0].context[1].text;
    return { coordinates, placeName, state, country };
}

export const getWeather = async (location:string) => {
   
  
    const URL = WEATHER_BASE
  
    const weatherResult = await fetch(URL).then(data => data.json()).then(result => result);
  
    const currentTemp = weatherResult.current.temp;
    const todayWeather = weatherResult.daily[0];
    const weatherMain = todayWeather.weather[0].main;
    const tempMax = todayWeather.temp.max;
    const tempMin = todayWeather.temp.min;
  
    return [{ currentTemp, weatherMain, tempMax, tempMin }];
  }