import React from 'react'
import styled from 'styled-components'

import landingImage from '../assets/rockcoffee2.jpg'
import coffeeImage from '../assets/rockcoffee1.jpg'
import {
  ComponentContainer,
  CenteredFilledImage,
  LeftAlignBasicOverlay,
  BasicOverlay,
  HeaderLandingTextBigOne,
  HeaderLandingTextBigTwoNavy,
  HeaderLandingTextBigThree,
  LightLandingTextBigFour,
  ContentContainer,
  BasicText,
  AnchorButton,
  TransparentAnchorButton,
} from './styled'

const LandingPageHeaderContainer = styled.div`
  text-align: center;
  font-family: 'Roboto Condensed';
`
const LandingPageImage = styled.div`
  width: 100%;
  height: 200px;
  border: solid black .5px;
  margin: 25px 0 0 0;
`

const LandingPageCoffee = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url("${coffeeImage}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  padding: 25px;
`

export default () => {
  return (
    <ComponentContainer>
      <CenteredFilledImage style={{ backgroundImage: `url(${landingImage})` }}>
        <BasicOverlay>
          <LandingPageHeaderContainer>
            <HeaderLandingTextBigOne>THE ROCK</HeaderLandingTextBigOne>
            <HeaderLandingTextBigThree>COMMUNITY CENTER</HeaderLandingTextBigThree>
            <LightLandingTextBigFour>A place of hope & faithfulness</LightLandingTextBigFour>
          </LandingPageHeaderContainer>
        </BasicOverlay>
      </CenteredFilledImage>
      <ContentContainer>
        <HeaderLandingTextBigTwoNavy>WHO WE ARE</HeaderLandingTextBigTwoNavy>
        <LandingPageImage />
        <BasicText>
          The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
        </BasicText>
        <AnchorButton>MORE INFO</AnchorButton>
      </ContentContainer>
      <LandingPageCoffee>
        <LeftAlignBasicOverlay>
          <LightLandingTextBigFour>
            CONNECTING THE COMMUNITY
            <br></br>
            THROUGH COFFEE
            </LightLandingTextBigFour>
          <TransparentAnchorButton>OUR COFFEE</TransparentAnchorButton>
        </LeftAlignBasicOverlay>
      </LandingPageCoffee>
    </ComponentContainer>
  )
}