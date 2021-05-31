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
  background-position: center;
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
            <HeaderLandingTextBigThreeNavy>THE SERVICE WE OFFER: EVENTS, PROGRAMS, & COMMUNITY</HeaderLandingTextBigThreeNavy>
            <BasicText>
              <br></br>
        Since 2001, the ROCK Community Center has been a hub for Eagle Rock. Formed as a collaborative through several local churches, we are led to serve our community as we believe Christ serves and loves others. “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
        <br></br>
              <br></br>
        This service manifests in the space we offer to Eagle Rock. As a community center, we host events and programs that bring our neighbors together. Movie nights. Open mic nights. After school tutoring. Science labs. Volunteer projects. We want to see Eagle Rock united — and our community center does just that.
        <br></br>
              <br></br>
            </BasicText>
            <HeaderLandingTextBigThreeNavy>EVENTS & PROGRAMS</HeaderLandingTextBigThreeNavy>
            <BasicText>
              <br></br>
        Like every organization in Los Angeles, the COVID-19 pandemic has affected the events we can host in our community center. An Eagle Rock community center is supposed to bring people together, and, unfortunately, many of the programs we once hosted can’t be done until the pandemic is over.
        <br></br>
              <br></br>
        However, we have the pleasure of still hosting events online. Check in below to see what we’re doing and how to join us!
        <br></br>
              <br></br>
        Every month, our community center has a schedule of all the events we will be hosting. Some, like our tutoring program and dance classes, are consistent programs in our community center that you can sign up for. Others are exclusive events that will only be happening once. We want to make sure you don’t miss a single one, so we keep this page updated and current so you’ll know exactly what’s going on at the ROCK Community Center!
        <br></br>
              <br></br>
            </BasicText>
            <HeaderLandingTextBigThreeNavy>THE SPACE WE OFFER: RENTING FOR PERSONAL EVENTS</HeaderLandingTextBigThreeNavy>
            <BasicText>
              <br></br>
        Need a space for a business meeting? Have a birthday party planned that just doesn’t quite fit in your house? Looking for a space to do your dance class?
        <br></br>
              <br></br>
        The ROCK Community Center is here for you. Our space is extremely flexible to accommodate any event our neighbors need to host, featuring tables, chairs, wall mirrors, couches, and a wide tile floor. If you’re interested, go ahead and contact Stephen Kia for pricing and availability at stephen@therockcommunity.org.
        <br></br>
              <br></br>
        We hope to see you soon!
      </BasicText>
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
                    <AboutBigHeaderTextThree style={{ margin: `${i === 0 && "5px 0 0 0"}` }}>{eventTitle}</AboutBigHeaderTextThree>
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