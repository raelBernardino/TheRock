import React from 'react'
import styled from 'styled-components'

import rockAbout from '../assets/rockAbout2.jpg'
import {
  ComponentContainer,
  CenteredPartiallyFilledImage,
  BasicOverlay,
  HeaderLandingTextBigOne,
  LightLandingTextBigFour,
  ContentContainer,
  HeaderLandingTextBigTwoNavy,
  HeaderLandingTextBigThreeNavy,
  BasicText,
  BasicContentImage
} from './styled'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 50px;
  justify-content: flex-end;
`

const AboutContentImage = styled(BasicContentImage)`
  margin: 0;
  height: 250px;
  margin-bottom: 40px;
`

const AboutBigHeaderTextThree = styled(HeaderLandingTextBigThreeNavy)`
  margin: 30px 0 0 0;
`

const AboutEventText = styled(BasicText)`
  color: #042033;
  margin: 0;
`

const AboutBasicText = styled(BasicText)`
  margin: 5px 0 5px 0;
`

const AboutContentImageSmall = styled(BasicContentImage)`
  height: 150px;
  margin-top: 5px;
`

export default () => {
  const [events, setEvents] = React.useState([
    {
      name: 'AFTER SCHOOL PROGRAM',
      time: 'TIME & DATE',
      description: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      thumbnail: '',
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
      name: '',
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
        <AboutContentImage />
        <HeaderLandingTextBigTwoNavy>OUR EVENTS & PROGRAMS</HeaderLandingTextBigTwoNavy>
        {
          events.map((e, i) => (
            <>
              <AboutBigHeaderTextThree>{e.name}</AboutBigHeaderTextThree>
              <AboutEventText>{e.time}</AboutEventText>
              <AboutBasicText>{e.description}</AboutBasicText>
              <AboutContentImageSmall />
            </>
          ))
        }
      </ContentContainer>
    </ComponentContainer>
  )
}