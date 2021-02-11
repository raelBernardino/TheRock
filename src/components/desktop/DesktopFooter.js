import React from 'react'
import styled from 'styled-components'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'gatsby'
import Iframe from 'react-iframe'

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
        {/* <Newsletter /> */}
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.6277940304!2d-118.20120794898871!3d34.13326200710051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c3e3ea820f61%3A0x923120f959e088c2!2sROCK%20Coffee%20House!5e0!3m2!1sen!2sus!4v1596320814595!5m2!1sen!2sus"
          width="100%"
          height="350"
          frameborder="0"
          style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0" />
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
            <Link to="/" className="footer-anchor">HOME</Link>
            <Link to="/about" className="footer-anchor">OUR STORY</Link>
            <Link to="/coffeehouse" className="footer-anchor">COFFEE HOUSE</Link>
            <Link to="/communitycenter" className="footer-anchor">MLK JR DAY OF SERVICE</Link>
          </FooterContainerColumn>
        </ContentContainer>
      </FooterContentContainerRow>
    </ContentContainer>
  )
}