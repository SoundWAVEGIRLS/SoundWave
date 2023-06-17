import React from 'react'
import BackgroundHome from '../components/BackgroundHome/BackgroundHome'
import GirlBackground from '../components/girlBackground/girlBackground'
import TitleInfoHome from '../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePage'>

        <BackgroundHome>
          <GirlBackground />
        </BackgroundHome>
          <TitleInfoHome />

    </div>
  )
}

export default HomePage