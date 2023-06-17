import React from 'react';
import './BackgroundHome.css'
import ellipseCorner from '../../assets/ellipse-corner.svg';
// import { useLocation } from 'react-router-dom';


function BackgroundHome(props) {
    // const location = useLocation();
    // const backgroundImage = location.pathname === '/other' ? 'background2.svg' : 'background1.svg';

  return (
    <div className="backgroundHome" >
       <div className="circleRed"></div>
       <div className="circleBlue"></div>
       <img src={ellipseCorner} alt="ellipse corner" className='ellipseCorner'/>
       {props.children}
    </div>
  );
}

export default BackgroundHome;