import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faFacebookSquare } from "@fortawesome/free-brands-svg-icons"

import '../styles/footer.scss'

export default () => {
  return (
    <div className="footer">
      <div className="footer-socials-container">
        <a href="https://www.instagram.com/rock_coffee_house/">
          <FontAwesomeIcon className="footer-icon" icon={faInstagram} color="white" size="md" />
        </a>
        <a href="https://www.facebook.com/therockcommunity/?__tn__=kC-R&eid=ARBH0-3J-1Te7vNsCDa5efkBVb2DuSafeHSKNFwUm50BWQ8Vsbqoo3GP8Q8F8r-2-y57oDafsMOEhpPY&hc_ref=ARQGwkP0OBuQ7EMboxWqPimiM8AmiYOJK-N3yvDpIDwFAOyKzeAa2JsKnpNH68HkMt0&fref=nf&__xts__[0]=68.ARA04nnpwjTmm0Z0yLfnnCUGGvUNGZQAVAWYlXkYCJ93nbGuT9uThvgHZ4r0hVSoHjua97b_pmI2i62IkXi4jiflWR1NU23NgpUwDv0e7oM0UqTqC3g2670c88nn7P1JQ4EDcdWlppe50G8HSUMQbBX7gNz0bY5M1XElR7RBmSsj5BfJX8ak2PxpFjFL4u_p8pnsGYXhqxop0ZoMLP1Ss-GOXoa1l9-bOc84ZUyWwZ6seGYJB_VQdNVLYjiSr-DBS6pzdV3qxAew2Z4WeNeTp5nq5h6Nqs1Qev7C5q_TPZuG3e36iLLXB-SkzfYSm6Y1KWTMMBGINyHUs2iiFYvjzQONSfaTiKRb9bhu4OYSaHSU2ulZKc4iy4mE9Vc7z3dYco7aR3LAG8FDkV1YmZq29tDbal4Yb1OeNC9wti9JIGFlIAXCWuWGFqNyX3boAhsewJdKhMUckRkQt6RKx0miPa3Qr4Sh9tTWJRtJDf-dWbCBXge0JcUVeNTAnZjfOMkkaJ8Hbzb8bFHUUbuiAh09Xa0UbiSGmtaUAPBKDngBr-XbAL5GoDTB2N-iUwgjT7LqdT7nfOUxIdqmxg">
          <FontAwesomeIcon className="footer-icon" icon={faFacebookSquare} color="white" size="md" />
        </a>
      </div>
      <span className="footer-text">OUR STORY</span>
      <span className="footer-text">OUR COFFEE</span>
      <span className="footer-text">EVENTS & PROGRAMS</span>
      <span className="footer-text">MEET THE TEAM</span>
    </div>
  )
}