import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  position: relative;
`
export const ComponentContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const BasicContentImage = styled.div`
  width: 100%;
  height: 200px;
  margin: 25px 0 20px 0;
  background-size: cover;
  background-position: center;
  @media screen and (min-width: 750px) {
   height: 300px;
  }
  @media screen and (min-width: 750px) {
   height: 450px;
  }
`

export const CenteredFilledImage = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  background-position: center;
  position: relative;
`

export const CenteredPartiallyFilledImage = styled(CenteredFilledImage)`
  height: 65vh;
`

export const BasicOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(3, 3, 3, .1);
  position: absolute;
  font-family: 'Roboto Condensed';
  padding: 15px;
  box-sizing: border-box;
`

export const LeftAlignBasicOverlay = styled(BasicOverlay)`
  align-items: flex-start;
`

export const HeaderLandingTextBigOne = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 65px;
  color: white;
  @media screen and (min-width: 750px) {
    font-size: 100px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 130px;
  }
`

export const HeaderLandingTextBigTwo = styled.h1`
  font-family: 'Roboto Condensed';
  margin: 0;
  font-weight: 900;
  font-size: 40px;
  color: white;
  @media screen and (min-width: 750px) {
    font-size: 55px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 75px;
  }
  `

export const HeaderLandingTextBigTwoNavy = styled(HeaderLandingTextBigTwo)`
  color: #042033;
  @media screen and (min-width: 750px) {
    margin-bottom: 20px;
  }
  `

export const HeaderLandingTextBigThree = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 30px;
  color: white;
  @media screen and (min-width: 750px) {
    font-size: 45px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 55px;
  }
`

export const HeaderLandingTextBigThreeNavy = styled(HeaderLandingTextBigThree)`
  margin-bottom: 10px;
  color: #042033;
  @media screen and (min-width: 750px) {
    font-size: 25px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 35px;
  }
`

export const HeaderLandingTextBigFour = styled(HeaderLandingTextBigOne)`
  font-size: 15px;
  @media screen and (min-width: 1000px) {
    font-size: 25px;
  }
`

export const LightLandingTextBigOne = styled(HeaderLandingTextBigOne)`
  font-weight: 300;
`

export const LightLandingTextBigTwo = styled(HeaderLandingTextBigTwo)`
  margin: 0;
  font-weight: 300;
  color: white;
`

export const LightLandingTextBigFour = styled(HeaderLandingTextBigThree)`
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  color: white;
  @media screen and (min-width: 750px) {
   font-size: 30px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 45px;
  }
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 15px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Condensed', sans-serif;
  @media screen and (min-width: 750px) {
    padding: 40px;
  }
`

export const ContentContainerRow = styled(ContentContainer)`
  flex-direction: row;
`

export const DesktopContentContainer = styled.div`
  padding: 50px 20%;
`

export const BasicText = styled.span`
  font-weight: 300;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  margin: 25px 0 25px 0;
  line-height: 20px;
  @media screen and (min-width: 750px) {
    font-size: 15px;
    line-height: 25px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 18px;
    line-height: 35px;
  }
`
export const BasicTextYellow = styled(BasicText)`
  color: #FFF6CC;
`

export const Button = styled.button`
  width: 125px;
  height: 45px;
  font-weight: 300;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 13px;
  border: solid .5px #042033;
  background-color: white;
  transition: .3s;
  margin: 10px 0 10px 0;
  &:hover {
    background-color: #042033;
    color: white;
    transition: .3s;
    cursor: pointer;
    outline: none;
  }
  @media screen and (min-width: 750px) {
    font-size: 15px;
    width: 145px;
    height: 55px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    width: 200px;
    height: 65px;
  }
  `

export const AnchorButton = styled.a`
  width: 125px;
  height: 45px;
  font-weight: 300;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: solid .5px #042033;
  background-color: white;
  transition: .3s;
  margin: 10px 0 10px 0;
  color: black;
  &:hover {
    background-color: #042033;
    color: white;
    transition: .3s;
    cursor: pointer;
    outline: none;
  }
  @media screen and (min-width: 750px) {
    font-size: 15px;
    width: 145px;
    height: 55px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    width: 200px;
    height: 65px;
  }
`

export const TransparentButton = styled(Button)`
  background: transparent;
  color: white;
  border-color: white;
`

export const TransparentAnchorButton = styled(AnchorButton)`
  text-decoration: none;
  background: transparent;
  color: white;
  border-color: white;
`

export const BasicInputText = styled.input`
  font-weight: 300;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  margin: 25px 0 25px 0;
  line-height: 20px;
  margin: 15px 0 15px 0;
  width: 95%;
  background-color: transparent;
  border: none;
  border-bottom: .5px solid white;
  font-size: 15px;
  padding: 10px 10px 10px 0;
  text-transform: uppercase;
  font-family: 'Roboto Condensed';
  font-weight: 300;
  color: white;
  outline: none;
  &::placeholder {
    color: rgba(250, 250, 250, .3);
    font-family: "Roboto Condensed";
    font-weight: 300;
  }
  @media screen and (min-width: 750px) {
    font-size: 15px;
    line-height: 25px;
  }
  @media screen and (min-width: 1000px) {
    font-size: 20px;
    line-height: 35px;
  }
`