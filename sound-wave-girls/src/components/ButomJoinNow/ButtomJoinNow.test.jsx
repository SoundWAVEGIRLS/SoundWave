import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ButomJoinNow from './ButomJoinNow';
import { expect } from 'chai';

test('renders Join Now button with correct link', () => {
  render(
    <Router>
      <ButomJoinNow />
    </Router>
  );

  const joinNowButton = screen.getByRole('link', { name: 'Join Now' });
  expect(joinNowButton.getAttribute('href')).to.equal('/join');
});