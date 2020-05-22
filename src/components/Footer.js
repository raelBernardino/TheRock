import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'

import { useWindowSize } from './hooks'
import { Newsletter } from '../components'
import {
  ComponentContainer,
  ContentContainer,
  BasicText,
} from './styled'
import { DesktopFooter } from './desktop'

const FooterComponentContainer = styled(ComponentContainer)`
  background-color: #042033;
`

const FooterContainer = styled.div`
  width: 100%;
  font-family: 'Roboto Condensed';
  margin: 10px 0 10px 0;
`

const FooterHeader = styled.h1`
  font-size: 15px;
  color: #FFF6CC;
  font-weight: 300;
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 1000px) {
    font-size: 25px
  }
`

const FooterIconContainer = styled.div`
  display: flex;
`

const FooterIconAnchor = styled.a`
  color: #FFF6CC;
  opacity: .5;
  transition: .3s;
  margin-right: 20px;
  width: 0;
  &:hover {
    opacity: 1;
    transition: .3s;
  }
  @media screen and (min-width: 1000px) {
    font-size: 30px;
    margin-right: 35px;
  }
`

const FooterAnchor = styled.a`
  color: #FFF6CC;
  font-size: 13px;
  text-decoration: underline;
  font-weight: 300;
  margin: 5px 0 5px 0;
  @media screen and (min-width: 750px) {
    font-size: 15px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px
  }
`

const FooterBasicTextWhite = styled(BasicText)`
  color: white;
  margin: 5px 0 5px 0;
  @media screen and (min-width: 750px) {
    font-size: 17px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px
  }
`

const FooterContainerFlex = styled(FooterContainer)`
  display: flex;
`

const FooterContainerColumn = styled(FooterContainer)`
  display: flex;
  flex-direction: column;
`

const FooterTrademarkContainer = styled.div`
  width: 100%;
  padding: 20px;
  box-sizing: border-box;
  font-family: 'Roboto Condensed';
  background-color: #031624;
`

export default () => {
  const size = useWindowSize()
  return (
    <FooterComponentContainer>
      {
        size.width < 1000 ?
          <ContentContainer>
            <FooterContainer>
              <FooterHeader>SOCIALS</FooterHeader>
              <FooterIconContainer>
                <FooterIconAnchor href="https://www.instagram.com/rock_coffee_house/">
                  <FontAwesomeIcon icon={faInstagram} />
                </FooterIconAnchor>
                <FooterIconAnchor href="https://www.facebook.com/therockcommunity">
                  <FontAwesomeIcon icon={faFacebook} />
                </FooterIconAnchor>
              </FooterIconContainer>
            </FooterContainer>
            <FooterContainer>
              <FooterHeader>LOCATION & CONTACT</FooterHeader>
              <FooterBasicTextWhite>COMMUNITY CENTER: 1597 Yosemite Drive, Los Angeles, CA 90041</FooterBasicTextWhite>
              <FooterBasicTextWhite><br></br>COFFEE/MAILING: 4808 Townsend Ave, Los Angeles, CA 90041</FooterBasicTextWhite>
              <FooterBasicTextWhite><br></br>PHONE: (323) 257-6102</FooterBasicTextWhite>
            </FooterContainer>
            <FooterContainerFlex>
              <FooterContainerColumn>
                <Link to="/" className="footer-anchor">HOME</Link>
                <Link to="/about" className="footer-anchor">OUR STORY</Link>
                <Link to="/coffeehouse" className="footer-anchor">COFFEE HOUSE</Link>
                <Link to="/mlkjrday" className="footer-anchor">MLK JR DAY OF SERVICE</Link>
                {/* <FooterAnchor>GALLERY</FooterAnchor> */}
              </FooterContainerColumn>
              <FooterContainerColumn>
                <FooterHeader>HOURS OF OPERATION</FooterHeader>
                <FooterBasicTextWhite>Weekdays 7AM - 7PM</FooterBasicTextWhite>
                <FooterBasicTextWhite>Sat 7AM - 7PM</FooterBasicTextWhite>
                <FooterBasicTextWhite>Sun 12PM - 4PM</FooterBasicTextWhite>
              </FooterContainerColumn>
            </FooterContainerFlex>
            <Newsletter />
          </ContentContainer>
          :
          <DesktopFooter
            FooterIconAnchor={FooterIconAnchor}
            FooterContainerColumn={FooterContainerColumn}
            FooterAnchor={FooterAnchor}
          />
      }
      <FooterTrademarkContainer>
        <FooterBasicTextWhite>
          THE ROCK COMMUNITY CENTER ®
        </FooterBasicTextWhite>
      </FooterTrademarkContainer>
    </FooterComponentContainer>
  )
}