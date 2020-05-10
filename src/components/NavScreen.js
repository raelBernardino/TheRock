import React from 'react'
import { Link } from 'gatsby'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import '../styles/nav.scss'

export default ({ navIsOpen, toggleNav }) => {
  return (
    <div
      className="nav-screen"
      style={{ transform: `${navIsOpen ? "translateX(0%)" : "translateX(100%)"}` }}>
      <FontAwesomeIcon
        className="nav-button__exit"
        icon={faTimes}
        color="white"
        onClick={toggleNav}
      />
      <div className="nav-menu">
        <Link
          className="nav-menu-link"
          activeClassName="nav-menu-link__active"
          to="/">
          HOME
        </Link>
        <Link
          className="nav-menu-link"
          activeClassName="nav-menu-link__active"
          to="/about">
          OUR STORY
        </Link>
        <Link
          className="nav-menu-link"
          activeClassName="nav-menu-link__active"
          to="/coffeehouse">
          COFFEE HOUSE
        </Link>
        <Link
          className="nav-menu-link"
          activeClassName="nav-menu-link__active"
          to="/mlkjrday">
          MLK JR DAY OF SERVICE
        </Link>
      </div>
    </div>
  )
}