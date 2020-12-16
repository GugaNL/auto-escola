import React from "react"
import { render, screen } from "@testing-library/react"
import ProductDetailRoute from "./index"
import ThemeProvider from "../../styles/ThemeProvider"
import { MemoryRouter as Router } from "react-router-dom"
//External Hooks
//import { useProduct } from "../../hooks/products"

//jest.mock("../../hooks/products")

test("render with a product", () => {
  render(
    <Router>
      <ThemeProvider>
        <ProductDetailRoute />
      </ThemeProvider>
    </Router>
  )
  expect(screen.getByText("Serviço não encontrado")).toBeInTheDocument()
})
