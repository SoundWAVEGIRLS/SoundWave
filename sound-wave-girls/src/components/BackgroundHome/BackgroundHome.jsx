import React from 'react';
import './BackgroundHome.css'
import ellipseCorner from '../../assets/ellipse-corner.svg';


function BackgroundHome(props) {

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