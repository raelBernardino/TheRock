import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

import { Newsletter } from '../components'
import {
  ComponentContainer,
  ContentContainer,
  BasicText,
} from './styled'

const FooterComponentContainer = styled(ComponentContainer)`
  background-color: #042033;
`

const FooterContainer = styled.div`
  width: 100%;
  font-family: 'Roboto Condensed';
  margin: 20px 0 20px 0;
`

const FooterHeader = styled.h1`
  font-size: 15px;
  color: #FFF6CC;
  font-weight: 300;
  display: flex;
  flex-direction: column;
`

const FooterIconContainer = styled.div`
  display: flex;
`

const FooterIconAnchor = styled.a`
  color: #FFF6CC;
  opacity: .5;
  transition: .3s;
  margin-right: 15px;
  &:hover {
    opacity: 1;
    transition: .3s;
  }
`

const FooterAnchor = styled.a`
  color: #FFF6CC;
  font-size: 13px;
  text-decoration: underline;
  font-weight: 300;
  margin: 5px 0 5px 0;
`

const FooterBasicTextWhite = styled(BasicText)`
  color: white;
  margin: 5px 0 5px 0;
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
  return (
    <FooterComponentContainer>
      <ContentContainer>
        <FooterContainer>
          <FooterHeader>SOCIALS</FooterHeader>
          <FooterIconContainer>
            <FooterIconAnchor>
              <FontAwesomeIcon icon={faInstagram} />
            </FooterIconAnchor>
            <FooterIconAnchor>
              <FontAwesomeIcon icon={faFacebook} />
            </FooterIconAnchor>
          </FooterIconContainer>
        </FooterContainer>
        <FooterContainer>
          <FooterHeader>LOCATION</FooterHeader>
          <FooterBasicTextWhite>COMMUNITY CENTER: 1597 Yosemite Drive, Los Angeles, CA 90041</FooterBasicTextWhite>
          <FooterBasicTextWhite><br></br>COFFEE/MAILING: 4808 Townsend Ave, Los Angeles, CA 90041</FooterBasicTextWhite>
        </FooterContainer>
        <FooterContainerFlex>
          <FooterContainerColumn>
            <FooterAnchor>HOME</FooterAnchor>
            <FooterAnchor>OUR STORY</FooterAnchor>
            <FooterAnchor>COFFEE HOUSE</FooterAnchor>
            <FooterAnchor>MLK JR DAY OF SERVICE</FooterAnchor>
            <FooterAnchor>GALLERY</FooterAnchor>
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
      <FooterTrademarkContainer>
        <FooterBasicTextWhite>
          THE ROCK COMMUNITY CENTER ®
        </FooterBasicTextWhite>
      </FooterTrademarkContainer>
    </FooterComponentContainer>
  )
}