import React from 'react'
import styled from 'styled-components'
import { Link } from 'gatsby'

import { DesktopLandingIntro } from './desktop'
import landingImage from '../assets/rockcoffee2.jpg'
import coffeeImage from '../assets/rockcoffee1.jpg'
import {
  ComponentContainer,
  CenteredFilledImage,
  LeftAlignBasicOverlay,
  BasicOverlay,
  HeaderLandingTextBigOne,
  HeaderLandingTextBigTwoNavy,
  HeaderLandingTextBigThree,
  LightLandingTextBigFour,
  ContentContainer,
  BasicText,
} from './styled'

const LandingPageHeaderContainer = styled.div`
  text-align: center;
  font-family: 'Roboto Condensed';
  @media screen and (min-width: 1000px) {
    text-align: left;
    margin-right: 100px;
  }

`
const LandingPageImage = styled.div`
  width: 100%;
  height: 200px;
  border: solid black .5px;
  margin: 25px 0 0 0;
  @media screen and (min-width: 750px) {
    height: 300px;
  }
  @media screen and (min-width: 1000px) {
    height: 450px;
  }
`

const LandingPageCoffee = styled.div`
  width: 100%;
  height: 25vh;
  background-image: url("${coffeeImage}");
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  position: relative;
  padding: 15px;
  box-sizing: border-box;
  @media screen and (min-width: 750px) {
    padding: 40px;
  }
  @media screen and (min-width: 1050px) {
    height: 45vh;
  }
`

const DesktopLandingPageImage = styled(LandingPageImage)`
  margin: 0;
  height: 500px;
`

export default ({ windowSizeCheck }) => {
  return (
    <ComponentContainer>
      <CenteredFilledImage style={{ backgroundImage: `url(${landingImage})` }}>
        <BasicOverlay>
          <LandingPageHeaderContainer>
            {
              windowSizeCheck ?
                <>
                  <HeaderLandingTextBigOne>THE ROCK</HeaderLandingTextBigOne>
                  <HeaderLandingTextBigThree>COMMUNITY CENTER</HeaderLandingTextBigThree>
                </>
                :
                <>
                  <HeaderLandingTextBigThree style={{ marginBottom: "-15px" }}>THE ROCK</HeaderLandingTextBigThree>
                  <HeaderLandingTextBigThree>COMMUNITY CENTER</HeaderLandingTextBigThree>
                </>
            }
            <LightLandingTextBigFour>A place of hope & faithfulness</LightLandingTextBigFour>
          </LandingPageHeaderContainer>
        </BasicOverlay>
      </CenteredFilledImage>
      {
        windowSizeCheck ?
          <ContentContainer>
            <HeaderLandingTextBigTwoNavy>WHO WE ARE</HeaderLandingTextBigTwoNavy>
            <LandingPageImage />
            <BasicText>
              The ROCK Community works to manifest the Gospel of Jesus Christ by providing a place of hope, faithfulness, and sanctuary, available to those seeking knowledge, growth, and peace.  Formed as a collaborative through several local area churches we are led to serve our community as we believe Christ serves and loves others.  “…for they were drinking from a spiritual Rock which followed them; and the Rock was Christ” (1 Corinthians 10:4).
            </BasicText>
            <Link to="/about" className="anchor-button">MORE INFO</Link>
          </ContentContainer>
          : <DesktopLandingIntro DesktopLandingPageImage={DesktopLandingPageImage} />
      }
      <LandingPageCoffee>
        <LeftAlignBasicOverlay>
          <LightLandingTextBigFour>
            CONNECTING THE COMMUNITY
            <br></br>
            THROUGH COFFEE
            </LightLandingTextBigFour>
          <Link to="/coffeehouse" className="anchor-button__transparent">OUR COFFEE</Link>
        </LeftAlignBasicOverlay>
      </LandingPageCoffee>
    </ComponentContainer>
  )
}