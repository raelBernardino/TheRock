import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import '../styles/nav.scss'
import logo from '../assets/rocklogo.png'

const NavContainer = styled.div`
  width: 100%;
  height: 75px;
  background-color: white;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  z-index: 3;
  box-shadow: 0 3px 3px rgba(0,0,0,.1);
`

export default ({
  toggleNav,
  navIsOpen
}) => {

  return (
    <NavContainer>
      <Link style={{width: "20%"}} to="/#landing">
        <img src={logo} className="nav" alt="" />
      </Link>
      <FontAwesomeIcon
        className="nav-button"
        icon={faBars}
        color="#042033"
        onClick={toggleNav}
      />
    </NavContainer>
  )
}