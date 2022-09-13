import weatherReducer from '../weatherReducer';
import { fetchWeather } from '../fetchWeather';
import { mockCombinedRawData } from '../../test/mockApiData';
import {
  mockTransFormedCurrentWeather,
  mockTransFormedForecast,
  mockTransformedCityInfo,
} from '../../test/mockTransformedApiData';

describe('weatherReducer', () => {
  const initialState = {
    currentWeather: null,
    forecast: [],
    cityInfo: null,
    errorMessage: '',
    isError: false,
    isLoading: false,
  };

  test('should return the initial state', () => {
    expect(weatherReducer(undefined, { type: undefined })).toEqual({
      currentWeather: null,
      forecast: [],
      cityInfo: null,
      errorMessage: '',
      isError: false,
      isLoading: false,
    });
  });

  test('sets isLoading true when fetchweather is pending', () => {
    const outputState = {
      currentWeather: null,
      forecast: [],
      cityInfo: null,
      errorMessage: '',
      isError: false,
      isLoading: true,
    };
    const action = { type: fetchWeather.pending.type };
    const state = weatherReducer(initialState, action);
    expect(state).toEqual(outputState);
  });

  test('sets isLoading false when fetchweather is rejected and sets error message', () => {
    const outputState = {
      currentWeather: null,
      forecast: [],
      cityInfo: null,
      errorMessage: 'some error',
      isError: true,
      isLoading: false,
    };
    const action = { type: fetchWeather.rejected.type, payload: 'some error' };
    const state = weatherReducer(initialState, action);
    expect(state).toEqual(outputState);
  });

  test('sets the currentWeather, forecast, cityInfo and list when fetchweather is fulfilled', () => {
    jest.useFakeTimers();
    jest.setSystemTime(new Date('2022/09/14'));
    const outputState = {
      currentWeather: mockTransFormedCurrentWeather,
      forecast: mockTransFormedForecast,
      cityInfo: mockTransformedCityInfo,
      errorMessage: '',
      isError: false,
      isLoading: false,
    };
    const action = {
      type: fetchWeather.fulfilled.type,
      payload: mockCombinedRawData,
    };
    const state = weatherReducer(initialState, action);
    expect(state).toEqual(outputState);
  });
});
