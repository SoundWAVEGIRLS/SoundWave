import React from 'react'
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import './Footer.css'

function Footer() {
  return (
    <div className='footerContainer'>
        <div>
            <span className='textFooter'>About Us</span>
            <span className='textFooter'>Contact</span>
        </div>
        <div className='socialNetworks'>
        <img src={twitter} alt="logo twitter" className='logoTwitter' />
        <span className='textFooter'>Twitter</span>
        <img src={facebook} alt="logo facebook" className='logoFacebook' />
        <span className='textFooter'>Facebook</span>
        </div>
    </div>
  )
}

export default Footer