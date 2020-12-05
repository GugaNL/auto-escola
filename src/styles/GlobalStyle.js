import React from "react"

//Styled component
import { createGlobalStyle } from "styled-components"

//Helmet
import { Helmet } from "react-helmet"

//Utils
import { BreakAt, BreakpointSize } from "./Breakpoints"

const GlobalStyle = createGlobalStyle`

html {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 100%; //Padrão 16px
  color: #212121;
  box-sizing: border-box; //Garantir que todos os navegadores irão considerar o padding de acordo com o tamanho do objeto
}

/**, *:before, *:after {
    box-sizing: inherit; //Faz com que herde o valor de cima, que no caso é o html
}*/

body {
    margin: 0;
}

h1, h2, h3, h4, h5, h6 {
  line-height: 1.3;
  font-weight: 700;
  letter-spacing: 2px;
  margin-left: 0;
  
  strong {
    color: #ffc107;
  }
}

h1 {
  font-size: 2.5rem; //É o mesmo que 16px * 2.5 = 40px

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 3.75rem;
  }
}

h2 {
  font-size: 2rem;

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 3.125rem;
  }
}

h3 {
  font-size: 1.9rem;

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 2.5rem;
  }
}

h4 {
  font-size: 1.3rem;
  font-weight: 600;

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 2.125rem;
  }
}

h5 {
  font-size: 1.2rem;
  font-weight: 300;

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 1.5rem;
  }
}

h6 {
  font-size: 1.1.rem;
  font-weight: 600;

  ${BreakAt(BreakpointSize.lg)} {
    font-size: 1.25rem;
  }
}
`

const GlobalStyleComposed = () => (
  <>
    <GlobalStyle />
    <Helmet>
      <meta charSet="utf-8" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;600;700&display=swap"
        rel="stylesheet"
      />
    </Helmet>
  </>
)

export default GlobalStyleComposed
