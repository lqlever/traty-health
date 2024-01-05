import React from 'react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import WelcomePage from './WelcomePage';

test('renders welcome page with correct content', () => {
  render(<WelcomePage />);

  // Assert on the presence of the welcome message
  const welcomeMessage = screen.getByText(/Welcome to the Bank of Trayt/i);
  expect(welcomeMessage).toBeInTheDocument();

  // Assert on the presence of the additional message
  const additionalMessage = screen.getByText(/Initiate a new Direct Deposit to earn 5% for 36 Months!/i);
  expect(additionalMessage).toBeInTheDocument();

  // Assert on the presence of the "Learn More" button
  const learnMoreButton = screen.getByRole('link', { name: /Learn More/i });
  expect(learnMoreButton).toBeInTheDocument();

  // Assert on the correct URL when the button is clicked
  expect(learnMoreButton.getAttribute('href')).toBe('/direct-deposit');
});
