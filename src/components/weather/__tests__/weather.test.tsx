// __tests__/searchBox.test.js
import React from 'react';
import {
  render, screen,
} from '@testing-library/react';
import '@testing-library/jest-dom';
import Weather from '../Weather';
import { currentWeatherData, mockCityData } from '../../../test/mockData';

const onToggleFahrenheit = jest.fn();


describe('Current Weather', () => {
    test('renders current temperature component', async () => {
        const { asFragment } = render(<Weather  
            onToggle={onToggleFahrenheit}
            weather={currentWeatherData}
            cityInfo={mockCityData}
        />);
        expect(asFragment).toMatchSnapshot();
    });

  test('City name and country code should be present', async () => {
    render(<Weather  
        onToggle={onToggleFahrenheit}
        weather={currentWeatherData}
        cityInfo={mockCityData}
    />);
    const text = screen.getByText('Sydney, AU');
    expect(text).toBeInTheDocument();
  });

  // test('Expect forecast to render for 5 days', async () => {
  //   render(<Weather  
  //       onToggle={onToggleFahrenheit}
  //       weather={currentWeatherData}
  //       cityInfo={mockCityData}
  //   />);
  //   const list = screen.getAllByRole('card-list-item');
  //   console.log(list);
  //   expect(list.length).toEqual(4);
  // });
  
});
