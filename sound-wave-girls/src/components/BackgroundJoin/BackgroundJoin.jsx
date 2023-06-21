import React from 'react'
import './BackgroundJoin.css'
import ellipsered from '../../assets/redEllipse-join.svg';
import ellipseblue from '../../assets/blueEllipse-join.svg';

function BackgroundJoin(props) {
  return (
    <div className="backgroundJoin" >
       <img src={ellipsered} alt="ellipse color red page of join" className='ellipsered'/>
       <img src={ellipseblue} alt="ellipse color blue page of join" className='ellipseblue'/>
       {props.children}
    </div>
  )
}

export default BackgroundJoin