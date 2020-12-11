import React from "react"
import { addDecorator, addParameters } from "@storybook/react" //Permite adicionar qualquer estrutura acima do storybook e surtir efeito para todas as stories
import GlobalStyle from "../src/styles/GlobalStyle"
import ThemeProvider, { ThemeNames } from "../src/styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

import { select } from "@storybook/addon-knobs"

addDecorator((storyFn) => (
  <Router>
    <ThemeProvider theme={select("ThemeNames", ThemeNames, ThemeNames.light)}>
      <GlobalStyle />
      {storyFn()}
    </ThemeProvider>
  </Router>
))

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

const viewports = {
  extraSmall: {
    name: "Portrait phone (default)",
    styles: {
      width: "360px",
      height: "640px",
    },
  },
  small: {
    name: "Landscape phone (sm)",
    styles: {
      width: "640px",
      height: "360px",
    },
  },
  medium: {
    name: "Tablet (md)",
    styles: {
      width: "768px",
      height: "1024px",
    },
  },
  medium: {
    name: "Desktop (lg)",
    styles: {
      width: "1024px",
      height: "1366px",
    },
  },
  extraLarge: {
    name: "Large desktop (xl)",
    styles: {
      width: "1280px",
      height: "800px",
    },
  },
}

addParameters({
  viewport: {
    viewports,
  },
})
