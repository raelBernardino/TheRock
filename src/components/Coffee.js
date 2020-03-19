import React from 'react'
import '../styles/coffee.scss'

import { ButtonBlue, ButtonHoverBlue } from '../pages'

export default () => {
  return (
    <div className="coffee-component">
      <div className="coffee-overlay" />
      <div className="coffee-component-container">
        <h1 className="coffee-component-header">CONNECTING THE COMMUNITY</h1>
        <h1 className="coffee-component-header">THROUGH COFFEE</h1>
        <ButtonBlue>
          OUR COFFEE
          <ButtonHoverBlue className="about-button__hover" />
        </ButtonBlue>
      </div>
    </div>
  )
}