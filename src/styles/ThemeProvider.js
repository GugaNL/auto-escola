import React from "react"

//Theme
import { ThemeProvider as StyledProvider } from "styled-components"

export const ThemeNames = { light: "light", ocean: "ocean" }

const light = {
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

const allThemes = {
  light,
  ocean: {
    ...light,
    colors: {
      ...light.colors,
      primary: {
        main: "#2196f3",
        dark: "#1769aa",
        light: "#4dabf5",
      },
    },
  },
}

const ThemeProvider = ({ theme, children }) => (
  <StyledProvider theme={allThemes[theme]}>{children}</StyledProvider>
)

ThemeProvider.defaultProps = {
  theme: "light",
}

export default ThemeProvider
