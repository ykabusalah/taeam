import React from "react"
import Glyph from "./glyph"
import { IconInlineSvg, IconSvgWrapper } from "./shared"

const Icon = props => {
  const { size = 32, glyph } = props
  return (
    <IconSvgWrapper size={size} className={"icon"}>
      <IconInlineSvg
        fillRule="evenodd"
        clipRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="1.414"
        xmlns="http://www.w3.org/2000/svg"
        aria-labelledby="title"
        viewBox="0 0 32 32"
        preserveAspectRatio="xMidYMid meet"
        fit
        id={glyph}
      >
        <title id="title">{glyph}</title>
        <Glyph glyph={glyph} />
      </IconInlineSvg>
    </IconSvgWrapper>
  )
}

export default Icon
