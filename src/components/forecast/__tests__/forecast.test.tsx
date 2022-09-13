// __tests__/searchBox.test.js
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { mockForecastData } from '../../../test/mockData'
import Forecast from '../Forecast'

describe('Forecast', () => {
  test('renders current forecast component', async () => {
    const { asFragment } = render(<Forecast forecast={mockForecastData} />)
    expect(asFragment).toMatchSnapshot()
  })

  test('does not render first  item', async () => {
    render(<Forecast forecast={mockForecastData} />)
    const text = screen.queryByText('20.94')
    expect(text).not.toBeInTheDocument()
  })
})
