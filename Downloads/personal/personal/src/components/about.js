import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import React, { Fragment } from "react"

import TwoColumns from "./two-column-layout"
import {
  SectionH2,
  AboutBig,
  AboutCircle,
  AboutPortraitWrapper,
} from "./shared"
import {
  ABOUT_STRING_1,
  ABOUT_STRING_2,
  ABOUT_STRING_3,
  ABOUT_STRING_4,
} from "../constant"

const About = () => {
  const aboutData = useStaticQuery(graphql`
    query {
      portraitImage: file(relativePath: { eq: "portrait.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `)
  return (
    <TwoColumns
      leftColumn={
        <>
          <SectionH2>About</SectionH2>
          <AboutCircle>
            <AboutPortraitWrapper>
              <Img
                style={{ width: "105%", height: "105%" }}
                fluid={aboutData.portraitImage.childImageSharp.fluid}
              />
            </AboutPortraitWrapper>
          </AboutCircle>
        </>
      }
      rightColumn={
        <Fragment>
          <AboutBig>{ABOUT_STRING_1}</AboutBig>
          <p>{ABOUT_STRING_2}</p>
          <p>{ABOUT_STRING_3}</p>
          <p style={{ marginBottom: 0 }}>{ABOUT_STRING_4}</p>
        </Fragment>
      }
    />
  )
}

export default About
