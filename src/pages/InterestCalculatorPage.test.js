import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import InterestCalculatorPage from './InterestCalculatorPage';

test('renders WelcomePageThree component', () => {
  render(<InterestCalculatorPage />);

  // Check if specific elements are present on the page
  expect(screen.getByText(/Sign In/i)).toBeInTheDocument();
  expect(screen.getByText(/En Español/i)).toBeInTheDocument();
  expect(screen.getByText(/Locations/i)).toBeInTheDocument();
  expect(screen.getByText(/Contact Us/i)).toBeInTheDocument();
  expect(screen.getByText(/Help/i)).toBeInTheDocument();
  expect(screen.getByText(/Personal/i)).toBeInTheDocument();
  expect(screen.getByText(/Small Business/i)).toBeInTheDocument();
  expect(screen.getByText(/Wealth Management/i)).toBeInTheDocument();
  expect(screen.getByText(/Business & Institutions/i)).toBeInTheDocument();
  expect(screen.getByText(/About Us/i)).toBeInTheDocument();

  // Check if CompoundInterestCalendar is rendered
  expect(screen.getByTestId('compound-interest-calendar')).toBeInTheDocument();
});
