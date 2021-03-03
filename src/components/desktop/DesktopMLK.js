import React from 'react'

import {
  BasicContentImage,
  HeaderLandingTextBigThreeNavy,
  BasicText,
} from '../styled'
import {
  DesktopContentContainer
} from '../styled'
import rockschedule from '../../assets/rockschedule.jpg'

export default () => {
  return (
    <DesktopContentContainer>
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
      <BasicContentImage style={{ height: '560px', backgroundImage: `url(${rockschedule})` }} />
      <BasicText style={{ marginTop: "0" }}>
        <br></br>
        Due to COVID-19, our community center events are on hold until further notice.  But you can still support the ROCK through patroning the ROCK Coffee Shop.
        <br></br>
        <br></br>
      </BasicText>
      {/* <AnchorButton>GALLERY</AnchorButton> */}
    </DesktopContentContainer>
  )
}