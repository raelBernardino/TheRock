import React from 'react'
import styled from 'styled-components'

import {
  ContentContainer,
  ContentContainerRow,
  HeaderLandingTextBigTwoNavy,
  BasicText,
} from '../styled'

const AboutContentContainer = styled(ContentContainer)`
  @media screen and (min-width: 1050px) {
    padding: 0;
  }
  `

const AboutContentContainerRow = styled(ContentContainerRow)`
  @media screen and (min-width: 1000px) {
    padding: 40px 0 40px 0;
    align-items: center;
  }
`

export default ({
  AboutContentImage,
  AboutContentImageSmall,
  AboutBigHeaderTextThree,
  AboutEventText,
  AboutBasicText,
  events
}) => {
  return (
    <ContentContainer>
      <AboutContentContainerRow>
        <ContentContainer>
          <HeaderLandingTextBigTwoNavy>R.O.C.K.</HeaderLandingTextBigTwoNavy>
          <BasicText>
            is an acronym that stands for Reach Our Community Kids. We are a faith-based organization that started as an afterschool program here in Eagle Rock in 1996 and incorporated as a 501(c)(3) non-profit in 1998. We have operated out of our current location at the corner of Yosemite Drive and Townsend Avenue since September 2001. In early 2007 we undertook a remodel of the existing rec room and classroom in our building, and we added a health code compliant coffee shop in order to transform the space into a multi-purpose community center while still maintaining the afterschool program throughout the school year from 3-6pm weekdays.
          </BasicText>
        </ContentContainer>
        <AboutContentImage />
      </AboutContentContainerRow>
      <ContentContainer>
        <AboutBigHeaderTextThree>EVENTS & PROGRAMS</AboutBigHeaderTextThree>
        {
          events.map((e, i) => (
            <AboutContentContainer>
              <AboutContentContainerRow>
              <AboutContentImageSmall />
                <ContentContainer>
                  <AboutBigHeaderTextThree> {e.name}</AboutBigHeaderTextThree>
                  <AboutEventText>{e.time}</AboutEventText>
                  <AboutBasicText>{e.description}</AboutBasicText>
                </ContentContainer>
              </AboutContentContainerRow>
            </AboutContentContainer>
          ))
        }
      </ContentContainer>
    </ContentContainer>
  )
}
