import React from 'react'
import { Button, ButtonHover } from '../pages/index'
import '../styles/about.scss'

export default () => {
  return (
    <div className="about-component">
        <div className="about-component-image"/>
      <div className="about-component-container">
        <h1 className="about-header">WHO WE ARE</h1>
        <span className="about-text">The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).</span>
        <Button>
          MORE INFO
          <ButtonHover className="about-button__hover" />
        </Button>
      </div>
    </div>
  )
}