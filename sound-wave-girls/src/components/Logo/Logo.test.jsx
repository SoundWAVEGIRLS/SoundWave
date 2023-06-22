import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Logo from './Logo';
import '@testing-library/jest-dom/extend-expect';

describe('Component Logo', () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <Logo />
      </MemoryRouter>
    );
  });

  test('should render the Logo with alt text "This is the soundwave company logo"', () => {
    const imgElement = screen.getByAltText('This is the soundwave company logo');
    expect(imgElement).toBeInTheDocument();
  });

  test('should have the correct alt text for the image', () => {
    const imgElement = screen.getByRole('img', { className: 'imgLogo' });
    expect(imgElement).toHaveAttribute('alt', 'This is the soundwave company logo');
  });
});