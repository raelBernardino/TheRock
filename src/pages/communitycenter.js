import React from "react"

import { useWindowSize } from "../components/hooks"
import '../styles/main.scss'
import '../styles/nav.scss'
import {
  Nav,
  NavScreen,
  MLK,
  Footer,
} from '../components'
import { Container } from '../components/styled'

export default ({ data }) => {
  const size = useWindowSize()
  const [events, setEvents] = React.useState([])
  const [navIsOpen, setNavIsOpen] = React.useState(false)
  const [windowSizeCheck, setWindowSizeCheck] = React.useState(false)

  React.useEffect(() => {
    (size.width < 1000) ? setWindowSizeCheck(true) : setWindowSizeCheck(false)
  }, [size.width])

  React.useEffect(() => {
    if (data) {
      const { edges } = data.allContentfulEvent
      let filteredEvents = [...edges]
      filteredEvents = filteredEvents.filter((event, i, arr) => {
        let trimmedArr = arr.slice(i+1, arr.length)
        console.log({trimmedArr})
        console.log({event})
        return trimmedArr.map(e => e.node.eventTitle).indexOf(event.node.eventTitle) > -1
      })
      setEvents(filteredEvents)
      // setEvents(edges.filter((event, i, arr) => (i === arr.findIndex(t => t.eventTitle === event.eventTitle))))
    }
  }, [data])

  const toggleNav = () => {
    const navStatus = navIsOpen
    setNavIsOpen(!navStatus)
  }
  return (
    <Container style={{ overflow: `${navIsOpen ? "hidden" : ""}` }}>
      <Nav navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <NavScreen navIsOpen={navIsOpen} toggleNav={toggleNav} />
      <MLK windowSizeCheck={windowSizeCheck} events={events} />
      <Footer />
    </Container>
  )
}

export const eventQuery = graphql`
  query {
    allContentfulEvent {
      edges {
        node {
          eventTitle
          eventDate
          eventDescription {
            json
          }
          eventThumbnail {
            fluid(quality: 100) {
              src
            }
          }
        }
      }
    }
  }
`;