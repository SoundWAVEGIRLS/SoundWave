import React from 'react'
import buttonCharts from '../../assets/charts-button.svg';
import buttonAlbums from '../../assets/albums-button.svg';
import buttonMore from '../../assets/more-button.svg';
import './ButtonMainDiscover.css'

function ButtonMainDiscover() {
  return (
    <div className='buttonMainDiscover'>
        <h2 className='titleMainDiscover'>Discover new music</h2>
        <div className='buttonsChartsAlbumsMore'>
            <img src={buttonCharts} alt="Button of charts" />
            <img src={buttonAlbums} alt="Button of albums" />
            <img src={buttonMore} alt="Button of more" />
        </div>
        <h4 className='infoMainDiscover'>By joining you can benefit by listening to the lastet albums released</h4>
    </div>
  )
}

export default ButtonMainDiscover