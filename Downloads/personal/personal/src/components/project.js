import React, { useState } from "react"

import {
  ProjectAbstract,
  ProjectDescription,
  ProjectMainLogo,
  ProjectTitle,
  ProjectWrapper,
  LogoImage,
} from "./shared"
import { Fragment } from "react"

const size = 150

function Logo(props) {
  if (!props.srcType || props.srcType === "svg") {
    return (
      <LogoImage>
        <svg
          width={size}
          height={size}
          viewBox="0 0 120 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          {props.children}
        </svg>
      </LogoImage>
    )
  } else {
    return (
      <LogoImage width={size} height={size}>
        <img
          src={props.children}
          alt=""
          style={{
            width: "120px",
            maxHeight: "120px",
            marginTop: "30px",
            marginLeft: "15px",
          }}
        ></img>
      </LogoImage>
    )
  }
}

const LearnMore = ({ more, moreText }) => {
  const [showText, setShowText] = useState(false)
  if (showText) {
    return (
      <Fragment>
        <div
          style={{ cursor: "pointer", userSelect: "none", fontWeight: 600 }}
          onClick={() => setShowText(false)}
        >
          Close
        </div>
        <div style={{ padding: 15 }}>{more}</div>
      </Fragment>
    )
  } else {
    return (
      <div
        style={{ cursor: "pointer", userSelect: "none", fontWeight: 600 }}
        onClick={() => setShowText(true)}
      >
        {moreText ? moreText : "Learn More"}...
      </div>
    )
  }
}

const Project = props => {
  return (
    <>
      <ProjectWrapper>
        {props.logo && <Logo srcType={props.srcType}>{props.logo}</Logo>}
        {props.mainLogo && (
          <ProjectMainLogo> {props.mainLogo} </ProjectMainLogo>
        )}
        <ProjectDescription>
          <ProjectTitle>{props.title}</ProjectTitle>
          <ProjectAbstract>{props.abstract}</ProjectAbstract>
          {props.link}
          {props.more && (
            <LearnMore
              more={props.more}
              moreText={props.moreText ? props.moreText : null}
            />
          )}
        </ProjectDescription>
      </ProjectWrapper>
    </>
  )
}

export default Project
