import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import InterestCalculatorPage from './InterestCalculatorPage';

// Mocking the CompoundInterestCalculator component
jest.mock('../components/CompoundInterestCalendar', () => ({
  __esModule: true,
  default: () => <div>CompoundInterestCalculator</div>,
}));

test('renders InterestCalculatorPage component', () => {
  render(<InterestCalculatorPage />);

  // Check if the heading is rendered
  const heading = screen.getByText(/Compound Interest Calculator/i);
  expect(heading).toBeInTheDocument();

  // Check if the CompoundInterestCalculator component is rendered
  const compoundInterestCalculator = screen.getByText(/CompoundInterestCalculator/i);
  expect(compoundInterestCalculator).toBeInTheDocument();
});
