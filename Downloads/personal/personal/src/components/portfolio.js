import React, { Fragment } from "react"

import TwoColumnsLayput from "./two-column-layout"
import { SectionH2 } from "./shared"
import Project from "./project"

const perihelionMore = (
  <p>
    Aided in design of various scripted sequences in the game via Ruby and the
    following Pokemon for the PEG's initial vision and demo:{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Gysteam"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Gysteam
    </a>
    ,{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Magnut"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Magnut
    </a>
    ,{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Technut"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Technut
    </a>
    ,{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Mechanut"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Mechanut
    </a>
    ,{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Groufin"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Groufin
    </a>
    ,{" "}
    <a
      href="https://ethereal-gates.fandom.com/wiki/Taggler"
      target="_blank"
      rel="noopener noreferrer"
    >
      {" "}
      Taggler
    </a>
    .
  </p>
)

const emmttMemory = (
  <p>
    - Designed aspects of the graphic design of the{" "}
    <a
      href="https://tillapp.emmett-till.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      official Emmett Till Memory App
    </a>{" "}
    through the use of C++ <br />- App takes users to the most important sites
    in the Mississippi Delta and beyond while also providing expert-vetted
    narratives, access to relevant archival documents, and a collection of
    historic and contemporary photographs.
  </p>
)

const websiteMore = (
  <p>Built using Gatsby and React frameworks and deployed via Ziet</p>
)

const Portfolio = () => {
  return (
    <TwoColumnsLayput
      wide
      leftColumn={<SectionH2>Portfolio</SectionH2>}
      rightColumn={
        <Fragment>
          <Project
            logo="port_thumblr.png"
            title="Perihelion Productions"
            abstract="Pokemon and General Interface Designer for Pokemon Ethereal Gates"
            more={perihelionMore}
            srcType="image"
          />
          <Project
            logo="port_emmett_till.png"
            title="Emmett Till Memory Project"
            abstract="Assistant Designer for Official App"
            more={emmttMemory}
            srcType="image"
          />
          <Project
            logo="port_self.png"
            title="My Personal Portfolio Website"
            abstract="The Front-End, Back-End, and Everything Else!"
            more={websiteMore}
            moreText="Learn More"
            srcType="image"
          />
        </Fragment>
      }
    />
  )
}

export default Portfolio
