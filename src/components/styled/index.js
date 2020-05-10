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

export const BasicOverlay = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: rgba(0, 0, 0, .3);
  position: absolute;
  font-family: 'Roboto Condensed';
  padding: 20px;
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
`

export const HeaderLandingTextBigTwo = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 45px;
  color: white;
`

export const HeaderLandingTextBigTwoNavy = styled(HeaderLandingTextBigTwo)`
  color: #042033;
`

export const HeaderLandingTextBigThree = styled.h1`
  margin: 0;
  font-weight: 900;
  font-size: 30px;
  color: white;
`

export const LightLandingTextBigTwo = styled(HeaderLandingTextBigThree)`
  margin: 0;
  font-weight: 300;
  color: white;
`

export const LightLandingTextBigFour = styled(HeaderLandingTextBigThree)`
  margin: 0;
  font-weight: 300;
  font-size: 20px;
  color: white;
`

export const ContentContainer = styled.div`
  width: 100%;
  padding: 25px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  font-family: 'Roboto Condensed', sans-serif;
`

export const BasicText = styled.span`
  font-weight: 300;
  font-family: 'Roboto Condensed', sans-serif;
  font-size: 12px;
  margin: 25px 0 25px 0;
  line-height: 20px;
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
  &:hover {
    background-color: #042033;
    color: white;
    transition: .3s;
    cursor: pointer;
    outline: none;
  }
`

export const TransparentAnchorButton = styled(AnchorButton)`
  background: transparent;
  color: white;
  border-color: white;
`