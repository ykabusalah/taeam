import React from 'react'
// import Breakpoints from 'utils/breakpoints'

import GlobalWrapper from '../shared/wrapper'
import Hero from '../components/header'
import About from '../components/about'
import Work from '../components/work'
import Portfolio from '../components/portfolio'
import Writing from '../components/writing'
import Footer from '../components/footer'

import {SectionContainer, Section} from '../components/shared';


const SectionElement = (props) => {
  return (
    <Section id={props.id}>
      <SectionContainer>{props.children}</SectionContainer>
    </Section>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <GlobalWrapper>
        {/* <Breakpoints /> */}
        <Hero />
        <SectionElement  id={'about'}>
          <About />
        </SectionElement >
        <SectionElement  id={'projects'}>
          <Work />
        </SectionElement>
        <SectionElement id={'portfolio'}>
          <Portfolio />
        </SectionElement >
        <SectionElement >
          <Writing />
        </SectionElement >
        <Footer />
      </GlobalWrapper>
    )
  }
}
