import React from "react"
import { screen, render } from "@testing-library/react"
import Error404 from "../routes/error404"
import ThemeProvider from "../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

test("renders the 404 page", () => {
  render(
    <Router>
      <ThemeProvider>
        <Error404 />
      </ThemeProvider>
    </Router>
  )

  expect(screen.getByText("Página não encontrada")).toBeInTheDocument()
})
