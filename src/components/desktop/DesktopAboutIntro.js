import React from 'react'
import styled from 'styled-components'

import {
  ContentContainer,
  ContentContainerRow,
  HeaderLandingTextBigTwoNavy,
  BasicText,
} from '../styled'
import zumbagroup from '../../assets/zumbagroup.jpg'

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
                <AboutContentImageSmall url={e.thumbnail} />
                <ContentContainer>
                  <AboutBigHeaderTextThree> {e.name}</AboutBigHeaderTextThree>
                  <AboutEventText>{e.time}</AboutEventText>
                  <AboutBasicText>{e.description}</AboutBasicText>
                </ContentContainer>
              </AboutContentContainerRow>
            </AboutContentContainer>
          ))
        }
        <HeaderLandingTextBigTwoNavy>RENT OUR SPACE</HeaderLandingTextBigTwoNavy>
        <BasicText>
          From zumba classes, to board meetings, to churches! The ROCK community space can accomodate your group's needs. Our mirrored wall is perfect for dance classes, while our mounted projector makes group presentations and movie screenings a cinch. If you are interested, please contact Stephen Kia for pricing at stephen@therockcommunity.org.
        </BasicText>
      </ContentContainer>
    </ContentContainer>
  )
}
