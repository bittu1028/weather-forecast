// __tests__/searchBox.test.js
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import SearchInput from '../SearchBox';

const onChange = jest.fn();
const onSubmit = jest.fn();

describe('SearchBox', () => {
  test('display search box with empty value', async () => {
    render(<SearchInput searchQuery='' onChange={onChange} onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText('Search for city');
    expect(input).toHaveValue('');
  });

  test('onChange method to be called when something is changed on textbox', async () => {
    render(<SearchInput onChange={onChange} onSubmit={onSubmit} />);
    const input = screen.getByPlaceholderText('Search for city');
    fireEvent.change(input, { target: { value: '123' } });
    expect(input).toHaveValue('123');
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('onSubmit method to be called when submit button is clicked', async () => {
    render(<SearchInput onChange={onChange} onSubmit={onSubmit} />);
    fireEvent.click(
      screen.getByRole('button', {
        name: /submit/i,
      })
    );
    expect(onSubmit).toHaveBeenCalledTimes(1);
  });
});
