import React from 'react'
import styled from 'styled-components'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import { BLOCKS } from '@contentful/rich-text-types';

import {
  ComponentContainer,
  CenteredFilledImage,
  BasicOverlay,
  HeaderLandingTextBigTwo,
  LightLandingTextBigFour,
  HeaderLandingTextBigTwoNavy,
  HeaderLandingTextBigThree,
  ContentContainer,
  BasicText,
  BasicContentImage,
  // AnchorButton,
  HeaderLandingTextBigThreeNavy
} from './styled'
import { DesktopAboutIntro } from './desktop'
import { DesktopMLK } from './desktop'
import mlkimage from '../assets/mlk.jpg'
// import mlkday from '../assets/mlkday.jpg'
import rockschedule from '../assets/rockschedule.jpg'
// import aboutLanding from '../assets/aboutLanding.jpg'
import zumbagroup from '../assets/zumbagroup.jpg'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 150px;
  justify-content: flex-end;
  @media screen and (min-width: 1000px) {
    align-items: flex-start;
    padding: 0 10% 10% 150px;
  }
`

const MLKHeaderLandingTextBigTwo = styled(HeaderLandingTextBigTwo)`
  @media screen and (min-width: 1000px) {
    font-size: 100px
  }
`

const AboutContentImage = styled(BasicContentImage)`
  margin: 0;
  height: 250px;
  margin-bottom: 40px;
  `

const AboutBigHeaderTextThree = styled(HeaderLandingTextBigThreeNavy)`
  margin: 30px 0 0 0;
  @media screen and (min-width: 750px) {
    margin: 25px 0 0 0;
  }
  @media screen and (min-width: 1050px) {
    margin: 0 0 40px 0;
  }
  `

const AboutEventText = styled(BasicText)`
  color: #042033;
  margin: 0;
  `

const AboutBasicText = styled(BasicText)`
  margin: 5px 0 5px 0;
  `

const AboutContentImageSmall = styled(BasicContentImage)`
  height: 200px;
  margin-top: 5px;
  background-position: top;
  @media screen and (min-width: 750px) {
    height: 325px;
    width: 80%;
  }
  background-image: url(${p => p.url});
`

const Text = ({ children }) => <p className="event-text__mobile">{children}</p>
const options = {
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
  },
};

export default ({ windowSizeCheck, events }) => {
  return (
    <ComponentContainer>
      <CenteredFilledImage style={{ backgroundImage: `url(${mlkimage})` }}>
        <TextBottomOverlay>
          {
            windowSizeCheck ?
              <>
                <MLKHeaderLandingTextBigTwo>THE ROCK</MLKHeaderLandingTextBigTwo>
              </>
              :
              <HeaderLandingTextBigThree>THE ROCK</HeaderLandingTextBigThree>
          }
          <LightLandingTextBigFour>COMMUNITY CENTER</LightLandingTextBigFour>
        </TextBottomOverlay>
      </CenteredFilledImage>
      {
        windowSizeCheck ?
          <ContentContainer>
            <HeaderLandingTextBigTwoNavy>OUR SERVICE</HeaderLandingTextBigTwoNavy>
            <BasicText>
              The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
              Much of the programming in our community center, including our after school tutoring program, movie nights, game nights, and open mic nights. This is made possible through the attached coffee shop.This social enterprise subsidizes our mission so we can remain self-sustaining as a non-profit.
            </BasicText>
            {/* <AnchorButton>GALLERY</AnchorButton> */}
          </ContentContainer>
          : <DesktopMLK />
      }
      {
        windowSizeCheck ?
          <ContentContainer>
            <HeaderLandingTextBigTwoNavy>EVENTS & PROGRAMS</HeaderLandingTextBigTwoNavy>
            <BasicContentImage style={{ height: '325px', backgroundImage: `url(${rockschedule})` }} />
            <BasicText style={{ marginTop: "0" }}>
              Due to COVID-19, our community center events are on hold until further notice.  But you can still support the ROCK through patroning the ROCK Coffee Shop.
            </BasicText>
            {
              events.map((e, i) => {
                const { eventTitle, eventDate, eventThumbnail, eventDescription } = e.node
                return (
                  <>
                    <AboutBigHeaderTextThree style={{ margin: `${i === 0 && "5px 0 0 0"}` }}> {eventTitle}</AboutBigHeaderTextThree>
                    <AboutContentImageSmall url={eventThumbnail.fluid.src} />
                    <AboutEventText>{eventDate}</AboutEventText>
                    {documentToReactComponents(eventDescription.json, options)}
                  </>
                )
              })
            }
            <HeaderLandingTextBigTwoNavy>RENT OUR SPACE</HeaderLandingTextBigTwoNavy>
            <AboutContentImageSmall url={zumbagroup} style={{ backgroundPosition: 'center' }} />
            <BasicText>
              From zumba classes, to board meetings, to churches! The ROCK community space can accomodate your group's needs. Our mirrored wall is perfect for dance classes, while our mounted projector makes group presentations and movie screenings a cinch.Our space is [insert dimensions]. If you are interested, please contact Stephen Kia for pricing at stephen@therockcommunity.org.
            </BasicText>
          </ContentContainer>
          :
          <DesktopAboutIntro
            AboutContentImage={AboutContentImage}
            AboutContentImageSmall={AboutContentImageSmall}
            AboutBigHeaderTextThree={AboutBigHeaderTextThree}
            AboutEventText={AboutEventText}
            AboutBasicText={AboutBasicText}
            events={events}
          />
      }
    </ComponentContainer>
  )
}