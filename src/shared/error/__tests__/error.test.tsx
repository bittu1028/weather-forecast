// __tests__/error.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Error } from '../Error';


const resetErrorBoundary = jest.fn();

describe('Error', () => {
  test('display search box with empty value', async () => {
    render(<Error error={{name:'Some Error', message:'Some Error Description'}} resetErrorBoundary={resetErrorBoundary} />);
    const text = screen.getByText('Some Error Description');
    expect(text).toBeInTheDocument();
    expect(screen.getByText(/Try again/i).closest('button')).toBeInTheDocument();
  });
});
