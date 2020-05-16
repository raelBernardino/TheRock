import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

const InlineNavContainer = styled.div`
`
const InlineNavLink = styled.a`
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  margin-right: 25px;
  line-height: 20px;
  @media screen and (min-width: 750px) {
    font-size: 15px;
    line-height: 25px;
  }
`

export default () => {
  return (
    <InlineNavContainer>
      <Link to="/" className="no-style-link" activeClassName="no-style-link__active">
        <InlineNavLink>HOME</InlineNavLink>
      </Link>
      <Link to="/about" className="no-style-link" activeClassName="no-style-link__active">
        <InlineNavLink>OUR STORY</InlineNavLink>
      </Link>
      <Link to="/coffeehouse" className="no-style-link" activeClassName="no-style-link__active">
        <InlineNavLink>COFFEE HOUSE</InlineNavLink>
      </Link>
      <Link to="/mlkjrday" className="no-style-link" activeClassName="no-style-link__active">
        <InlineNavLink>MLK JR DAY</InlineNavLink>
      </Link>
    </InlineNavContainer>
  )
}