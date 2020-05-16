import React from 'react'
import styled from 'styled-components'

import { useWindowSize } from './hooks'
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
  HeaderLandingTextBigOne,
} from './styled'
import { DesktopMLK } from './desktop'
import mlkimage from '../assets/mlk.jpg'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 150px;
  justify-content: flex-end;
  @media screen and (min-width: 1050px) {
    align-items: flex-start;
    padding: 0 10% 10% 150px;
  }
`

const MLKHeaderLandingTextBigTwo = styled(HeaderLandingTextBigTwo)`
  @media screen and (min-width: 1000px) {
    font-size: 100px
  }
`

export default () => {
  const size = useWindowSize()

  return (
    <ComponentContainer>
      <CenteredFilledImage style={{ backgroundImage: `url(${mlkimage})` }}>
        <TextBottomOverlay>
          {
            size.width < 1000 ?
              <>
                <MLKHeaderLandingTextBigTwo>MARTIN LUTHER</MLKHeaderLandingTextBigTwo>
                <MLKHeaderLandingTextBigTwo>KING JR.</MLKHeaderLandingTextBigTwo>
              </>
              :
              <HeaderLandingTextBigThree>MARTIN LUTHER KING JR.</HeaderLandingTextBigThree>
          }
          <LightLandingTextBigFour>DAY OF SERVICE</LightLandingTextBigFour>
        </TextBottomOverlay>
      </CenteredFilledImage>
      {
        size.width < 1050 ?
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
          : <DesktopMLK />
      }
    </ComponentContainer>
  )
}