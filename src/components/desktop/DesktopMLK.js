import React from 'react'

import {
  HeaderLandingTextBigTwoNavy,
  BasicText,
  BasicContentImage,
  AnchorButton,
} from '../styled'
import {
  DesktopContentContainer
} from '../styled'

export default () => {
  return (
    <DesktopContentContainer>
      <HeaderLandingTextBigTwoNavy>OUR SERVICE</HeaderLandingTextBigTwoNavy>
      <BasicText>
        The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
        Much of the programming in our community center, including our after school tutoring program, movie nights, game nights, and open mic nights. This is made possible through the attached coffee shop.This social enterprise subsidizes our mission so we can remain self-sustaining as a non-profit.
      </BasicText>
      {/* <AnchorButton>GALLERY</AnchorButton> */}
    </DesktopContentContainer>
  )
}