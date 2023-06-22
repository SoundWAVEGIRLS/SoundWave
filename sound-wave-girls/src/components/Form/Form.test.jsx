import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './Form';

describe('Component Form', () => {
  beforeEach(() => {
    render(<Form />);
  });

  test('Form submission', () => {
    expect(screen.getByRole('button', { name: 'Join Now' })).toBeDefined();
  });

  test('submit elements', () => {
    const joinButton = screen.getByRole('button', { name: 'Join Now' });
    fireEvent.click(joinButton);

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
  });

  test('submit elements with valid form data', () => {
    const nameInput = screen.getByLabelText('Name:');
    const emailInput = screen.getByLabelText('Email:');
    const passwordInput = screen.getByLabelText('Password:');

    fireEvent.change(nameInput, { target: { value: 'Lorena Romero' } });
    fireEvent.change(emailInput, { target: { value: 'l.r.@hola.com' } });
    fireEvent.change(passwordInput, { target: { value: '123123123' } });

    fireEvent.click(screen.getByRole('button', { name: 'Join Now' }));

    expect(screen.getByText('You have successfully registered')).toBeTruthy();
    expect(nameInput.value).toBe('');
    expect(emailInput.value).toBe('');
    expect(passwordInput.value).toBe('');
  });

  test('hide registered message when input changes', () => {
    const nameInput = screen.getByLabelText('Name:');
    const registeredTextElements = screen.getAllByText('You have successfully registered');
    fireEvent.change(nameInput, { target: { value: 'New Name' } });
  
    expect(registeredTextElements).toHaveLength(1);
  });

});
