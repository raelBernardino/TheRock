import React from 'react'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import {
  ContentContainer,
  ContentContainerRow,
  HeaderLandingTextBigTwoNavy,
  BasicText,
  BasicContentImage,
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

const Text = ({ children }) => <p className="event-text">{children}</p>
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

export default ({
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
          events.map((e, i) => {
            const { eventTitle, eventDate, eventThumbnail, eventDescription } = e.node
            return (
              <AboutContentContainer>
                <AboutContentContainerRow>
                  <AboutContentImageSmall url={eventThumbnail.fluid.src} />
                  <ContentContainer>
                    <AboutBigHeaderTextThree> {eventTitle}</AboutBigHeaderTextThree>
                    <AboutEventText>{eventDate}</AboutEventText>
                    {documentToReactComponents(eventDescription.json, options)}
                  </ContentContainer>
                </AboutContentContainerRow>
              </AboutContentContainer>
            )
          })
        }
        <BasicContentImage url={zumbagroup} />
        <HeaderLandingTextBigTwoNavy>RENT OUR SPACE</HeaderLandingTextBigTwoNavy>
        <BasicText>
          From zumba classes, to board meetings, to churches! The ROCK community space can accomodate your group's needs. Our mirrored wall is perfect for dance classes, while our mounted projector makes group presentations and movie screenings a cinch. If you are interested, please contact Stephen Kia for pricing at stephen@therockcommunity.org.
        </BasicText>
      </ContentContainer>
    </ContentContainer>
  )
}
