import React from "react"
import styled, { css } from "styled-components"

const Root = styled.div`
${props => css`
background: url(${props.image}), rgba(0,0,0,0.4 );
background-size: cover;
background-position: center; 
`}
`

const Title = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,600&display=swap");
  color: red;
  font-family: "Poppins", sans-serif;
  font-weight: 700;
  letter-spacing: 2px;
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
    <div>
      <Title>{title}</Title>
      <Content>{children}</Content>
    </div>
  </Root>
)

export default ImageHeader
