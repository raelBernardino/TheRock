import React from 'react'
import styled from 'styled-components'

import coffeeLanding from '../assets/rockcoffee3.jpg'
import coffeeplant from '../assets/coffeeplant.jpg'
import { DesktopCoffeeHouse } from './desktop'
import {
  ComponentContainer,
  CenteredPartiallyFilledImage,
  CenteredFilledImage,
  BasicOverlay,
  HeaderLandingTextBigOne,
  HeaderLandingTextBigTwoNavy,
  LightLandingTextBigTwo,
  LightLandingTextBigFour,
  ContentContainer,
  BasicText,
  BasicContentImage,
  HeaderLandingTextBigTwo,
} from './styled'

const TextBottomOverlay = styled(BasicOverlay)`
  padding-bottom: 50px;
  justify-content: flex-end;
  @media screen and (min-width: 1000px) {
    justify-content: center;
    padding: 10% 0 0 0;
  }
`

export default ({ windowSizeCheck }) => {
  return (
    <ComponentContainer>
      {
        windowSizeCheck ?
          <CenteredPartiallyFilledImage style={{ backgroundImage: `url(${coffeeLanding})` }}>
            <TextBottomOverlay>
              <HeaderLandingTextBigOne>THE ROCK</HeaderLandingTextBigOne>
              <LightLandingTextBigTwo>COFFEE HOUSE</LightLandingTextBigTwo>
            </TextBottomOverlay>
          </CenteredPartiallyFilledImage>
          :
          <CenteredFilledImage style={{ backgroundImage: `url(${coffeeLanding})` }}>
            <TextBottomOverlay>
              <HeaderLandingTextBigTwo>THE ROCK</HeaderLandingTextBigTwo>
              <LightLandingTextBigFour>COFFEE HOUSE</LightLandingTextBigFour>
            </TextBottomOverlay>
          </CenteredFilledImage>
      }
      {
        windowSizeCheck ?
          <ContentContainer>
            <HeaderLandingTextBigTwoNavy>TURNING COFFEE INTO WATER</HeaderLandingTextBigTwoNavy>
            <BasicText>
              "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
            </BasicText>
            <BasicContentImage style={{ backgroundImage: `url(${coffeeplant})` }} />
            <BasicText>
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
            </BasicText>
          </ContentContainer>
          : <DesktopCoffeeHouse coffeeplant={coffeeplant} />
      }
    </ComponentContainer>
  )
}