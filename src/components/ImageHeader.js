import React from "react"
import styled, { css } from "styled-components"

//Util
import { BreakAt, BreakpointSize } from "../components/Breakpoints"

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
  background-color: red;
  width: 100%;
  padding: 0 8px;

  ${BreakAt(BreakpointSize.sm)} {
    padding: 0 16px;
  }

  ${BreakAt(BreakpointSize.lg)} {
    margin: 0 auto; //Em cima e baixo nao tem margem e dos lados assume o automatico e centraliza
  }
`

const Title = styled.h1`
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 0px;
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
  }
`

const ImageHeader = ({ image, title, children }) => (
  <Root image={image}>
    <Container>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </Container>
  </Root>
)

export default ImageHeader
