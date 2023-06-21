import { beforeEach, expect } from "vitest"
import {render, screen,fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import Form from "./Form"

describe('Component Form', () => {

    test('Form submission', () => {
        beforeEach(() => {
          render(<Form />);
        });
      
        expect(screen.getByRole('button', { name: 'Join Now' })).toBeDefined();
      });
  
      test('submit_todos_los_campos', () => {
        render(<Contact />);
    
        const nameInput = screen.getByLabelText("Name:");
        const emailInput = screen.getByLabelText("Email:");
        const messageInput = screen.getByLabelText("Message:");
        const sendButton = screen.getByRole("button", {name: "Send"});
    
        fireEvent.change(nameInput, {target: {value: "Lorena Romero"}});
        fireEvent.change(emailInput, {target: {value: "l.r.@hola.com"}});
        fireEvent.change(messageInput, {target: {value: "Hola, estoy interesada en comprar los auriculares."}});
        fireEvent.click(sendButton);
    
        expect(screen.getByText("Gracias por tu mensaje")).toBeInTheDocument();
    
    })


  });