import React from 'react'
import twitter from '../../assets/twitter.svg';
import facebook from '../../assets/facebook.svg';
import './Footer.css'
import {Link} from "react-router-dom"

function Footer() {
  return (
    <div className='footerContainer'>
        <div>
            <span className='textFooter'>About Us</span>
            <span className='textFooter'>Contact</span>
        </div>
        <div className='socialNetworks'>
        <img src={twitter} alt="logo twitter" className='logoTwitter' />
        <Link to="https://twitter.com" className='textFooter' target="_blank">Twitter</Link>
        <img src={facebook} alt="logo facebook" className='logoFacebook' />
        <Link to="https://es-es.facebook.com/" className='textFooter' target="_blank">Facebook</Link>
        </div>
    </div>
  )
}

export default Footer