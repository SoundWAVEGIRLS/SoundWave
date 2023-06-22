import React from 'react'
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome'
import GirlMain from '../../components/GirlMain/GirlMain'
import TitleInfoHome from '../../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import ButomJoinNow from '../../components/ButomJoinNow/ButomJoinNow'
import Logo from '../../components/Logo/Logo'

function HomePage() {
  return (
    <div className='homePage'>
        < Logo />
          <BackgroundHome>
          <GirlMain />
          </BackgroundHome>
          <NavBar />
          <TitleInfoHome />
          <ButomJoinNow />
    </div>
  )
}

export default HomePage


