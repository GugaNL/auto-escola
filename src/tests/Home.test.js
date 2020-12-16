import React from "react"
import { render, screen } from "@testing-library/react"
import Home from "../components/pages/Home"
import ThemeProvider from "../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

test("renders Home page", () => {
  render(
    <Router>
      <ThemeProvider>
        <Home />
      </ThemeProvider>
    </Router>
  )

  const linkElement = screen.getByText(/matricule-se agora/i)
  expect(linkElement).toBeInTheDocument()
})
