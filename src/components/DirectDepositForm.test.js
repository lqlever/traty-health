import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { DirectDepositForm, StoreProvider } from './DirectDepositForm';

describe('DirectDepositForm', () => {
  test('renders without errors', () => {
    render(
      <StoreProvider>
        <DirectDepositForm />
      </StoreProvider>
    );

    const formElement = screen.getByTestId('direct-deposit-form');
    expect(formElement).toBeInTheDocument();
  });

  test('submits the form with valid data', () => {

    render(
      <StoreProvider>
        <DirectDepositForm />
      </StoreProvider>
    );

    fireEvent.change(screen.getByLabelText(/Account Number/i), {
      target: { value: '12345678' },
    });

    fireEvent.change(screen.getByLabelText(/Routing Number/i), {
      target: { value: '123456789' },
    });

    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: '100.50' },
    });

    const frequencySelect = screen.getByTestId('simple-select-input');
    fireEvent.change(frequencySelect, { target: { value: '1' } });

    fireEvent.click(screen.getByRole('link', { name: /Submit/i }));

  });

  test('displays validation errors for invalid data', () => {
    render(
      <StoreProvider>
        <DirectDepositForm />
      </StoreProvider>
    );

    // Trigger validation errors
    fireEvent.change(screen.getByLabelText(/Account Number/i), {
      target: { value: 'invalid' },
    });

    fireEvent.change(screen.getByLabelText(/Routing Number/i), {
      target: { value: 'invalid' },
    });

    fireEvent.change(screen.getByLabelText(/Amount/i), {
      target: { value: 'invalid' },
    });

    // Expect validation error messages to be displayed
    expect(screen.getByText(/Account Numbers must be 8 -17 numbers/i)).toBeInTheDocument();
    expect(
      screen.getByText(/Routing Numbers must be 9 numbers with valid first two digits/i)
    ).toBeInTheDocument();
    expect(screen.getByText(/Invalid Amount format/i)).toBeInTheDocument();
  });
});
