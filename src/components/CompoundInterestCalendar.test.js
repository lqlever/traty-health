import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import CompoundInterestCalendar from './CompoundInterestCalendar';

// Mocking the external dependencies
jest.mock('@mui/x-date-pickers/LocalizationProvider', () => ({
  LocalizationProvider: ({ children }) => <div>{children}</div>,
}));

jest.mock('@mui/x-date-pickers/AdapterDayjs', () => ({
  AdapterDayjs: () => <div>AdapterDayjs</div>,
}));

jest.mock('@mui/x-date-pickers/DateCalendar', () => ({
  DateCalendar: () => <div>DateCalendar</div>,
}));

// Mocking the DirectDepositForm component
jest.mock('./DirectDepositForm', () => ({
  StoreProvider: ({ children }) => <div>{children}</div>,
  DirectDepositForm: () => <div>DirectDepositForm</div>,
}));

test('renders CompoundInterestCalendar component', () => {
  render(<CompoundInterestCalendar />);

  // Check if the form elements are rendered
  const dateCalendar = screen.getByText(/DateCalendar/i);
  const calculateButton = screen.getByRole('link', { name: /Calculate/i });

  expect(dateCalendar).toBeInTheDocument();
  expect(calculateButton).toBeInTheDocument();

  // Simulate user action (clicking the Calculate button)
  fireEvent.click(calculateButton);

  // Check if the DirectDepositForm is rendered after clicking the Calculate button
  // const directDepositForm = screen.getByText(/DirectDepositForm/i);
  // expect(directDepositForm).toBeInTheDocument();
});
