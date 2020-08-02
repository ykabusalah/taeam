import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import TwoColumns from "./two-column-layout";
import Project from "./project";


import {SectionH2} from './shared'

const BaroLink = (
  <a href="https://medium.com/@ykabusalah">Check it out on Medium!</a>
);

function Writing() {
  const aboutData = useStaticQuery(graphql`
    query {
      baroLogoImage: file(relativePath: { eq: "baro_logo_transparent.png" }) {
        childImageSharp {
          fluid(maxWidth: 800, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <TwoColumns
      wide
      leftColumn={<SectionH2>Writing</SectionH2>}
      rightColumn={
        <Project
          mainLogo={
            <Img fluid={aboutData.baroLogoImage.childImageSharp.fluid} />
          }
          title="Baro"
          abstract="Reflection series based on my life experiences and anything else that
          interests me"
          link={BaroLink}
        />
      }
    />
  );
}

export default Writing;
