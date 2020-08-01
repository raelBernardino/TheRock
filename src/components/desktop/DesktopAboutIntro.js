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
