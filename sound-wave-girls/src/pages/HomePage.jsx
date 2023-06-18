import React from 'react'
import BackgroundHome from '../components/BackgroundHome/BackgroundHome'
import GirlMain from '../components/GirlMain/GirlMain'
import TitleInfoHome from '../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div className='homePage'>
        <BackgroundHome>
          <GirlMain />
        </BackgroundHome>
          <Link to="/discover" className='ruta'> Ir a Discover </Link>
          <TitleInfoHome />
    </div>
  )
}

export default HomePage