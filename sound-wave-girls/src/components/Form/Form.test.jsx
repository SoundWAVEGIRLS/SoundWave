import { beforeEach, expect } from "vitest"
import {render, screen,fireEvent } from '@testing-library/react'
import Form from "./Form"

describe('Component Form', () => {
    beforeEach(() => {
      render(<Form />);
    });

    test('Form submission', () => {
        expect(screen.getByRole('button', { name: 'Join Now' })).toBeDefined();
      });
  
      test('submit_todos_los_campos', () => {
        
        const nameInput = screen.getByLabelText("Name:");
        const emailInput = screen.getByLabelText("Email:");
        const passwordInput = screen.getByLabelText("Password:");
      
        fireEvent.change(nameInput, { target: { value: "Lorena Romero" } });
        fireEvent.change(emailInput, { target: { value: "l.r.@hola.com" } });
        fireEvent.change(passwordInput, { target: { value: "123123123" } });

        expect(screen.getByText('You have successfully registered')).toBeDefined()
      });


  });