// __tests__/HomePage.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import HomePage from '../HomePage';
import store from '../../../reducers/store';

const renderHomePage = () =>
  render(
    <Provider store={store}>
      <HomePage />
    </Provider>
  );

describe('HomePage', () => {
  test('renders current homepage component', async () => {
    renderHomePage();
    const titleInput = screen.getByPlaceholderText('Search for city');
    expect(titleInput).toBeInTheDocument();
  });
});

describe('HomePage', () => {
  test('renders current homepage component', async () => {
    const { asFragment } = renderHomePage();
    expect(asFragment).toMatchSnapshot();
  });
});
