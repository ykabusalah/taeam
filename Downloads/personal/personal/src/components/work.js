import React, { Fragment } from "react"

import TwoColumnsLayout from "./two-column-layout"
import Project from "./project"

import { SectionH2 } from "./shared"

import PokemonLogo from "./logos/pokemon"
import ExtraCurricLogo from "./logos/extracurric"
import HadoopLogo from "./logos/hadoop"
import FutureLogo from "./logos/future"
import EmmettLogo from "./logos/emmett"
import { hadoopMore, emmettMore, pokemonMore, extraCurric } from "./logos"

function Work() {
  return (
    <TwoColumnsLayout
      wide
      leftColumn={<SectionH2>Work / Extra-curriculars</SectionH2>}
      rightColumn={
        <Fragment>
          <Project
            logo={HadoopLogo()}
            title="Hadoop"
            abstract="Official Contributer (~5 commits)"
            more={hadoopMore}
          />
          <Project
            logo={EmmettLogo()}
            title="Emmett Till Interpretive Center"
            abstract="Web Development and Media Intern"
            more={emmettMore}
          />
          <Project
            logo={PokemonLogo()}
            title="Pokemon Ethereal Gates"
            abstract="A custom Pokemon game composed of an original region, Pokemon, and story."
            more={pokemonMore}
          />
          <Project
            logo={ExtraCurricLogo()}
            title="Extracurriculars"
            abstract="Club Involvement and Positions"
            more={extraCurric}
          />
          <Project
            logo={FutureLogo()}
            title="Projects of the Future"
            abstract="Playing around with AWS, Splunk, and Unity"
          />
        </Fragment>
      }
    />
  )
}

export default Work
