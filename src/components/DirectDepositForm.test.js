import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import DirectDepositForm from './DirectDepositForm'; // Replace with the correct import path

test('renders DirectDepositForm component', async () => {
  render(<DirectDepositForm />);

  // Check if the form elements are rendered
  const accountNumberInput = screen.getByLabelText(/account number/i);
  const routingNumberInput = screen.getByLabelText(/routing number/i);
  const amountInput = screen.getByLabelText(/amount/i);
  const frequencySelect = screen.getByTestId(/simple-select/i);
  const submitButton = screen.getByRole('link', { name: /submit/i });

  expect(accountNumberInput).toBeInTheDocument();
  expect(routingNumberInput).toBeInTheDocument();
  expect(amountInput).toBeInTheDocument();
  expect(frequencySelect).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();

  // Simulate user input and check if the form state is updated
  fireEvent.change(accountNumberInput, { target: { value: '12345678' } });
  fireEvent.change(routingNumberInput, { target: { value: '123456789' } });
  fireEvent.change(amountInput, { target: { value: '100.50' } });
  fireEvent.change(frequencySelect, { target: { value: '1' } });

  expect(accountNumberInput.value).toBe('12345678');
  expect(routingNumberInput.value).toBe('123456789');
  expect(amountInput.value).toBe('100.50');
  expect(frequencySelect.value).toBe('1');

  // Simulate form submission
  fireEvent.click(submitButton);

});
