import React from 'react';
import girlHomePage from '../../assets/landing-page-girl.png';
import './GirlMain.css';

function GirlMain() {
  return (
    <div>
      <img src={girlHomePage} alt="Girl Home Page" className='girlBackground' />
    </div>
  );
}

export default GirlMain;