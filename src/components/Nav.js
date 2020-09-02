import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from './hooks'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../styles/nav.scss'
import logo from '../assets/rocklogo.png'
import rcc from '../assets/rcclogo.png'
import { NavInline } from './index'

const NavContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  box-shadow: 0 3px 3px rgba(0,0,0,.1);
  @media screen and (min-width: 1000px) {
    height: 75px;
  }
`
const LogosContainer = styled.div`
  display: flex;
  align-items: center;
`

export default ({ toggleNav }) => {
  const size = useWindowSize()

  return (
    <NavContainer>
      <LogosContainer>
        <Link className="nav-rcclogo-anchor" to="/">
          <img src={logo} className="nav" alt="" />
        </Link>
        <Link className="nav-logo-anchor" to="/">
          <img src={rcc} className="nav" alt="" />
        </Link>
      </LogosContainer>
      {
        size.width < 1000 ?
          <FontAwesomeIcon
            className="nav-button"
            icon={faBars}
            color="#042033"
            onClick={toggleNav}
          />
          : <NavInline />
      }
    </NavContainer>
  )
}