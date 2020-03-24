import React from 'react'
import '../styles/landing.scss'

export default () => {
  return (
    <div className="landing">
      <div className="landing-overlay" />
      <div className="landing-content-container">
        <div className="landing-logo"/>
        <h1 className="landing-header">THE ROCK</h1>
        <h1 className="landing-header__smaller">COMMUNITY CENTER</h1>
        <span className="landing-text">A place of hope & faithfulness.</span>
        {/* <span className="landing-text__smaller">1597 Yosemite Drive, Los Angeles, CA 90041</span> */}
      </div>
    </div>
  )
}