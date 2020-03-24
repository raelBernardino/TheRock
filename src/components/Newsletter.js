import React from 'react'
import '../styles/newsletter.scss'

import { ButtonBlue, ButtonHoverBlue } from '../pages'

export default () => {
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
    let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    let firstTrimmedLength = firstName.trim().length
    let firstSplitLength = firstName.split(' ').length
    let lastTrimmedLength = lastName.trim().length
    let lastSplitLength = lastName.split(' ').length
    let nameMessage = 'Invalid name input (make sure to remove spaces and don\'t leave it blank).'
    let emailMessage = 'Invalid email.'
    if (firstTrimmedLength === 0 || firstSplitLength > 1) {
      setFirstNameError({...firstNameError, msg: nameMessage})
    }
    else {
      setFirstNameError({msg: '', completed: true})
    }
    if (lastTrimmedLength === 0 || lastSplitLength > 1) {
      setLastNameError({...lastNameError, msg: nameMessage})
    }
    else {
      setLastNameError({msg: '', completed: true})
    }
    if (!re.test(email)) {
      setEmailError({...emailMessage, msg: emailMessage})
    }
    else {
      setEmailError({msg: '', completed: true})
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
    if(e.key === 'Enter') validation()
  }

  return (
    <div className="newsletter">
      <div className="newsletter-content">
        <h1 className="newsletter-header">STAY UPDATED WITH US</h1>
        <form className="newsletter-form">
          <input type="text"
            placeholder="FIRST NAME"
            className="newsletter-form-input"
            value={firstName}
            onChange={_onChangeFirstName}
            onKeyPress={(_enterKeyPress)}
            />
          <span className="newsletter-error-message">{firstNameError.msg}</span>
          <input type="text"
            placeholder="LAST NAME"
            className="newsletter-form-input"
            value={lastName}
            onChange={_onChangeLastName}
            onKeyPress={(_enterKeyPress)}
            />
          <span className="newsletter-error-message">{lastNameError.msg}</span>
          <input type="text"
            placeholder="EMAIL"
            className="newsletter-form-input"
            value={email}
            onChange={_onChangeEmail}
            onKeyPress={(_enterKeyPress)}
            />
          <span className="newsletter-error-message">{emailError.msg}</span>
        </form>
        <ButtonBlue onClick={validation}>
          SUBSCRIBE
        </ButtonBlue>
      </div>
    </div>
  )
}