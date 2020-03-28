import React from 'react'
import styled from 'styled-components'

import '../styles/coffee/coffeepage.scss'
import { Nav, NavScreen, CoffeeContent, Newsletter, Footer } from '../components'
import { Container } from './index'

export default () => {
  const [navIsOpen, setNavIsOpen] = React.useState(false)
  const toggleNav = () => {
    const navStatus = navIsOpen
    setNavIsOpen(!navStatus)
  }

  return (
    <Container style={{ overflow: `${navIsOpen ? "hidden" : ""}` }}>
      <Nav navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <NavScreen navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <div className="coffee-landing-image" />
      <CoffeeContent />
      <div className="coffee-hours">
        <h1 className="coffee-hours__header">
          HOURS OF OPERATION
        </h1>
        <span>Weekdays 7AM - 7PM</span>
        <span>Sat 7AM - 7PM</span>
        <span>Sun 12PM - 4PM</span>
        <span>4808 Townsend Ave, Los Angeles, CA 90041</span>
      </div>
      <Newsletter />
      <Footer />
    </Container>
  )
}