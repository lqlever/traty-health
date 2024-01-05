import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DirectDepositPage from './DirectDepositPage';

// Mocking the DirectDepositForm component
jest.mock('../components/DirectDepositForm', () => ({
  __esModule: true,
  DirectDepositForm: () => <div>MockedDirectDepositForm</div>,
}));

test('renders DirectDepositPage component', () => {
  render(<DirectDepositPage />);

  // Check if the heading is rendered
  const heading = screen.getByText(/New Direct Deposit Enrollment/i);
  expect(heading).toBeInTheDocument();

  // Check if the DirectDepositForm component is rendered
  const directDepositForm = screen.getByText(/MockedDirectDepositForm/i);
  expect(directDepositForm).toBeInTheDocument();
});
