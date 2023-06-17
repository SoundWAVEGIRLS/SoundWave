import React from 'react'
import BackgroundHome from '../components/BackgroundHome/BackgroundHome'
import GirlMain from '../components/GirlMain/GirlMain'
import TitleInfoHome from '../components/TitleInfoHome/TitleInfoHome'
import './HomePage.css'

function HomePage() {
  return (
    <div className='homePage'>

        <BackgroundHome>
          <GirlMain />
        </BackgroundHome>
         
          <TitleInfoHome />
         

    </div>
  )
}

export default HomePage