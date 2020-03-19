import React from "react"
import styled from 'styled-components'

import '../styles/main.scss'
import '../styles/nav.scss'
import { Nav, NavScreen, Landing, About, Coffee } from '../components'

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`
export const Button = styled.div`
  width: 128px;
  height: 45px;
  background: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: .5px solid black;
  outline: none;
  font-family: 'Roboto';
  font-weight: 300;
  font-size: 12px;
  cursor: pointer;
  &:hover,
  &:active {
    .about-button__hover {
      transition: ease-in .5s;
      transform: translate(0px, 0px);
      cursor: pointer;
      outline: none;
    }
  }
`

export const ButtonHover = styled(Button)`
  background-color: #FFF6CC;
  position: absolute;
  transform: translate(7px, 7px);
  transition: .5s;
  border: none;
  z-index: -1;
`

export const ButtonBlue = styled(Button)`
  border: .5px solid white;
  color: white;
`

export const ButtonHoverBlue = styled(ButtonHover)`
  background-color: #A2C9DB;
`

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
      <Landing />
      <About />
      <Coffee />
    </Container>
  )
}
