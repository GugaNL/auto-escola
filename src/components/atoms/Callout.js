import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
//Components
import { BreakAt, BreakpointSize } from "../../styles/Breakpoints"

//#region Callout Body
const StyledCalloutBody = styled.div`
  h6,
  p {
    margin: 0, 0, 8px;
  }
`

export const CalloutBody = ({ children }) => (
  <StyledCalloutBody>{children}</StyledCalloutBody>
)

CalloutBody.defaultProps = {
  children: undefined,
}

CalloutBody.propTypes = {
  children: PropTypes.node,
}
//#endregion

//#region Callout Button
const StyledCalloutButton = styled.div`
  padding-top: 8px;
`

export const CalloutButton = ({ children }) => (
  <StyledCalloutButton>{children}</StyledCalloutButton>
)

CalloutButton.defaultProps = {
  children: undefined,
}

CalloutButton.propTypes = {
  children: PropTypes.node,
}

//#endregion

//#region
const StyledCalloutMedia = styled.img`
  width: 100%;
  max-width: 200px;
  display: none;

  ${BreakAt(BreakpointSize.sm)} {
    display: flex;
  }
`

export const CalloutMedia = ({ image }) => <StyledCalloutMedia src={image} />

CalloutMedia.defaultProps = {}

CalloutMedia.propTypes = {}
//#endregion

//#region Callout
const StyledCallout = styled.div`
  display: flex;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-left: 4px solid ${(props) => props.theme.colors.primary.main};
  border-radius: 4px;
  padding: 16px;
`

const Callout = ({ children }) => <StyledCallout>{children}</StyledCallout>

Callout.defaultProps = {
  children: undefined,
}

Callout.propTypes = {
  children: PropTypes.node,
}

export default Callout
//#endregion
