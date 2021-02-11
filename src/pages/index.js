import React from "react"
import { useWindowSize } from '../components/hooks'
import '../styles/main.scss'
import '../styles/nav.scss'
import {
  Nav,
  NavScreen,
  Landing,
  Footer,
} from '../components'
import { Container } from '../components/styled'

export default () => {
  const size = useWindowSize()
  const [navIsOpen, setNavIsOpen] = React.useState(false)
  const [windowSizeCheck, setWindowSizeCheck] = React.useState(false)

  React.useEffect(() => {
    (size.width < 1000) ? setWindowSizeCheck(true) : setWindowSizeCheck(false)
  }, [size.width])

  const toggleNav = () => {
    const navStatus = navIsOpen
    setNavIsOpen(!navStatus)
  }

  // React.useEffect(() => {
  //   fetch("https://api.instagram.com/IGQVJVYm9TTmxPZAjZA4UEotOS1lOHhtLTdLSk83NEllbjA1MlN1NnJtN2c1S2N6VHBlcU5OZADYtM25fRUZAFRUlPbUNKVnBZAYWRtYVBsRTRWVEM2YkRlalZADd2VkUEpwd2h3S196U1lIZAWhiSGFRRk5KSgZDZD")
  //   .then(data => data.json())
  //   .then(data => console.log(data))
  // }, [])

  return (
    <Container style={{ overflow: `${navIsOpen ? "hidden" : ""}` }}>
      <Nav navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <NavScreen navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <Landing windowSizeCheck={windowSizeCheck} />
      <Footer />
    </Container>
  )
}