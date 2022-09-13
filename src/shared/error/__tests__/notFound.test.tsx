// __tests__/notFound.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { NotFoundError } from '../NotFound';


describe('NotFound', () => {
  test('expect error to be in the document', async () => {
    render(<NotFoundError errorMessage='Not Found' />);
    const text = screen.getByText('Not Found');
    expect(text).toBeInTheDocument();
  });
});
