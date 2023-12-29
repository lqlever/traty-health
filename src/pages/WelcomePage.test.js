import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders WelcomePage component', () => {
  render(<WelcomePage />);

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
  expect(screen.getByText(/Learn More/i)).toBeInTheDocument();
  expect(screen.getByText(/Welcome to Bank of Trayt/i)).toBeInTheDocument();
  expect(screen.getByText(/Initiate a new Direct Deposit to earn 5% for 36 Months!/i)).toBeInTheDocument();

   // Check if the "Learn More" button has the correct href
   const calculateButton = screen.getByRole('link', { name: 'Learn More' });
   expect(calculateButton).toHaveAttribute('href', '/deposit');
});
