

import React from 'react';
import foto_logo from '../assets/foto_logo.svg';
import './Logo.css';

function Logo() {
  return (
    <div>
      <img src={foto_logo} alt="esto es el logo de la empresa" />
      <span className="logo-text">Soundwave</span>
    </div>
  );
}

export default Logo;
