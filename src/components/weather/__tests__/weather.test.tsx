// __tests__/weather.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../Weather';
import { currentWeatherData, mockCityData } from '../../../test/mockData';

describe('Current Weather', () => {
  test('renders current temperature component', async () => {
    const { asFragment } = render(
      <Weather weather={currentWeatherData} cityInfo={mockCityData} />
    );
    expect(asFragment).toMatchSnapshot();
  });

  test('City name and country code should be present', async () => {
    render(
      <Weather weather={currentWeatherData} cityInfo={mockCityData} />
    );
    const text = screen.getByText('Sydney, AU');
    expect(text).toBeInTheDocument();
  });

});
