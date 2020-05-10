import React from 'react'
import styled from 'styled-components'

import {
  ComponentContainer,
  CenteredFilledImage,
  BasicOverlay,
  HeaderLandingTextBigTwo,
  LightLandingTextBigFour,
  HeaderLandingTextBigTwoNavy,
  ContentContainer,
  BasicText,
  BasicContentImage,
  AnchorButton,
} from './styled'
import mlkimage from '../assets/mlk.jpg'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 50%;
  justify-content: flex-end;
`

export default () => {
  return (
    <ComponentContainer>
      <CenteredFilledImage style={{ backgroundImage: `url(${mlkimage})` }}>
        <TextBottomOverlay>
          <HeaderLandingTextBigTwo>MARTIN LUTHER</HeaderLandingTextBigTwo>
          <HeaderLandingTextBigTwo>KING JR.</HeaderLandingTextBigTwo>
          <LightLandingTextBigFour>DAY OF SERVICE</LightLandingTextBigFour>
        </TextBottomOverlay>
      </CenteredFilledImage>
      <ContentContainer>
        <HeaderLandingTextBigTwoNavy>OUR SERVICE</HeaderLandingTextBigTwoNavy>
        <BasicText>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        </BasicText>
        <BasicContentImage />
        <BasicText>
          "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.
        </BasicText>
        <AnchorButton>GALLERY</AnchorButton>
      </ContentContainer>
    </ComponentContainer>
  )
}