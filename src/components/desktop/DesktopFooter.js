import React from 'react'
import styled from 'styled-components'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'

import { Newsletter } from '../index'
import {
  ContentContainer,
  ContentContainerRow,
  HeaderLandingTextBigFour,
  BasicText
} from '../styled'

const HeaderLandingTextBigFourYellow = styled(HeaderLandingTextBigFour)`
  color: #FFF6CC;
`

const FooterBasicTextWhite = styled(BasicText)`
  color: white;
  line-height: 27px;
  margin: 5px 0 5px 0;
`
const FooterSocialsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const FooterContentContainerRow = styled(ContentContainerRow)`
  @media screen and (min-width: 1000px) {
    padding: 0;
  }
`

export default ({
  FooterIconAnchor,
  FooterContainerColumn,
  FooterAnchor,
}) => {
  return (
    <ContentContainer>
      <ContentContainer>
        <Newsletter />
      </ContentContainer>
      <FooterContentContainerRow>
        <ContentContainer>
          <HeaderLandingTextBigFourYellow>LOCATION & CONTACT</HeaderLandingTextBigFourYellow>
          <FooterBasicTextWhite>COMMUNITY CENTER: 1597 Yosemite Drive, Los Angeles, CA 90041</FooterBasicTextWhite>
          <FooterBasicTextWhite>COFFEE/MAILING: 4808 Townsend Ave, Los Angeles, CA 90041</FooterBasicTextWhite>
          <FooterBasicTextWhite>PHONE: (323) 257-6102</FooterBasicTextWhite>
        </ContentContainer>
        <ContentContainer>
          <HeaderLandingTextBigFourYellow>SOCIALS</HeaderLandingTextBigFourYellow>
          <FooterSocialsContainer>
            <FooterIconAnchor href="https://www.instagram.com/rock_coffee_house/">
              <FontAwesomeIcon size="sm" icon={faInstagram} />
            </FooterIconAnchor>
            <FooterIconAnchor href="https://www.instagram.com/rock_coffee_house/">
              <FontAwesomeIcon size="sm" icon={faFacebook} />
            </FooterIconAnchor>
          </FooterSocialsContainer>
          <HeaderLandingTextBigFourYellow>HOURS OF OPERATION</HeaderLandingTextBigFourYellow>
          <FooterBasicTextWhite>Weekdays 7AM - 7PM</FooterBasicTextWhite>
          <FooterBasicTextWhite>Sat 7AM - 7PM</FooterBasicTextWhite>
          <FooterBasicTextWhite>Sun 12PM - 4PM</FooterBasicTextWhite>
        </ContentContainer>
        <ContentContainer>
          <HeaderLandingTextBigFourYellow>NAVIGATION</HeaderLandingTextBigFourYellow>
          <FooterContainerColumn>
            <Link to="/" className="footer-anchor">
              <FooterAnchor>HOME</FooterAnchor>
            </Link>
            <Link to="/about" className="footer-anchor">
              <FooterAnchor>
                OUR STORY
              </FooterAnchor>
            </Link>
            <Link to="/coffeehouse" className="footer-anchor">
              <FooterAnchor>
                COFFEE HOUSE
              </FooterAnchor>
            </Link>
            <Link to="/mlkjrday" className="footer-anchor">
              <FooterAnchor>
                MLK JR DAY OF SERVICE
              </FooterAnchor>
            </Link>
          </FooterContainerColumn>
        </ContentContainer>
      </FooterContentContainerRow>
    </ContentContainer>
  )
}