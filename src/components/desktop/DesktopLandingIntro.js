import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import {
  HeaderLandingTextBigTwoNavy,
  ContentContainer,
  ContentContainerRow,
  BasicText,
  AnchorButton,
} from '../styled'
import rockAbout from '../../assets/aboutLanding.jpg'

const DesktopLandingContentContainerTwo = styled(ContentContainer)`
  @media screen and (min-width: 1050px) {
    padding: 15px;
    background-image: url(${p => p.url})
  }
`

export default ({ DesktopLandingPageImage }) => (
  <ContentContainerRow>
    <DesktopLandingPageImage url={rockAbout} />
    <DesktopLandingContentContainerTwo>
      <HeaderLandingTextBigTwoNavy>WHO WE ARE</HeaderLandingTextBigTwoNavy>
      <BasicText>
        The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
        </BasicText>
      <Link to="/about" className="anchor-button">MORE INFO</Link>
    </DesktopLandingContentContainerTwo>
  </ContentContainerRow>
)