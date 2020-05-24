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
  console.log(size)
  const [navIsOpen, setNavIsOpen] = React.useState(false)
  const [windowSizeCheck, setWindowSizeCheck] = React.useState(false)

  React.useEffect(() => {
    (size.width < 1000) ? setWindowSizeCheck(true) : setWindowSizeCheck(false)
  }, [size.width])

  const toggleNav = () => {
    const navStatus = navIsOpen
    setNavIsOpen(!navStatus)
  }

  return (
    <Container style={{ overflow: `${navIsOpen ? "hidden" : ""}` }}>
      <Nav navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <NavScreen navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <Landing windowSizeCheck={windowSizeCheck} />
      <Footer />
    </Container>
  )
}
