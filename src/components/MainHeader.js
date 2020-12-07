import React from "react"
import styled, { css } from "styled-components"

//Util
import { BreakAt, BreakpointSize } from "../styles/Breakpoints"

//Types
import PropTypes from "prop-types"

//const PrimaryColor = "#ffc104"

const Root = styled.div`
  color: #fff;
  padding: 100px 0;
  ${(props) => css`
    background: url(${props.image}), rgba(0, 0, 0, 0.4);
    background-size: cover;
    background-position: center;
    background-blend-mode: overlay;
  `}
`

const Container = styled.div`
  width: 100%;
  padding: 0 8px;

  ${BreakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    margin: 0 auto; //Em cima e baixo nao tem margem e dos lados assume o automatico e centraliza
  }
`

const Content = styled.div`
  li {
    font-size: 17px;
    font-weight: 300;
  }

  ul {
    list-style: none;
    padding-left: 0;
  }

  li::before {
    content: "\\2713\\0020";
    color: ${(props) => props.theme.colors.primary.main};
  }
`

const MainHeader = ({ image, children }) => (
  <Root image={image} data-testid="MainHeader">
    <Container>
      <Content>{children}</Content>
    </Container>
  </Root>
)

MainHeader.propTypes = {
  image: PropTypes.string,
  //title: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
  children: PropTypes.node, //Se fosse para aceitar somente 1 elemento seria element
}

export default MainHeader
