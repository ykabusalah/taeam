import React from "react"

import { TwoLayoutDiv, TwoLayouLeftColumn, TwoLayouRightColumn } from "./shared"

const TwoColumnsLayput = props => {
  return (
    <TwoLayoutDiv>
      <TwoLayouLeftColumn>{props.leftColumn}</TwoLayouLeftColumn>
      <TwoLayouRightColumn wide={props.wide}>
        {props.rightColumn}
      </TwoLayouRightColumn>
    </TwoLayoutDiv>
  )
}

export default TwoColumnsLayput
