import React from 'react';
import { render, screen } from '@testing-library/react';
import GirlMain from './GirlMain'
import { test } from 'vitest';
import { toHaveAttribute } from '@testing-library/jest-dom/matchers';
expect.extend({ toHaveAttribute }); 

describe('Component GirlMain', ()=>{

    beforeEach(()=>{
        render(<GirlMain />)
    })

    test('should render the image with alt text "Girl Home Page"', () => {
        const imgElement = screen.getByAltText('Girl Home Page');
        expect(imgElement).not.toBeNull();
      });

      test('should have the correct alt text for the image', () => {
        const imgElement = screen.getByRole('img', { className: 'girl-image' });
        expect(imgElement).toHaveAttribute('alt', 'Girl Home Page');
      });

})