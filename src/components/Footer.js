import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import css from '../styles/Footer.css'
function Footer() {
  return (
    <div className='footer'>
        <div className='socialMedia'>
            <FacebookIcon/>
            <InstagramIcon/>
            <TwitterIcon/>
        </div>    
        <p className='footer-text'>
            All rights were reserved. | Burger Yiyelim
        </p>
    </div>
  )
}

export default Footer