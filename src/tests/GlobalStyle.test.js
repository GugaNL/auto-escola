import React from "react"
import GlobalStyle from "../styles/GlobalStyle"
import ThemeProvider from "../styles/ThemeProvider"
import { render } from "@testing-library/react"

test("match snapshot", () => {
  render(
    <ThemeProvider>
      <GlobalStyle />
    </ThemeProvider>
  )

  expect(document.head).toMatchSnapshot()
})
