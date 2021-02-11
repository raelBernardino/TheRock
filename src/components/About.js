import React from 'react'
import styled from 'styled-components'

import rockAbout from '../assets/aboutLanding.jpg'
import {
  ComponentContainer,
  CenteredPartiallyFilledImage,
  BasicOverlay,
  HeaderLandingTextBigOne,
  LightLandingTextBigFour,
  ContentContainer,
  HeaderLandingTextBigTwoNavy,
  // HeaderLandingTextBigThreeNavy,
  BasicText,
  // BasicContentImage
} from './styled'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 50px;
  justify-content: flex-end;
  @media screen and (min-width: 750px) {
    padding-bottom: 100px;
  }
  `
// const AboutContentImage = styled(BasicContentImage)`
// margin: 0;
// height: 250px;
// margin-bottom: 40px;
// `

export default () => {

  return (
    <ComponentContainer>
      <CenteredPartiallyFilledImage style={{ backgroundImage: `url(${rockAbout})` }}>
        <TextBottomOverlay>
          <HeaderLandingTextBigOne>THE ROCK</HeaderLandingTextBigOne>
          <LightLandingTextBigFour>COMMUNITY CENTER</LightLandingTextBigFour>
        </TextBottomOverlay>
      </CenteredPartiallyFilledImage>
      <ContentContainer>
        <HeaderLandingTextBigTwoNavy>R.O.C.K.</HeaderLandingTextBigTwoNavy>
        <BasicText>
          is an acronym that stands for Reach Our Community Kids. We are a faith-based organization that started as an afterschool program here in Eagle Rock in 1996 and incorporated as a 501(c)(3) non-profit in 1998. We have operated out of our current location at the corner of Yosemite Drive and Townsend Avenue since September 2001. In early 2007 we undertook a remodel of the existing rec room and classroom in our building, and we added a health code compliant coffee shop in order to transform the space into a multi-purpose community center while still maintaining the afterschool program throughout the school year from 3-6pm weekdays.
        </BasicText>
        {/* <AboutContentImage /> */}
      </ContentContainer>
    </ComponentContainer>
  )
}