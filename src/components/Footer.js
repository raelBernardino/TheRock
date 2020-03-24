import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

import '../styles/footer.scss'

export default () => {
  return (
    <div className="footer">
      <div className="footer-socials-container">
        <FontAwesomeIcon className="footer-icon" icon={faInstagram} color="white" size="md"/>
        <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} color="white" size="md"/>
      </div>
      <span className="footer-text">OUR STORY</span>
      <span className="footer-text">OUR COFFEE</span>
      <span className="footer-text">EVENTS & PROGRAMS</span>
      <span className="footer-text">MEET THE TEAM</span>
    </div>
  )
}