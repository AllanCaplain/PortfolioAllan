import React from 'react'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>Allan Caplain</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
        <a href="https://www.facebook.com/allan.caplain"><FaFacebookF className='footer_social-icon'/></a>
        <a href="#"><FiInstagram className='footer_social-icon'/></a>
        <a href="https://www.facebook.com/allan.caplain"><IoLogoTwitter className='footer_social-icon'/></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; Allan Caplain. All rights reserved. </small>
      </div>
    </footer>
  )
}

export default Footer