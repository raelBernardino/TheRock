import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'gatsby'
import Iframe from 'react-iframe'

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
  padding: 15px;
  box-sizing: border-box;
  font-family: 'Roboto Condensed';
  background-color: #031624;
`

export default () => {
  const size = useWindowSize()
  const [windowSizeCheck, setWindowSizeCheck] = React.useState(false)

  React.useEffect(() => {
    (size.width < 1000) ? setWindowSizeCheck(true) : setWindowSizeCheck(false)
  }, [size.width])

  return (
    <FooterComponentContainer>
      {
        windowSizeCheck ?
          <ContentContainer>
            {/* <Newsletter /> */}
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d825.6277940304!2d-118.20120794898871!3d34.13326200710051!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c3e3ea820f61%3A0x923120f959e088c2!2sROCK%20Coffee%20House!5e0!3m2!1sen!2sus!4v1596320814595!5m2!1sen!2sus"
              width="100%"
              height="250"
              frameborder="0"
              style="border:0;"
              allowfullscreen=""
              aria-hidden="false"
              tabindex="0" />
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
            {/* <Newsletter /> */}
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