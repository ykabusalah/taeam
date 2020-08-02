import styled from "styled-components"
import { media } from "../shared/styles"

export const FooterText = styled.div`
  text-align: center;
  font-size: 16px;
  ${media.sm`git 
    text-align: left;
    font-size: 14px;
  `}
`

export const Section = styled.section`
  margin: 0 96px;
  ${media.lg`
    margin: 0 64px;
  `}
  ${media.sm`
    margin: 0 24px;
  `}
  display: flex;
  justify-content: center;
`

export const SectionContainer = styled.div`
  border-top: 1px solid #c4c4c4;
  max-width: 916px;
  padding: 128px 0;
  ${media.sm`
    padding: 64px 0;
  `}
  width: 100%;
`

export const HeroSection = styled.section`
  height: 100vh;
  max-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: calc(100vw - 17px);
  ${media.sm`
    height: calc(100vh - 76px);
  `}
`

export const HeroSpacer = styled.div`
  flex: 1 1 0;
`

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex: 0 0 auto;
  ${media.sm`
    display: ${props => (props.article ? "flex" : "block")};
  `};
  z-index: 10;
  height: ${props => (props.article ? "74px" : "")};
  ${media.xs`
    display: block;
    height: 112px;
  `}
`

export const HeaderLogoWrapper = styled.div`
  padding: 24px 0 24px 24px;
  ${media.sm`
    padding: ${props => (props.article ? "24px 0 24px 24px" : "24px 0 0 0")};
  `};
  ${media.xs`
    padding: 24px 0 0 0;
  `}
`

export const HeaderNameLink = styled.a`
  text-decoration: none;
`

export const HeaderName = styled.h1`
  white-space: nowrap;
  font-size: 26px;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  ${media.sm`
    text-align: center;
    font-size: 32px;
  `};
`

export const HeaderNameArticle = styled.div`
  white-space: nowrap;
  font-size: 22px;
  font-weight: 700;
  text-align: left;
  margin: 0;
  line-height: 1.2;
  color: #1b1b1b;
  ${media.xs`
    text-align: center;
  `};
`

export const HeaderRole = styled.div`
  color: #434343;
  text-align: left;
  line-height: 1.4;
  font-size: 20px;
  ${media.sm`
    text-align: center;
    font-size: 26px;
  `};
`

export const HeaderSocialLinks = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  padding: 15px 24px 0 24px;
  ${media.sm`
    padding: ${props => (props.article ? "15px 12px 0 8px" : "4px 0 0 0")};
    grid-column-gap: 0;
  `}
  ${media.xs`
    padding: 0;
  `}
  justify-content: center;
`

export const HeaderSocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  background: white;
  border-radius: 20px;
  color: #1B1B1B;
  border: 1px solid white;
  &:hover {
    border: 1px solid #F2F2F2
    background: #F2F2F2
    color: #1B1B1B
  }
  &:active {
    color: #1B1B1B
  }
  &:visited {
    color: #1B1B1B
  }
`

export const HeaderSvgWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 24px;
  min-height: 24px;
  color: inherit;
  background: inherit;
`

export const HeaderInlineSvg = styled.svg`
  height: 24px;
  width: 24px;
  color: inherit;
  fill: currentColor;
`

export const HeaderTooltip = styled.div`
  padding: 2px 24px 0 24px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  opacity: ${props => (props.visible ? "1" : "0")};
  transition: opacity 300ms;
  ${media.sm`
    justify-content: center;
    padding-top: 6px;
  `}
`

export const HeaderTooltipIcon = styled.div`
  transform: rotate(270deg);
  margin-left: 8px;
`

export const HeaderTooltipText = styled.div``

export const IconInlineSvg = styled.svg`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100%;
  width: 100%;
  color: inherit;
  fill: currentColor;
`

export const IconSvgWrapper = styled.div`
  display: inline-block;
  flex: 0 0 ${props => (props.size ? `${props.size}px` : "32px")};
  width: ${props => (props.size ? `${props.size}px` : "32px")};
  height: ${props => (props.size ? `${props.size}px` : "32px")};
  min-width: ${props => (props.size ? `${props.size}px` : "32px")};
  min-height: ${props => (props.size ? `${props.size}px` : "32px")};
  position: relative;
  color: inherit;
`

export const TwoLayoutDiv = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  justify-content: space-between;
  width: 100%;
  ${media.md`
    grid-template-columns: auto;
    justify-content: center;
  `}
`

export const TwoLayouLeftColumn = styled.div``

export const TwoLayouRightColumn = styled.div`
  max-width: ${props => (props.wide ? "620px" : "544px")};
  ${media.md`
    max-width: 544px;
  `}
`

export const SectionH2 = styled.h2`
  border-top: 2px solid #1b1b1b;
  display: inline-block;
  font-size: 22px;
  color: #1b1b1b;
  letter-spacing: 5px;
  text-transform: uppercase;
  font-weight: 700;
  margin: 6px 0 0 0;
  padding: 16px 0 0 0;
  line-height: 1.1;
  ${media.md`
      border-top: none;
      margin-bottom: 72px;
      padding-bottom: 12px;
      border-bottom: 2px solid #1B1B1B;
    `}
  ${media.sm`
      margin-bottom: 60px;
      padding-bottom: 8px;
    `}
`

export const ProjectWrapper = styled.div`
  margin-bottom: 100px;
  display: flex;
  @media (max-width: 660px) {
  }
  &:last-of-type {
    margin-bottom: 0px;
  }
  ${media.sm`
flex-wrap: wrap;
margin-bottom: 68px;
`}
`

export const ProjectDescription = styled.div`
  @media (max-width: 660px) {
    margin-top: 32px;
  }
`

export const ProjectTitle = styled.h3`
  font-size: 26px;
  font-weight: 700;
  ${media.md`
font-size: 26px;
`}
  margin: 0 0 16px 0;
`

export const ProjectAbstract = styled.div`
  margin-bottom: 16px;
`

export const ProjectMainLogo = styled.div`
  background: white;
  flex: 0 0 100px;
  height: 100px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
    margin-bottom: 20px;
  `}
`

export const LogoImage = styled.div`
  background: white;
  flex: 0 0 150px;
  height: 150px;
  margin-right: 40px;
  border-radius: 8px;
  margin-top: -28px;
  ${media.md`
    margin-left: -28px;
  `}
  ${media.sm`
    margin-bottom: -20px;
  `}
`

export const AboutBig = styled.span`
  font-size: 26px;
  color: #1b1b1b;
  font-weight: 700;
  ${media.sm`
    font-size: 22px;
  `}
`

export const AboutCircle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 250px;
  width: 250px;
  margin: 3vw auto 10vmin;
  text-align: center;
  border-radius: 100%;
  background: #434343;
`

export const AboutPortraitWrapper = styled.div`
  width: 95%;
  height: 95%;
  display: flex;
  max-width: 800px;
  align-items: center;
  justify-content: center;
  max-width: 800px;
  -webkit-clip-path: circle(50% at 50% 10%);
  clip-path: circle(50% at 50% 50%);
`
