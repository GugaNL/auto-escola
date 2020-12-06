import React from "react"

//Theme
import { ThemeProvider as StyledProvider } from "styled-components"

const theme = {
  colors: {
    primary: {
      main: "#ffc104",
      dark: "#c79100",
      light: "#fff350",
      text: "#212121",
    },
    danger: {
      main: "#ff3d00",
      dark: "#b22a00",
      text: "#212121",
    },
  },
}

const ThemeProvider = ({ children }) => (
  <StyledProvider theme={theme}>{children}</StyledProvider>
)

export default ThemeProvider
