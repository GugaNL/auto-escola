import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,700;1,600&display=swap");

html {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-size: 100%;
  color: #212121;
  box-sizing: border-box; //Garantir que todos os navegadores irão considerar o padding de acordo com o tamanho do objeto
}

*, *:before, *:after {
    box-sizing: inherit; //Faz com que herde o valor de cima, que no caso é o html
}

body {
    margin: 0;
}
`

export default GlobalStyle
