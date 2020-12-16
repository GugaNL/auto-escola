import React from "react"
import { render } from "@testing-library/react"
import About from "./about"
import ThemeProvider from "../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

test("scroll to top in render", () => {
  render(
    <Router>
      <ThemeProvider>
        <About />
      </ThemeProvider>
    </Router>
  )

  expect(window.scrollTo).toBeCalledTimes(1)
})
