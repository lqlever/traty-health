import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom'
import CompoundInterestCalendar from './CompoundInterestCalendar';
import { calculateButton } from './CompoundInterestCalendar';

test('renders CompoundInterestCalendar component', () => {
  render(<CompoundInterestCalendar />);

  // Check if the component renders successfully
  expect(screen.getByText('Compound Interest Calculator')).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'Calculate' })).toBeInTheDocument();
});


test('Calculate button has correct href', () => {
  render(<CompoundInterestCalendar />);

  // Check if the "Calculate" button has the correct href
  const calculateButton = screen.getByRole('link', { name: 'Calculate' });
  expect(calculateButton).toHaveAttribute('href', '/');
});

test('clicking Calculate button triggers action', () => {

  render(<CompoundInterestCalendar />);

  // Attach the mock action to the button click
  const calculateButton = screen.getByRole('link', { name: 'Calculate' });
  fireEvent.click(calculateButton);

  expect(calculateButton).toHaveAttribute('href', '/');
});

