import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import DirectDepositPage from './DirectDepositPage';

test('renders DirectDepositPage component', () => {
  render(<DirectDepositPage />);

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

  // Check if DirectDepositForm is rendered
  expect(screen.getByTestId('direct-deposit-form')).toBeInTheDocument();
});
