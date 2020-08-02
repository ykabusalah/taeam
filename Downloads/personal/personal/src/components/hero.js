import React from "react"
import Header from "components/header"

const Spacer = styled.div`
  flex: 1 1 0;
`

const Hero = () => {
  return (
    <HeroSection>
      <Header />
      <Spacer />
    </HeroSection>
  )
}

export default Hero
