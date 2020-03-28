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
      <Newsletter />
      <Footer />
    </Container>
  )
}