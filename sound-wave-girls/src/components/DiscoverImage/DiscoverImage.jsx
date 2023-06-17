import React from 'react'
import imagePageDiscover from '../../assets/covers.jpg';
import './DiscoverImage.css'

function DiscoverImage() {
  return (
    <div className='containerImgPageDiscover'>
        <img src={imagePageDiscover} alt="image of the discover page is divided into 4 parts and shows the cover of different albums" className='imgPageDiscover' /> 
    </div>
  )
}

export default DiscoverImage