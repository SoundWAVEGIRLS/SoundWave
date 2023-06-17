import React from 'react';
import girlHomePage from '../../assets/landing-page-girl.png';
import './GirlBackground.css';

function GirlBackground() {
  return (
    <div>
      <img src={girlHomePage} alt="Girl Home Page" className='girlBackground' />
    </div>
  );
}

export default GirlBackground;
