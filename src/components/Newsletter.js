import React from 'react'
import styled from 'styled-components'

import '../styles/newsletter.scss'
import { useWindowSize } from './hooks'
import {
  TransparentButton,
  BasicTextYellow,
  BasicInputText,
  HeaderLandingTextBigThree,
} from '../components/styled'

const ErrorText = styled(BasicTextYellow)`
    color: red;
    margin: 0 ;
`

const HeaderLandingTextBigThreeYellow = styled(HeaderLandingTextBigThree)`
  color: #FFF6CC;
`

export default () => {
  const size = useWindowSize()
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [firstNameError, setFirstNameError] = React.useState({
    msg: '',
    completed: false
  })
  const [lastNameError, setLastNameError] = React.useState({
    msg: '',
    completed: false
  })
  const [emailError, setEmailError] = React.useState({
    msg: '',
    completed: false
  })

  const validation = () => {
    let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let firstTrimmedLength = firstName.trim().length
    let firstSplitLength = firstName.split(' ').length
    let lastTrimmedLength = lastName.trim().length
    let lastSplitLength = lastName.split(' ').length
    let nameMessage = 'Invalid name BasicInputText (make sure to remove spaces and don\'t leave it blank).'
    let emailMessage = 'Invalid email.'
    if (firstTrimmedLength === 0 || firstSplitLength > 1) {
      setFirstNameError({ ...firstNameError, msg: nameMessage })
    }
    else {
      setFirstNameError({ msg: '', completed: true })
    }
    if (lastTrimmedLength === 0 || lastSplitLength > 1) {
      setLastNameError({ ...lastNameError, msg: nameMessage })
    }
    else {
      setLastNameError({ msg: '', completed: true })
    }
    if (!re.test(email)) {
      setEmailError({ ...emailMessage, msg: emailMessage })
    }
    else {
      setEmailError({ msg: '', completed: true })
    }
  }

  const _onChangeFirstName = e => {
    setFirstName(e.target.value)
  }

  const _onChangeLastName = e => {
    setLastName(e.target.value)
  }

  const _onChangeEmail = e => {
    setEmail(e.target.value)
  }

  const _enterKeyPress = e => {
    if (e.key === 'Enter') validation()
  }

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        {
          size.width < 1000 ?
            <BasicTextYellow>STAY UPDATED WITH US</BasicTextYellow>
            : <HeaderLandingTextBigThreeYellow>STAY UPDATED WITH US</HeaderLandingTextBigThreeYellow>
        }
        <form className="newsletter-form">
          <BasicInputText type="text"
            placeholder="FIRST NAME"
            value={firstName}
            onChange={_onChangeFirstName}
            onKeyPress={(_enterKeyPress)}
          />
          <ErrorText className="newsletter-error-message">{firstNameError.msg}</ErrorText>
          <BasicInputText type="text"
            placeholder="LAST NAME"
            value={lastName}
            onChange={_onChangeLastName}
            onKeyPress={(_enterKeyPress)}
          />
          <ErrorText className="newsletter-error-message">{lastNameError.msg}</ErrorText>
          <BasicInputText type="text"
            placeholder="EMAIL"
            value={email}
            onChange={_onChangeEmail}
            onKeyPress={(_enterKeyPress)}
          />
          <ErrorText className="newsletter-error-message">{emailError.msg}</ErrorText>
        </form>
        <TransparentButton onClick={validation}>
          SUBSCRIBE
        </TransparentButton>
      </div>
    </div>
  )
}