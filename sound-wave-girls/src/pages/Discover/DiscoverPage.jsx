import React from 'react'
import './DiscoverPage.css'
import ButtonMainDiscover from '../../components/ButtonMainDiscover/ButtonMainDiscover'
import DiscoverImage from '../../components/DiscoverImage/DiscoverImage'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'
function DiscoverPage() {
  return (
    <div className='discoverPage'> 
     <NavBar />
      <ButtonMainDiscover>
      <div className='discoverImageContainer'>
      <DiscoverImage />
      </div>
      </ButtonMainDiscover>
     
  
    <Footer />
    </div>
  )
}

export default DiscoverPage
