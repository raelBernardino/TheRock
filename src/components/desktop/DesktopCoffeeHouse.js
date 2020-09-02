import React from 'react'

import {
  HeaderLandingTextBigTwoNavy,
  BasicText,
  BasicContentImage,
} from '../styled'
import {
  DesktopContentContainer
} from '../styled'

export default ({ coffeeplant }) => {
  return (
    <DesktopContentContainer>
      {/* <HeaderLandingTextBigTwoNavy>TURNING COFFEE INTO WATER</HeaderLandingTextBigTwoNavy> */}
      <BasicText>
        Attatched to our community center is our very own coffee shop. Our imported beans are locally brewed at Cafe De Leche in Highland park, just right over Townsend. We offer wifi, lots of seating, and pastries to go along your coffee. Now serving breakgast and lunch, you can see our full menu through <a href="https://www.trycaviar.com/store/rock-coffee-house-los-angeles-1074981/en-US">Caviar</a>.
      </BasicText>
      {/* <BasicContentImage style={{ backgroundImage: `url(${coffeeplant})` }} />
      <BasicText>
        Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
      </BasicText> */}
    </DesktopContentContainer>
  )
}