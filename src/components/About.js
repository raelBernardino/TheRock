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
        <BasicText style={{ margin: "0" }}>
          represents the three foundations of our mission:
        </BasicText>
        <BasicText style={{ width: "100%" }}>
          <b>The first</b> is as an acronym: Reach Our Community Kids. R.O.C.K. was established in 1996 as a nonprofit outreach and after school tutoring program for the local kids of Eagle Rock. To better serve both Eagle Rock High School and Rockdale Elementary School, we relocated to its current location on the corner of Yosemite and Townsend in 2001. In 2007, we remodeled our building to make space for a coffee and snack shop for the kids and parents that came to our program.
          <br></br>
          <br></br>
          The most significant step in our story, however, was in January 2019. R.O.C.K.’s Director of Social Enterprise Ricardo Cruz and President and CEO Stephen Kia teamed up to create ROCK Coffee House in addition to ROCK Community Center. Revenue from ROCK Coffee House would fund the events we host in ROCK Community Center. Conversely, events in ROCK Community Center would bring in people to enjoy our artisan, locally roasted coffee drinks. As the community invests in us, we invest in our community.
          <br></br>
          <br></br>
          <b>The second</b> is the rock of Corinthians 10:4: “And all drank the same spiritual drink, for they were drinking from a spiritual rock which followed them; and the rock was Christ.” Our faith guides us to provide and serve our neighborhood — to not only be a physical center for our community, but a spiritual one too. So much of our growth and success is due to the network of churches and religious nonprofits that have supported us since we opened. For these blessings, we thank them and we thank Christ.
          <br></br>
          <br></br>
          <b>The third</b> is an homage to Eagle Rock, the city we were born and grew in. We love this city, this neighborhood, and this community. We owe everything to Eagle Rock, so it is our mission to serve the people that make Eagle Rock what it is today. ROCK Community Center functions as a space for locals to host events and gatherings. ROCK Coffee House provides ethically-sourced and locally-brewed coffee for our neighbors to enjoy.
          <br></br>
          <br></br>
          Come on by. Our doors are open. We’re here to be your rock too.
        </BasicText>
        {/* <AboutContentImage /> */}
      </ContentContainer>
    </ComponentContainer>
  )
}