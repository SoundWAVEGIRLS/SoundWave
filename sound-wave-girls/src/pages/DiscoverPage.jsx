import React from 'react'
import './DiscoverPage.css'
import Footer from '../components/Footer/Footer'
import ButtonMainDiscover from '../components/ButtonMainDiscover/ButtonMainDiscover'
import DiscoverImage from '../components/DiscoverImage/DiscoverImage'
import {Link} from "react-router-dom"

function DiscoverPage() {
  return (
    <div className='discoverPage'> 
     <Link to="/" className='ruta'> Ir a Home </Link>
    <ButtonMainDiscover>
      <div className='discoverImageContainer'>
      <DiscoverImage />
      </div>
    </ ButtonMainDiscover>
    <Footer />
    </div>
  )
}

export default DiscoverPage