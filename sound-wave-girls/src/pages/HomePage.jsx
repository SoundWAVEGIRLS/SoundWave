import React from 'react'
import BackgroundHome from '../components/BackgroundHome/BackgroundHome'
import GirlMain from '../components/GirlMain/GirlMain'
import TitleInfoHome from '../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'
import {Link} from "react-router-dom"
import NavBar from '../components/NavBar/NavBar'

function HomePage() {
  return (
    <div className='homePage'>
        <BackgroundHome>
          <GirlMain />
        </BackgroundHome>
      <NavBar />
          <TitleInfoHome />
    </div>
  )
}

export default HomePage
{/* <Link to="/discover" className='ruta'> Ir a Discover </Link> */}
