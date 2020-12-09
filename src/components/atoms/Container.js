import PropTypes from "prop-types"
import styled from "styled-components"
import { BreakAt, BreakpointSize } from "../../styles/Breakpoints"

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${BreakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    max-width: 1140px;
    margin: 0 auto; //Em cima e baixo nao tem margem e dos lados assume o automatico e centraliza
  }
`

Container.defaultProps = {
  children: undefined,
}

Container.propTypes = {
  children: PropTypes.node,
}

export default Container
