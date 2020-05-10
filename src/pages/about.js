import React from "react"

import '../styles/main.scss'
import '../styles/nav.scss'
import {
  Nav,
  NavScreen,
  About,
  Footer,
} from '../components'
import { Container } from '../components/styled'

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
      <About/>
      <Footer/>
    </Container>
  )
}
