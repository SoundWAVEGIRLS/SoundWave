import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './Footer';
import '@testing-library/jest-dom/extend-expect';

describe('Component Footer', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  });

  test('should render the About Us link', () => {
    const aboutUsLink = screen.getByText('About Us');
    expect(aboutUsLink).toBeInTheDocument();
  });

  test('should render the Contact link', () => {
    const contactLink = screen.getByText('Contact');
    expect(contactLink).toBeInTheDocument();
  });

  test('should render the Twitter link with the correct href', () => {
    const twitterLink = screen.getByText('Twitter');
    expect(twitterLink).toHaveAttribute('href', 'https://twitter.com');
  });

  test('should render the Facebook link with the correct href', () => {
    const facebookLink = screen.getByText('Facebook');
    expect(facebookLink).toHaveAttribute('href', 'https://es-es.facebook.com/');
  });
});