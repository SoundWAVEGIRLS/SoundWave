import { beforeEach, expect } from "vitest"
import {render, screen,fireEvent } from '@testing-library/react'
import { BrowserRouter as Router } from 'react-router-dom';
import { MemoryRouter } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import NavBar from "./NavBar"

describe('Component NavBar', () => {
    beforeEach(()=>{
        render(
            <MemoryRouter>
              <NavBar />
            </MemoryRouter>
          );
        })

    test('should print left text', () => {
      expect(screen.getByText('Discover')).toBeDefined();
    });
  
    test('should print right text', () => {
      expect(screen.getByText('Join')).toBeDefined();
    });

    test('check click event', () => {
        const history = createMemoryHistory();
        render(
          <Router history={history}>
            <NavBar />
          </Router>
        );
      
        const linkDiscover = screen.queryAllByText('Discover');
        expect(linkDiscover.length).toBeGreaterThan(0);
      
        fireEvent.click(linkDiscover[0]);
    
        expect(history.location.pathname).toBe('/');
      });

      test('check click event', () => {
        const history = createMemoryHistory();
        render(
          <Router history={history}>
            <NavBar />
          </Router>
        );
      
        const linkDiscover = screen.queryAllByText('Join');
        expect(linkDiscover.length).toBeGreaterThan(0);
      
        fireEvent.click(linkDiscover[0]);
    
        expect(history.location.pathname).toBe('/');
      });

  });