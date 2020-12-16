import React from "react"
import { render, screen } from "@testing-library/react"
import About from "../components/pages/About"
import ThemeProvider from "../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

test("renders About page", () => {
  render(
    <Router>
      <ThemeProvider>
        <About />
      </ThemeProvider>
    </Router>
  )

  const titlePage = screen.getByText("Auto Escola Lucena")
  expect(titlePage).toBeInTheDocument()
})
