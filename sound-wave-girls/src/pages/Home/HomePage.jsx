import React from 'react'
import BackgroundHome from '../../components/BackgroundHome/BackgroundHome'
import GirlMain from '../../components/GirlMain/GirlMain'
import TitleInfoHome from '../../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'
import NavBar from '../../components/NavBar/NavBar'
import ButomJoinNow from '../../components/ButomJoinNow/ButomJoinNow'

function HomePage() {
  return (
    <div className='homePage'>
          <BackgroundHome>
          <GirlMain />
          </BackgroundHome>
          <NavBar />
          <ButomJoinNow />
          <TitleInfoHome />
    </div>
  )
}

export default HomePage
