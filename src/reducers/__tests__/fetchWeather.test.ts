import { transformWeatherData } from '../fetchWeather';
import { mockCombinedRawData } from '../../test/mockApiData';
import { mockTransformedCityInfo, mockTransFormedForecast, mockTransFormedCurrentWeather } from '../../test/mockTransformedApiData';


describe('Weather Service', () => {
    test('should transformed the data to desired format', () => {
       const data = transformWeatherData(mockCombinedRawData);
       expect(data.cityInfo).toEqual(mockTransformedCityInfo);
       expect(data.forecast).toEqual(mockTransFormedForecast);
       expect(data.weather).toEqual(mockTransFormedCurrentWeather);
    })
})

