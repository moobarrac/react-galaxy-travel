import React from 'react'
import '../styles/Footer.css'
import { FaFacebook, FaLinkedin, FaMailBulk, FaPhone, FaSearchLocation, FaTwitter } from 'react-icons/fa'

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaSearchLocation size={20} style={{color: "#FFC107", marginRight: '2rem'}}/>
            <div>
              <p>123 Moobarrac St.</p>
              <h4>Earth, S.S</h4>
            </div>
          </div>
          <div className="phone">
            <h4><FaPhone size={20} style={{marginRight: '2rem'}}/>(+234) 816 1690112</h4>
          </div>
          <div className="email">
            <h4><FaMailBulk size={20} style={{marginRight: '2rem'}}/>trips@galaxy.com</h4>
          </div>
        </div>
        <div className="right">
          <h4>About the company</h4>
            <p>"Lorem ipsum dolor sit amet, consectetur
            adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna
            aliqua. Ut enim ad minim veniam"</p>
            <div className='social'>
              <FaFacebook size={30} style={{marginRight: '1rem'}} />
              <FaTwitter size={30} style={{marginRight: '1rem' }} />
              <FaLinkedin size={30} style={{marginRight: '1rem' }} />
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
