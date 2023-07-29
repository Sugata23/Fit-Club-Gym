import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png'
import linkedIn from '../../assets/linkedin.png'
import instagram from '../../assets/instagram.png'
import logo from '../../assets/logo.png'

const Footer = () => {
  return (
    <div className="footer-container">
        {/* <p>&copy; 2019 - All rights reserved.</p> */}
        <hr />
        <div className="footer">
            <div className="social">
                <img src={Github} alt="" />
                <img src={linkedIn} alt="" />
                <img src={instagram} alt="" />
            </div>
            <div className='logo-f'>
                <img src={logo} alt="" />
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
    </div>
  )
}

export default Footer