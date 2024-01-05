import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationAppBar from './NavigationAppBar';

test('renders navigation app bar with correct content', () => {
  render(<NavigationAppBar />);

  // Assert on the presence of the app bar title
  const appBarTitle = screen.getByText(/Bank of Trayt/i);
  expect(appBarTitle).toBeInTheDocument();

  // Assert on the presence of top navigation items
  const signInButton = screen.getByText(/Sign In/i);
  expect(signInButton).toBeInTheDocument();

  const enEspanolButton = screen.getByText(/En Español/i);
  expect(enEspanolButton).toBeInTheDocument();

  const locationsButton = screen.getByText(/Locations/i);
  expect(locationsButton).toBeInTheDocument();

  const contactUsButton = screen.getByText(/Contact Us/i);
  expect(contactUsButton).toBeInTheDocument();

  const helpButton = screen.getByText(/Help/i);
  expect(helpButton).toBeInTheDocument();

  // Open the drawer
  fireEvent.click(screen.getByLabelText(/menu/i));

  // Assert on the presence of side navigation items in the opened drawer
  const personalButton = screen.getByText(/Personal/i);
  expect(personalButton).toBeInTheDocument();

  const smallBusinessButton = screen.getByText(/Small Business/i);
  expect(smallBusinessButton).toBeInTheDocument();

  const wealthManagementButton = screen.getByText(/Wealth Management/i);
  expect(wealthManagementButton).toBeInTheDocument();

  const businessAndInstitutionsButton = screen.getByText(/Business & Institutions/i);
  expect(businessAndInstitutionsButton).toBeInTheDocument();

  const aboutUsButton = screen.getByText(/About Us/i);
  expect(aboutUsButton).toBeInTheDocument();
});
