import { transformWeatherData } from '../fetchWeather';
import { mockCombinedRawData } from '../../test/mockApiData';
import {
  mockTransformedCityInfo,
  mockTransFormedForecast,
  mockTransFormedCurrentWeather,
} from '../../test/mockTransformedApiData';
jest.useFakeTimers();

describe('Weather Service', () => {
  test('should transformed the data to desired format', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022/09/13 22:11:29'));
    const data = transformWeatherData(mockCombinedRawData);
    expect(data.cityInfo).toEqual(mockTransformedCityInfo);
    expect(data.forecast).toEqual(mockTransFormedForecast);
    expect(data.weather).toEqual(mockTransFormedCurrentWeather);
  });
});
