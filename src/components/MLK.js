import React from 'react'
import styled from 'styled-components'

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
  AnchorButton,
  HeaderLandingTextBigThreeNavy
} from './styled'
import { DesktopAboutIntro } from './desktop'
import { DesktopMLK } from './desktop'
import mlkimage from '../assets/mlk.jpg'
import mlkday from '../assets/mlkday.jpg'
import rockschedule from '../assets/rockschedule.jpg'
import aboutLanding from '../assets/aboutLanding.jpg'
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
`

export default ({ windowSizeCheck }) => {
  const [events, setEvents] = React.useState([
    {
      name: 'MLK Day',
      time: 'Martin Luther King Jr. National Holiday',
      description: 'The ROCK has formed a longlasting partnership with Occidental College through participating in the annual MLK Day of Service. Over the years, large volunteer groups from Oxy have helped to maintain our space, and learn about the work we do. In recent years, the ROCK brought volunteers from Oxy\'s football team to support the library at Eagle Rock High School.',
      thumbnail: mlkday,
    },
    {
      name: 'FREE AFTER SCHOOL TUTORING',
      time: 'TIME & DATE',
      description: 'The ROCK offers completely free tutoring services in all subjects during after school hours (weekdays 3-6pm). Volunteer tutors from local colleges and universities mentor students to overcome their academic challenges.',
      thumbnail: aboutLanding,
    },
    {
      name: 'OPEN MIC NIGHT',
      time: 'TIME & DATE',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      thumbnail: '',
    },
    {
      name: 'GAME NIGHT',
      time: 'TIME & DATE',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      thumbnail: '',
    },
    {
      name: 'MOVIE NIGHTS',
      time: 'TIME & DATE',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      thumbnail: '',
    },
  ])

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
            <BasicContentImage />
            <BasicText>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
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
              events.map((e, i) => (
                <>
                  <AboutBigHeaderTextThree style={{ margin: `${i === 0 && "5px 0 0 0"}` }}> {e.name}</AboutBigHeaderTextThree>
                  <AboutEventText>{e.time}</AboutEventText>
                  <AboutBasicText>{e.description}</AboutBasicText>
                  <AboutContentImageSmall style={{ backgroundImage: `url(${e.thumbnail})` }} />
                </>
              ))
            }
            <HeaderLandingTextBigTwoNavy>RENT OUR SPACE</HeaderLandingTextBigTwoNavy>
            <AboutContentImageSmall style={{ backgroundImage: `url(${zumbagroup})`, backgroundPosition: 'center' }} />
            <BasicText>
              From zumba classes, to board meetings, to churches! The ROCK community space can accomodate your group's needs. Our mirrored wall is perfect for dance classes, while our mounted projector makes group presentations and movie screenings a cinch.Our space is [insert dimensions]. If you are interested, please contact Stephen Kia for pricing at
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