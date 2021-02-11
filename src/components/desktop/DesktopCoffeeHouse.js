import React from 'react'

import {
  BasicText,
  BasicContentImage,
  HeaderLandingTextBigTwoNavy,
  HeaderLandingTextBigThreeNavy,
} from '../styled'
import {
  DesktopContentContainer
} from '../styled'

export default ({ coffeeplant }) => {
  return (
    <DesktopContentContainer>
      <HeaderLandingTextBigTwoNavy>WELCOME TO THE HUB OF EAGLE ROCK</HeaderLandingTextBigTwoNavy>
      <BasicText margin="10px 0 25px 0">
        Quality coffee brewed for your mornings. Specialty espresso drinks. Delicious breakfast and savory lunch. All in ROCK Coffee House, your new local cafe.
              <br /><br />
              Want something delivered? No problem. Look through our menu on Doordash and Grubhub. We’ll bring the magic of our Eagle Rock cafe to your door.
            </BasicText>
      <HeaderLandingTextBigThreeNavy margin="45px 0 15px 0">TURNING WATER INTO COFFEE</HeaderLandingTextBigThreeNavy>
      <BasicText margin="10px 0 200px 0">
        “Very truly I tell you, no one can enter the kingdom of God unless they are born of water and the Spirit.” - John 3:5
              <br />
        <br />
              Located in the heart of residential Eagle Rock, we are called by Christ to serve our neighbors as their local cafe.
              <br />
        <br />
              Every part of our process, from the harvesting of beans to the serving of coffee, is driven by our faith and our love for the community.  ROCK Coffee House exclusively uses ethically-sourced beans for all of our coffee, which we trust our fellow Eagle Rock local Cafe de Leche with roasting. Our baristas are carefully trained in the art of pulling espresso, only serving drinks with the most balanced shots we can brew, to provide our guests with the best coffee experience we can provide. We aren’t just an Eagle Rock cafe— we are your Eagle Rock cafe.
              <br />
        <br />
              We have been baptized in water and in Spirit. We pour this water and Spirit into the coffee we serve and the service we provide. Please, enjoy.
            </BasicText>
      <HeaderLandingTextBigThreeNavy margin="45px 0 15px 0">AND TURNING COFFEE INTO WATER</HeaderLandingTextBigThreeNavy>
      <BasicText margin="10px 0 25px 0">
        For two decades, we have been a hub and center for Eagle Rock. Proceeds from the coffee house are used to fund the events and activities in our recreational center that bring our community together. We are turning business at your local cafe into an investment back into the people of Eagle Rock — water for the growth of our community.
              <br />
        <br />
              Our mission goes beyond Los Angeles. As we expand, ROCK will establish clean water projects in rural Nigeria. We will also establish an ethical coffee farm in Guatemala so that ROCK can ensure quality through the entire process of our coffee acquisition. Water from an Eagle Rock cafe to people; water from an Eagle Rock cafe to coffee.
              <br />
        <br />
              Thank you for helping us draw this water.
            </BasicText>
      <BasicContentImage style={{ backgroundImage: `url(${coffeeplant})` }} />
      <HeaderLandingTextBigThreeNavy margin="45px 0 15px 0">LOCALLY ROASTED BY CAFE DE LECHE</HeaderLandingTextBigThreeNavy>
      <BasicText margin="10px 0 25px 0">
        We are proud to be a local cafe that’s part of Cafe de Leche’s network of community-oriented businesses. Since January of 2019, we have trusted our beans with their perfected, in-house roasting process.
              <br />
        <br />
              Cafe de Leche also shares our commitment to ethical sourcing of coffee beans. Their farms in Ethiopia, El Salvador, and Nicaragua provide safe working conditions and fair wages to their farmers. We are united in the conviction that coffee should be beneficial to every community it passes through, from the harvesters that pick the beans to the local cafes that serve it brewed.
              <br />
        <br />
              Their support has helped us continue to be a fixture of the Eagle Rock community. We look forward to the wonderful opportunities and growth this partnership will continue to bring!
            </BasicText>
    </DesktopContentContainer>
  )
}