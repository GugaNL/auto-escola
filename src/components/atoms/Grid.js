import PropTypes from "prop-types"
import styled from "styled-components"
import { BreakAt, BreakpointSize } from "../../styles/Breakpoints"

const Grid = styled.div`
  display: grid;
  grid-column-gap: 16px; //Espaçamento entre as colunas
  grid-row-gap: 16px; //Espaçamento entre as linhas
  grid-template-columns: 1fr;

  ${BreakAt(BreakpointSize.sm)} {
    grid-template-columns: repeat(${(props) => props.sm}, 1fr);
  }

  ${BreakAt(BreakpointSize.md)} {
    grid-template-columns: repeat(${(props) => props.md}, 1fr);
  }

  ${BreakAt(BreakpointSize.lg)} {
    grid-template-columns: repeat(${(props) => props.lg}, 1fr);
  }

  ${BreakAt(BreakpointSize.xl)} {
    grid-template-columns: repeat(${(props) => props.xl}, 1fr);
  }
`

Grid.defaultProps = {
  sm: undefined,
  md: undefined,
  lg: undefined,
  xl: undefined,
}

Grid.propTypes = {
  sm: PropTypes.number,
  md: PropTypes.number,
  lg: PropTypes.number,
  xl: PropTypes.number,
}

export default Grid
