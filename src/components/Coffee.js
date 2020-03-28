import React from 'react'
import { Link } from 'gatsby'

import '../styles/coffee.scss'
import { ButtonBlue, ButtonHoverBlue } from '../pages'

export default () => {
  return (
    <div className="coffee-component">
      <div className="coffee-overlay" />
      <div className="coffee-component-container">
        <h1 className="coffee-component-header">CONNECTING THE COMMUNITY</h1>
        <h1 className="coffee-component-header">THROUGH COFFEE</h1>
        <Link className="button-nav"
        to="/coffee/">
          <ButtonBlue>
            OUR COFFEE
        </ButtonBlue>
        </Link>
      </div>
    </div>
  )
}