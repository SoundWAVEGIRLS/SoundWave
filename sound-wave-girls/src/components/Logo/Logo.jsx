import React from 'react';
import foto_logo from '../../assets/logo.svg';
import './Logo.css';
import { Link } from 'react-router-dom'; 

function Logo() {
  return (
    <Link to={'/'} className='containerLogo'>
      <img className= 'imgLogo' src={foto_logo} alt="This is the soundwave company logo" />
      <span className='logo-text'>Soundwave</span>
   </Link>
  );
  }



export default Logo