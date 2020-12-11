import React from "react"
import { render, screen } from "@testing-library/react"
import ProductDetail from "../pages/ProductDetail"
import ThemeProvider from "../../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"

test("renders ProductDetail page", () => {
  render(
    <Router>
      <ThemeProvider>
        <ProductDetail />
      </ThemeProvider>
    </Router>
  )

  const titlePage = screen.getByText("Nome do serviço")
  expect(titlePage).toBeInTheDocument()
})
